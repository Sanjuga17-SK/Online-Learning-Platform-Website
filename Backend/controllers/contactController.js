const Contact = require('../models/Contact');

// @desc    Submit Contact Form
// @route   POST /api/contact/submit
// @access  Public
exports.submitContactForm = async (req, res) => {
    try {
        const { name, email, phone, message } = req.body;

        if (!name || !email || !phone) {
            return res.status(400).json({ success: false, message: 'Please provide name, email, and phone' });
        }

        const contact = await Contact.create({
            name,
            email,
            phone,
            message
        });

        res.status(201).json({
            success: true,
            data: contact
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
