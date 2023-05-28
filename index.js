const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());
app.use(require("./routes/author.routes"));
app.use(require("./routes/book.Review.routes"));
app.use(require("./routes/book.routes"));
app.use(require("./routes/genre.routes"));

async function startServerAndConnectDB() {
  try {
    await app.listen(3000);
    await mongoose.connect(
      "mongodb+srv://into:code@cluster0.oczbebn.mongodb.net/Book-store?retryWrites=true&w=majority"
    );
    console.log("Сервер запущен");
  } catch (error) {
    console.log("Ошибка при соединении с сервером");
  }
}
startServerAndConnectDB();
