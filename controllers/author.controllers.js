const Author = require("../models/Author");
module.exports.authorControllers = {
  addAuthor: async (req, res) => {
    try {
      const { authorName, aboutHim } = req.body;
      const author = await Author.create({
        authorName,
        aboutHim,
      });
      res.json(author);
    } catch (error) {
      res.json({ error: "Ошибка при добавление автора" });
    }
  },
  getAuthor: async (req, res) => {
    try {
      const author = await Author.find({});
      res.json(author);
    } catch (error) {
      res.json({ error: "Ошибка при показе всех авторов" });
    }
  },
  deleteAuthor: async (req, res) => {
    try {
      const author = await Author.findByIdAndRemove(req.params.id);
      res.json(author);
    } catch (error) {
      res.json({ error: "Ошибка при удаление автора" });
    }
  },
  patchAuthor: async (req, res) => {
    try {
      const author = await Author.findByIdAndUpdate(req.params.id, req.body);
      res.json(author);
    } catch (error) {
      res.json({ error: "Ошибка при изменение автора" });
    }
  },
};
