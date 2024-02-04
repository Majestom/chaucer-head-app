import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

export async function POST(request: Request) {
  // const { searchParams } = new URL(request.url);
  // const bookTitle = searchParams.get("title");
  // const author = searchParams.get("author");
  // console.log("request.json():", await request.json());
  // console.log("body:", await request.body);
  const { title, author, description, onSale, price } =
    await request.json();

  console.log("title:", title);
  console.log("author:", author);
  console.log("description:", description);

  try {
    if (!title || !author)
      throw new Error("Title and author required.");
    const guid = uuidv4();
    await sql`INSERT INTO books (Title, Author, Id, Description, Onsale, Draft, Coverimage) VALUES (${title}, ${author}, ${guid}, ${description}, ${true}, ${false}, ${"1.png"});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const books = await sql`SELECT * FROM books;`;
  return NextResponse.json({ books }, { status: 200 });
}
