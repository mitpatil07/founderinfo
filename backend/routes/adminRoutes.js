const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Admin = require('../models/Admin');

const JWT_SECRET = process.env.JWT_SECRET || 'fallback_secret_for_development_only';

// Admin Login
router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        let admin = await Admin.findOne({ username });

        // For first time setup: auto-create an admin if none exists
        const adminCount = await Admin.countDocuments();
        if (adminCount === 0) {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            admin = new Admin({ username, password: hashedPassword });
            await admin.save();
        } else if (!admin) {
            return res.status(400).json({ message: 'Invalid Credentials' });
        }

        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid Credentials' });
        }

        const payload = { admin: { id: admin.id } };
        jwt.sign(payload, JWT_SECRET, { expiresIn: '24h' }, (err, token) => {
            if (err) throw err;
            res.json({ token });
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// Auth Middleware (to be exported/used by other routes if needed)
const authMiddleware = (req, res, next) => {
    const token = req.header('x-auth-token');
    if (!token) return res.status(401).json({ message: 'No token, authorization denied' });
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.admin = decoded.admin;
        next();
    } catch (err) {
        res.status(401).json({ message: 'Token is not valid' });
    }
};

module.exports = { router, authMiddleware };
