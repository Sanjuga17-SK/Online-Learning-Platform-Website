const mongoose = require('mongoose');

const loginHistorySchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },
    ipAddress: {
        type: String
    },
    userAgent: {
        type: String
    },
    status: {
        type: String,
        enum: ['success', 'failed'],
        default: 'success'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('LoginHistory', loginHistorySchema);
