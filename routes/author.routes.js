const { Router } = require("express");
const { authorControllers } = require("../controllers/author.controllers");
const router = Router();

router.get("/author", authorControllers.getAuthor); /// Показать автора
router.post("/author", authorControllers.addAuthor); /// Созать автора
router.delete("/author/:id", authorControllers.deleteAuthor); /// Удалить автора
router.patch("/author/:id", authorControllers.patchAuthor); /// Изменить автора

module.exports = router;
