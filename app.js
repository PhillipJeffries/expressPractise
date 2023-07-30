import express from "express";

import sqlite3 from "sqlite3";
const db = new sqlite3.Database('base');

db.serialize(() => {
  db.run("CREATE TABLE lorem (info TEXT)");

  const stmt = db.prepare("INSERT INTO lorem VALUES (?)");
  for (let i = 0; i<10; i++) {
    stmt.run("Ipsum "+i);
  }
  stmt.finalize();

  db.each("SELECT rowid AS id, info FROM lorem", (err, row) => {
    console.log(row.id + ": " + row.info);
  });
});

db.close();

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