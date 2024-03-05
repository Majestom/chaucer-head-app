import { NextResponse } from "next/server";
import sqlite3 from "sqlite3";

export async function GET(request: Request) {
  // Define the path to your SQLite3 database file
  const dbPath = "mydb.sqlite3";

  // Create a new instance of the SQLite3 database
  const db = new sqlite3.Database(dbPath);
  return new Promise((resolve, reject) => {
    db.serialize(() => {
      db.all(`SELECT * FROM books;`, (err, rows) => {
        if (err) {
          db.close();
          reject(
            NextResponse.json({ err }, { status: 500 })
          );
        } else {
          console.log("rows:", rows);
          db.close();
          resolve(
            NextResponse.json({ rows }, { status: 200 })
          );
        }
      });
    });
  });
}
