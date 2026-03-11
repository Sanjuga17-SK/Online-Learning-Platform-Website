const User = require('../models/User');
const LoginHistory = require('../models/LoginHistory');
const ResetToken = require('../models/ResetToken');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

// Helper function to generate JWT and send cookie response
const sendTokenResponse = (user, statusCode, res) => {
    // Create token
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    });

    const options = {
        expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict'
    };

    // Remove password from output
    user.password = undefined;

    res.status(statusCode)
        .cookie('token', token, options)
        .json({
            success: true,
            token,
            user
        });
};

// @desc    Register a new user
// @route   POST /api/auth/register
// @access  Public
exports.registerUser = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        // Check if user already exists
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ success: false, message: 'User already exists with this email' });
        }

        // Create user
        const user = await User.create({
            name,
            email,
            password,
            role
        });

        sendTokenResponse(user, 201, res);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};


// @desc    Login user
// @route   POST /api/auth/login
// @access  Public
exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validate email and password presence
        if (!email || !password) {
            return res.status(400).json({ success: false, message: 'Please provide an email and password' });
        }

        // Check for user
        const user = await User.findOne({ email }).select('+password');
        if (!user) {
            return res.status(401).json({ success: false, message: 'Invalid credentials' });
        }

        // Check if password matches
        const isMatch = await user.matchPassword(password);
        if (!isMatch) {
            return res.status(401).json({ success: false, message: 'Invalid credentials' });
        }

        // Create a Login History record
        await LoginHistory.create({
            user: user._id,
            ipAddress: req.ip,
            userAgent: req.headers['user-agent'],
            status: 'success'
        });

        sendTokenResponse(user, 200, res);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};


// @desc    Log user out / clear cookie
// @route   GET /api/auth/logout
// @access  Private
exports.logoutUser = (req, res) => {
    res.cookie('token', 'none', {
        expires: new Date(Date.now() + 10 * 1000), // expires in 10 seconds
        httpOnly: true,
    });

    res.status(200).json({
        success: true,
        message: 'Successfully logged out'
    });
};

// @desc    Get current logged in user profile
// @route   GET /api/auth/me
// @access  Private
exports.getMe = async (req, res) => {
    try {
        // req.user is populated by the authMiddleware protecting this route
        const user = await User.findById(req.user.id);

        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        res.status(200).json({
            success: true,
            user
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// @desc    Forgot Password
// @route   POST /api/auth/forgotpassword
// @access  Public
exports.forgotPassword = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });

        if (!user) {
            return res.status(404).json({ success: false, message: 'There is no user with that email' });
        }

        // Typically, we would send this token via node mailer here.
        // For development/mock purposes, we will return the reset token directly in the payload!

        // Generate token
        const resetTokenRaw = crypto.randomBytes(20).toString('hex');

        // Hash token for database storage
        const resetPasswordToken = crypto
            .createHash('sha256')
            .update(resetTokenRaw)
            .digest('hex');

        // Create independent ResetToken document
        await ResetToken.create({
            user: user._id,
            token: resetPasswordToken
        });

        const resetUrl = `${req.protocol}://${req.get('host')}/api/auth/resetpassword/${resetTokenRaw}`;

        res.status(200).json({
            success: true,
            data: 'Email sent',
            resetToken: resetTokenRaw, // Exposed strictly for testing the reset password flow without Mailchimp/Sendgrid
            resetUrl: resetUrl
        });

    } catch (error) {
        res.status(500).json({ success: false, message: 'Email could not be sent' });
    }
};

// @desc    Reset Password
// @route   PUT /api/auth/resetpassword/:resettoken
// @access  Public
exports.resetPassword = async (req, res) => {
    try {
        // Get hashed token
        const resetPasswordToken = crypto
            .createHash('sha256')
            .update(req.params.resettoken)
            .digest('hex');

        // Query the dedicated ResetToken collection
        const tokenDoc = await ResetToken.findOne({
            token: resetPasswordToken
        });

        if (!tokenDoc) {
            return res.status(400).json({ success: false, message: 'Invalid or expired token' });
        }

        // Find the associated user
        const user = await User.findById(tokenDoc.user);
        if (!user) {
            return res.status(400).json({ success: false, message: 'User not found' });
        }

        // Set new password
        user.password = req.body.password;
        await user.save();

        // Delete the used token document
        await ResetToken.findByIdAndDelete(tokenDoc._id);

        sendTokenResponse(user, 200, res);

    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
