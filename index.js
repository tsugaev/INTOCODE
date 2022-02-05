const express = require("express");
const mongoose = require("mongoose");

const app = express();

const PORT = 3333;

app.use(express.json());
app.use(require("./routes"));

try {
  mongoose
    .connect(
      "mongodb+srv://rakhmaev:mongo@cluster0.aklob.mongodb.net/intocode?retryWrites=true&w=majority"
    )
    .then(() => console.log("Успешно соединились с сервером MongoDB"))
    .catch(() => console.log("Ошибка при соединении с сервером MongoDB"));

  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
} catch (err) {
  console.log(`Ошибка при подключении: ${err.toString()}`);
}
