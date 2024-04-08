import sqlite3 from "sqlite3";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const dbPath = "mydb.sqlite3";

  const db = new sqlite3.Database(dbPath);

  const {
    title,
    author,
    description,
    onSale,
    draft,
    price,
    image,
  } = await request.json();

  return new Promise((resolve, reject) => {
    db.serialize(() => {
      db.all(
        `INSERT INTO books (title, author, description, onSale, draft, price, image) 
      VALUES (?, ?, ?, ?, ?, ?, ?);`,
        [
          title,
          author,
          description,
          onSale,
          draft,
          price,
          image,
        ],
        (err, rows) => {
          if (err) {
            console.log("err:", err);
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
        }
      );
    });
  });
}
