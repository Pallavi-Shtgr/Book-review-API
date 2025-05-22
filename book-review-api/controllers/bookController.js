
const Book = require('../models/Book');
const Review = require('../models/Review');

const addBook = async (req, res) => {
  const book = new Book(req.body);
  await book.save();
  res.status(201).json(book);
};

const getBooks = async (req, res) => {
  const { author, genre, page = 1, limit = 5 } = req.query;
  const filter = {};
  if (author) filter.author = author;
  if (genre) filter.genre = genre;

  const books = await Book.find(filter)
    .skip((page - 1) * limit)
    .limit(parseInt(limit));
  res.json(books);
};

const getBookDetails = async (req, res) => {
  const book = await Book.findById(req.params.id).populate('reviews');
  const avgRating = book.reviews.length
    ? book.reviews.reduce((sum, r) => sum + r.rating, 0) / book.reviews.length
    : 0;

  const { page = 1, limit = 5 } = req.query;
  const reviews = book.reviews.slice((page - 1) * limit, page * limit);

  res.json({ ...book.toObject(), averageRating: avgRating, reviews });
};

const searchBooks = async (req, res) => {
  const { q } = req.query;
  const books = await Book.find({
    $or: [
      { title: new RegExp(q, 'i') },
      { author: new RegExp(q, 'i') }
    ]
  });
  res.json(books);
};

module.exports = { addBook, getBooks, getBookDetails, searchBooks };
