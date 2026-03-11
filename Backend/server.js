const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

// Initialize Express App
const app = express();


// ====== Middleware ======
// Parse JSON request bodies
app.use(express.json());
// Parse cookies
app.use(cookieParser());
// Enable Cross-Origin Resource Sharing
app.use(cors({
    origin: process.env.CLIENT_URL || 'http://localhost:5173', // Adjust for Vite's default port
    credentials: true, // Allow sending cookies in Cross-Origin requests
}));


// ====== Database Connection ======
// We will connect to the database before starting the server
connectDB();


// ====== Routes ======
// Basic health check route
app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'success', message: 'API is running smoothly! 🚀' });
});

// Import and mount specific feature routes here later e.g.:
const authRoutes = require('./routes/authRoutes');
const contactRoutes = require('./routes/contactRoutes');

app.use('/api/auth', authRoutes);
app.use('/api/contact', contactRoutes);


// ====== Start Server ======
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is spinning up on port ${PORT}...`);
});
