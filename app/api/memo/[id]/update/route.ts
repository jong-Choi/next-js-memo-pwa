import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function PUT(
  request: Request,
  context: { params: { id: string } }
) {
  try {
    const memoId = context.params.id;
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
