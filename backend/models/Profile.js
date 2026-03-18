const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        default: 'JOE MITTIGA'
    },
    title: {
        type: String,
        required: true,
        default: 'Global Speaker & Author'
    },
    bioPart1: {
        type: String,
        required: true,
        default: 'Joe Mittiga is a Global TEDx Speaker, best-selling author, and the visionary Founder of ProjectSmile.world. Known for blending spiritual wisdom with real-world success, Joe helps people reconnect with their true power, purpose, and inner peace.'
    },
    bioPart2: {
        type: String,
        required: true,
        default: 'Through his talks, coaching, and writing, Joe has inspired thousands to rise into their highest potential—living with more clarity, love, and abundance. His journey of transformation and heart-centered leadership continues to guide individuals and organizations worldwide.'
    },
    supportUrl: {
        type: String,
        default: 'https://www.paypal.com/donate/?hosted_button_id=7QRRA68W82CF4'
    },
    exploreUrl: {
        type: String,
        default: 'https://projectsmile.world/'
    },
    youtubeUrl: { type: String, default: 'https://www.youtube.com/@JoeMittiga' },
    instagramUrl: { type: String, default: 'https://www.instagram.com/joemittiga2/' },
    linkedinUrl: { type: String, default: 'https://www.linkedin.com/in/joemittiga/' },
    facebookUrl: { type: String, default: 'https://www.facebook.com/people/Joe-Mittiga/61574825025092/' },
    twitterUrl: { type: String, default: 'https://x.com/mittiga95743' }
}, { timestamps: true });

module.exports = mongoose.model('Profile', ProfileSchema);
