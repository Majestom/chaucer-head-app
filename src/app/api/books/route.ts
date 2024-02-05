import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

// The following are here to set the cache-control headers, as
// per: https://nextjs.org/docs/app/building-your-application/caching#segment-config-options
// export const dynamic = "force-dynamic";
// export const revalidate = 0;

export async function GET(request: Request) {
  try {
    const result = await sql`SELECT * FROM books;`;
    console.log("result:", result);
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
