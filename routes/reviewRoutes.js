const express = require("express");
const reviewController = require("../controllers/reviewController");

const router = express.Router();

router.get("/", reviewController.getAllProducts);
router.post("/submit", reviewController.submitReview);

module.exports = router;
