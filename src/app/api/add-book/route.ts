// import { sql } from "@vercel/postgres";
import sqlite3 from "sqlite3";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  // const { searchParams } = new URL(request.url);
  // const bookTitle = searchParams.get("title");
  // const author = searchParams.get("author");
  // console.log("request.json():", await request.json());
  // console.log("body:", await request.body);

  const dbPath = "mydb.sqlite3";

  const db = new sqlite3.Database(dbPath);

  const { title, author, description, onSale, price } =
    await request.json();

  console.log("title:", title);
  console.log("author:", author);
  console.log("description:", description);

  return new Promise((resolve, reject) => {
    db.serialize(() => {
      db.all(
        `INSERT INTO books (title, author, description) 
      VALUES (?, ?, ?);`,
        [title, author, description],
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

  // try {
  //   if (!title || !author)
  //     throw new Error("Title and author required.");
  //   const guid = uuidv4();
  //   await sql`INSERT INTO books (Title, Author, Id, Description, Onsale, Draft, Coverimage) VALUES (${title}, ${author}, ${guid}, ${description}, ${true}, ${false}, ${"1.png"});`;
  // } catch (error) {
  //   return NextResponse.json({ error }, { status: 500 });
  // }

  // const books = await sql`SELECT * FROM books;`;
  // return NextResponse.json({ books }, { status: 200 });
}
