
const Review = require('../models/Review');
const Book = require('../models/Book');

const addReview = async (req, res) => {
  const existing = await Review.findOne({ user: req.user._id, book: req.params.id });
  if (existing) return res.status(400).json({ msg: 'You already reviewed this book' });

  const review = new Review({ ...req.body, user: req.user._id, book: req.params.id });
  await review.save();

  await Book.findByIdAndUpdate(req.params.id, { $push: { reviews: review._id } });
  res.status(201).json(review);
};

const updateReview = async (req, res) => {
  const review = await Review.findOne({ _id: req.params.id, user: req.user._id });
  if (!review) return res.status(404).json({ msg: 'Review not found or unauthorized' });

  Object.assign(review, req.body);
  await review.save();
  res.json(review);
};

const deleteReview = async (req, res) => {
  const review = await Review.findOneAndDelete({ _id: req.params.id, user: req.user._id });
  if (!review) return res.status(404).json({ msg: 'Review not found or unauthorized' });

  await Book.findByIdAndUpdate(review.book, { $pull: { reviews: review._id } });
  res.json({ msg: 'Review deleted' });
};

module.exports = { addReview, updateReview, deleteReview };
