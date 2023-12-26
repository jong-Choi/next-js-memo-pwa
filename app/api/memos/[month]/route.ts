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

    const month = request.url.split("/").at(-1);
    const results = await sql`
            SELECT *
            FROM users
            WHERE EXTRACT(MONTH FROM "createdAt") = ${month}
          `.then((res) => res.rows);

    return NextResponse.json({ results }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
