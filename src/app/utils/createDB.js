const sqlite3 = require("sqlite3");

const db = new sqlite3.Database("mydb.sqlite3");

db.run(`CREATE TABLE IF NOT EXISTS books 
  (
    id INTEGER PRIMARY KEY,
    title TEXT,
    author TEXT,
    description TEXT,
    image ""
  );`
);
