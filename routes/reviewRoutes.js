const express = require('express');
const reviewController = require('../controllers/reviewController');

const router = express.Router();

router.post('/submit', reviewController.submitReview);

module.exports = router;
