const express = require("express");
// const cors = require("cors");
// const router = require("./routes");
// const AppError = require("./utils/appError");
// const errorHandler = require("./utils/errorHandler");

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Fuck you asshole</h1>')
})

app.get('/back', (req, res) => {
  res.send('<a href="/">back</a>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})