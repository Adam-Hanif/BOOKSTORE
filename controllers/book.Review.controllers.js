const BookReview = require("../models/BookReview");
module.exports.bookReviewController = {
  addBookReview: async (req, res) => {
    try {
      const { reviewText, nameReviewer, _bookReviewerId } = req.body;
      const bookReview = await BookReview.create({
        reviewText,
        nameReviewer,
        _bookReviewerId,
      });
      res.json(bookReview);
    } catch (error) {
      res.json({ error: "Ошибка при добавление" });
    }
  },
  deleteBookReview: async (req, res) => {
    try {
      const bookReview = await BookReview.findByIdAndRemove(req.params.id);
      res.json(bookReview);
    } catch (error) {
      res.json({ error: "Ошибка при удаление" });
    }
  },
  getBookReviewByBook: async (req, res) => {
    try {
      const bookReview = await BookReview.find({
        _bookReviewerId: req.params.id,
      }).populate("_bookReviewerId", "-_id");
      res.json(bookReview);
    } catch (error) {
      res.json({ error: "Ошибка вывод рецензий  к определенной книгеу" });
    }
  },
};
