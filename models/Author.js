const mongoose = require("mongoose");

const authorSchema = mongoose.Schema({
  authorName: String,
  aboutHim: String,
});

const Author = mongoose.model("Author", authorSchema);
module.exports = Author;
