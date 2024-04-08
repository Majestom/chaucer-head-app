import fs from "fs";
import path from "path";
import sqlite3 from "sqlite3";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const dbPath = "mydb.sqlite3";

  const db = new sqlite3.Database(dbPath);

  const defaultImagePath = path.join(
    process.cwd(),
    "public/images",
    "3.png"
  );
  const defaultImage = fs.readFileSync(defaultImagePath);

  const {
    title,
    author,
    description,
    onSale = "false",
    draft = "true",
    price = "0",
    image = defaultImage,
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
