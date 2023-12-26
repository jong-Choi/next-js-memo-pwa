import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function PUT(request: Request) {
  try {
    const memoId = request.url.split("/").at(-2);
    const data = await request.json();
    const body = data.body as { content: string };
    const result = { body };
    // const result = await sql`
    // UPDATE memos
    // SET content = ${body.content}
    // WHERE id = ${memoId};
    // `.then((res) => res.rows);

    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
