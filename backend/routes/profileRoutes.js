const express = require('express');
const router = express.Router();
const Profile = require('../models/Profile');
const { authMiddleware } = require('./adminRoutes');

// Get profile (public)
router.get('/', async (req, res) => {
    try {
        let profile = await Profile.findOne();
        if (!profile) {
            profile = new Profile({});
            await profile.save();
        }
        res.json(profile);
    } catch (err) {
        console.error("Profile GET error:", err);
        res.status(500).json({ message: err.message || 'Server Error' });
    }
});

// Update profile (protected)
router.put('/', authMiddleware, async (req, res) => {
    try {
        const updateData = { ...req.body };
        delete updateData._id; // prevent immutable _id update errors

        let profile = await Profile.findOne();
        if (!profile) {
            profile = new Profile(updateData);
            await profile.save();
        } else {
            profile = await Profile.findOneAndUpdate({}, updateData, { new: true });
        }
        res.json(profile);
    } catch (err) {
        console.error("Profile PUT error:", err);
        res.status(500).json({ message: err.message || 'Server Error' });
    }
});

module.exports = router;
