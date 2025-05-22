
const express = require('express');
const { addBook, getBooks, getBookDetails, searchBooks } = require('../controllers/bookController');
const { auth } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/books', auth, addBook);
router.get('/books', getBooks);
router.get('/books/:id', getBookDetails);
router.get('/search', searchBooks);

module.exports = router;
