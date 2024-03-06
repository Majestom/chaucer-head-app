import { NextResponse } from "next/server";
import sqlite3 from "sqlite3";

export async function GET() {
  const dbPath = "mydb.sqlite3";

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
          db.close();
          resolve(
            NextResponse.json({ rows }, { status: 200 })
          );
        }
      });
    });
  });
}
