const mongoose = require('mongoose');

const AnalyticsSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true,
        unique: true
    },
    views: {
        type: Number,
        default: 0
    },
    uniqueVisitors: {
        type: Number,
        default: 0
    }
}, { timestamps: true });

module.exports = mongoose.model('Analytics', AnalyticsSchema);
