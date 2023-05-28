const { Router } = require("express");
const { genreControllers } = require("../controllers/genre.controllers");
const router = Router();

router.get("/genre", genreControllers.getGenre); /// показать всех жанр
router.post("/genre", genreControllers.addGenre); /// создать жанр
router.delete("/genre/:id", genreControllers.deleteGenre); /// Удалить жанр

module.exports = router;
