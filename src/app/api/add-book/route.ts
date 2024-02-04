import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

export async function POST(request: Request) {
  // const { searchParams } = new URL(request.url);
  // const bookTitle = searchParams.get("title");
  // const author = searchParams.get("author");
  console.log("request.json():", request.json());
  console.log("body:", request.body);
  const { bookTitle, author } = await request.json();

  try {
    if (!bookTitle || !author)
      throw new Error("Title and author required.");
    const guid = uuidv4();
    await sql`INSERT INTO books (Title, Author, Id) VALUES (${bookTitle}, ${author}, ${guid});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const books = await sql`SELECT * FROM books;`;
  return NextResponse.json({ books }, { status: 200 });
}