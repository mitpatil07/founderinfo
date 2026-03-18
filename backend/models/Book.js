const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    coverUrl: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: 'available' // available, coming-soon
    },
    statusText: {
        type: String,
        default: 'AVAILABLE NOW'
    },
    statusColor: {
        type: String,
        default: '#16a34a'
    },
    bgColor: {
        type: String,
        default: '#fef7ed'
    },
    borderColor: {
        type: String,
        default: '#fed7aa'
    },
    downloads: {
        type: String
    },
    notification: {
        type: String
    },
    buttons: [{
        text: String,
        typeClass: String, // primary, secondary
        color: String,
        hoverColor: String,
        url: String,
        disabled: { type: Boolean, default: false }
    }]
}, { timestamps: true });

module.exports = mongoose.model('Book', BookSchema);
