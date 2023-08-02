import express from "express";

import { insertRow } from "./insertData.js";


const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`<form><input type="text"/><input type="text"/><input type="text"/><button>go</button></form>`)
})

app.get('/back', (req, res) => {
  res.send('<a href="/">back</a>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})