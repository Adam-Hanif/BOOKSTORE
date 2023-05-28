const { Router } = require("express");
const { bookController } = require("../controllers/book.controllers");
const router = Router();

router.get("/book", bookController.getBook); /// Показать книги
router.post("/book", bookController.addBook); ///добавление книги
router.delete("/book/:id", bookController.deleteBook); /// Удалить книгу
router.patch("/book/:id", bookController.patchBook); /// Изменить книгу
router.get("/book/:id", bookController.getBookById); /// Показать книгу
router.get("/book/genre/:id", bookController.getBookByGenre); /// Показать книгу

module.exports = router;
