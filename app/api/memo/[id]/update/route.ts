import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function PUT(request: Request) {
  try {
    const memoId = request.url.split("/").at(-2);
    const data = await request.json();

    const result = await sql`
    UPDATE memos
    SET content = ${data.content}
    WHERE id = ${memoId};
    `;

    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
