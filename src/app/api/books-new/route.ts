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
          const result = (
            rows as {
              id: number;
              title: string;
              author: string;
              description: string;
              price: string;
              onSale: string;
              image: string;
            }[]
          ).map(
            ({
              id,
              title,
              author,
              description,
              price,
              onSale,
              image,
            }) => {
              console.log({
                id,
                title,
                author,
                description,
                price: price,
                onSale: Boolean(onSale),
                image,
              });
              return {
                id,
                title,
                author,
                description,
                price: price,
                onSale: Boolean(onSale),
                image,
              };
            }
          );
          resolve(
            NextResponse.json({ result }, { status: 200 })
          );
        }
      });
    });
  });
}
