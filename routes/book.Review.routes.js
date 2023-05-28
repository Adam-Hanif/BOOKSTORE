const { Router } = require("express");
const {
  bookReviewController,
} = require("../controllers/book.Review.controllers");
const router = Router();

router.get("/review/book/:id", bookReviewController.getBookReviewByBook); ///  вывод всех рецензий к определенной книге
router.post("/review", bookReviewController.addBookReview); /// Созать рецензию
router.delete("/review/:id", bookReviewController.deleteBookReview); /// Удалить рецензию

module.exports = router;
