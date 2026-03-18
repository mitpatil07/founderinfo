const express = require('express');
const router = express.Router();
const Analytics = require('../models/Analytics');

// Get real-time stats (simulated real-time for initial load, public)
router.get('/', async (req, res) => {
    try {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        let analytics = await Analytics.findOne({ date: today });
        if (!analytics) {
            analytics = new Analytics({ date: today });
            await analytics.save();
        }

        // Also send total all-time views
        const allTime = await Analytics.aggregate([{ $group: { _id: null, totalViews: { $sum: '$views' }, totalVisitors: { $sum: '$uniqueVisitors' } } }]);

        res.json({
            today: analytics,
            allTime: allTime.length > 0 ? allTime[0] : { totalViews: 0, totalVisitors: 0 }
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
});

// Manual ping for view/visitor (called from React)
router.post('/ping', async (req, res) => {
    try {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const { isNewVisitor } = req.body; // e.g., checked via localStorage on frontend

        let analytics = await Analytics.findOne({ date: today });
        if (!analytics) {
            analytics = new Analytics({ date: today, views: 1, uniqueVisitors: isNewVisitor ? 1 : 0 });
        } else {
            analytics.views += 1;
            if (isNewVisitor) analytics.uniqueVisitors += 1;
        }

        await analytics.save();
        res.json(analytics);
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
});

module.exports = router;
