import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const body = data.body as { content: string };

    const result = await sql`
    INSERT INTO memos (content, "createdAt")
    SELECT
      ${String(body["content"])},
      CURRENT_TIMESTAMP
    WHERE NOT EXISTS (
      SELECT 1
      FROM memos
      WHERE DATE("createdAt") = CURRENT_DATE
    );
    `.then((res) => res.rows);

    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
