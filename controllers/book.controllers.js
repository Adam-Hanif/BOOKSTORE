const Book = require("../models/Book");
module.exports.bookController = {
  addBook: async (req, res) => {
    try {
      const { name, authorId, genreId } = req.body;
      const book = await Book.create({
        name,
        authorId,
        genreId,
      });
      res.json(book);
    } catch (error) {
      res.json({ error: "Ошибка при добавление" });
    }
  },
  deleteBook: async (req, res) => {
    try {
      const book = await Book.findByIdAndRemove(req.params.id);
      res.json(book);
    } catch (error) {
      res.json({ error: "Ошибка при удаление" });
    }
  },
  patchBook: async (req, res) => {
    try {
      const book = await Book.findByIdAndUpdate(req.params.id, req.body);
      res.json(book);
    } catch (error) {
      res.json({ error: "Ошибка при изменение" });
    }
  },
  getBookById: async (req, res) => {
    try {
      const book = await Book.findById(req.params.id)
        .populate("genreId")
        .populate("authorId");
      res.json(book);
    } catch (error) {
      res.json({ error: "Ошибка при показе книг" });
    }
  },
  getBook: async (req, res) => {
    try {
      const book = await Book.find().populate("genreId").populate("authorId");
      res.json(book);
    } catch (error) {
      res.json({ error: "Ошибка при показе всех книг" });
    }
  },
  getBookByGenre: async (req, res) => {
    try {
      const book = await Book.find({ genreId: req.params.id });
      res.json(book);
    } catch (error) {
      res.json({ error: "Ошибка вывод книги по жанру" });
    }
  },
};
