import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const bookTitle = searchParams.get("title");
  const author = searchParams.get("author");

  try {
    if (!bookTitle || !author)
      throw new Error("Title and author required.");
    await sql`INSERT INTO books (Title, Author) VALUES (${bookTitle}, ${author});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const books = await sql`SELECT * FROM books;`;
  return NextResponse.json({ books }, { status: 200 });
}
