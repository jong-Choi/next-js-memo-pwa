import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const id = request.url.split("/").at(-1);
    const query = await sql`
            SELECT *
            FROM memos
            WHERE memos.id = ${id}
          `;
    const result = query.rows[0];

    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
