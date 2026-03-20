const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Admin = require('../models/Admin');

const JWT_SECRET = process.env.JWT_SECRET || 'fallback_secret_for_development_only';

// ================= ADMIN LOGIN =================
router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body || {};

        // ✅ Validate input
        if (!username || !password) {
            return res.status(400).json({ message: 'Username and password required' });
        }

        let admin = await Admin.findOne({ username });

        // ✅ First-time setup: create admin if none exists
        const adminCount = await Admin.countDocuments();

        if (adminCount === 0) {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            admin = new Admin({
                username,
                password: hashedPassword
            });

            await admin.save();
            console.log('✅ First admin created');
        }

        // ❌ Admin not found
        if (!admin) {
            return res.status(400).json({ message: 'Invalid Credentials' });
        }

        // ✅ Compare password
        const isMatch = await bcrypt.compare(password, admin.password);

        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid Credentials' });
        }

        // ✅ Create token
        const payload = {
            admin: { id: admin.id }
        };

        const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '24h' });

        res.json({ token });

    } catch (err) {
        console.error('❌ Login error:', err.message);
        res.status(500).json({ message: 'Server Error' });
    }
});

// ================= AUTH MIDDLEWARE =================
const authMiddleware = (req, res, next) => {
    const token = req.header('x-auth-token');

    if (!token) {
        return res.status(401).json({ message: 'No token, authorization denied' });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.admin = decoded.admin;
        next();
    } catch (err) {
        return res.status(401).json({ message: 'Token is not valid' });
    }
};

module.exports = { router, authMiddleware };