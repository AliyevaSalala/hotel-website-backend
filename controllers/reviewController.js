const Review = require('../models/review');

exports.submitReview = async (req, res) => {
  try {
    const { reviewText, name, email } = req.body;
    const review = new Review({ reviewText, name, email });
    await review.save();
    res.status(201).json({ message: 'Review submitted successfully!' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};
