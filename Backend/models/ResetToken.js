const mongoose = require('mongoose');

const resetTokenSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },
    token: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 600 // TTL Index: Document automatically deletes after 10 minutes (600 seconds)
    }
});

module.exports = mongoose.model('ResetToken', resetTokenSchema);
