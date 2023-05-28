const mongoose = require("mongoose");

const bookReviewSchema = mongoose.Schema({
  reviewText: String,
  nameReviewer: String,
  _bookReviewerId: {
    ref: "Book",
    type: mongoose.Schema.Types.ObjectId,
  },
});

const BookReview = mongoose.model("BookReview", bookReviewSchema);

module.exports = BookReview;
