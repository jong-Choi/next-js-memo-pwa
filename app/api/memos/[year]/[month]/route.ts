import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    await sql`
    CREATE TABLE IF NOT EXISTS memos (
      id SERIAL PRIMARY KEY,
      content VARCHAR(255) NOT NULL,
      "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
    `;

    const year = request.url.split("/").at(-2);
    const month = request.url.split("/").at(-1);
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
