const express = require('express');
const router = express.Router();
const Book = require('../models/Book');
const { authMiddleware } = require('./adminRoutes');

// Get all books (public)
router.get('/', async (req, res) => {
    try {
        const books = await Book.find().sort({ createdAt: -1 });
        res.json(books);
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
});

// Add a book (protected)
router.post('/', authMiddleware, async (req, res) => {
    try {
        const newBook = new Book(req.body);
        const book = await newBook.save();
        res.json(book);
    } catch (err) {
        console.error("Book POST Error: ", err);
        res.status(500).json({ message: err.message || 'Server Error' });
    }
});

// Update a book (protected)
router.put('/:id', authMiddleware, async (req, res) => {
    try {
        const updateData = { ...req.body };
        delete updateData._id;
        const book = await Book.findByIdAndUpdate(req.params.id, updateData, { new: true });
        if (!book) return res.status(404).json({ message: 'Book not found' });
        res.json(book);
    } catch (err) {
        console.error("Book PUT Error: ", err);
        res.status(500).json({ message: err.message || 'Server Error' });
    }
});

// Delete a book (protected)
router.delete('/:id', authMiddleware, async (req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);
        if (!book) return res.status(404).json({ message: 'Book not found' });
        res.json({ message: 'Book deleted' });
    } catch (err) {
        console.error("Book DELETE Error: ", err);
        res.status(500).json({ message: err.message || 'Server Error' });
    }
});

module.exports = router;
