import fs from 'fs'
import sqlite3 from "sqlite3";

const filepath = './fish.db';

const createTable = (db) => {
  db.exec(`
    CREATE TABLE sharks
    (
      ID INTEGER PRIMARY KEY AUTOINCREMENT,
      name   VARCHAR(50) NOT NULL,
      color   VARCHAR(50) NOT NULL,
      weight INTEGER NOT NULL
    );
  `);
}

export const createDbConnection = () => {
  if (fs.existsSync(filepath)) {
    return new sqlite3.Database(filepath);
  } else {
    const db = new sqlite3.Database(filepath, (err) => {
      if (err) {
        throw new Error(err.message);
      }
      createTable(db);
    });
    console.log('connection with SQLite has been esteblished');
    return db;
  }

}

// createDbConnection();