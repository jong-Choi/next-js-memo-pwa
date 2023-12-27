import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  context: { params: { year: string; month: string } }
) {
  try {
    await sql`
    CREATE TABLE IF NOT EXISTS memos (
      id SERIAL PRIMARY KEY,
      content TEXT NOT NULL,
      "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
    `;
    const {
      params: { year, month },
    } = context;
    const query = await sql`
            SELECT *
            FROM memos
            WHERE EXTRACT(YEAR FROM "createdAt") = ${year}
            AND EXTRACT(MONTH FROM "createdAt") = ${month};
          `;
    const results = query.rows;

    return NextResponse.json({ results }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
