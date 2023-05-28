const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  name: String,
  authorId: {
    ref: "Author",
    type: mongoose.Schema.Types.ObjectId,
  },
  genreId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Genre",
  },
});

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;
