import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    //     const query = await sql`
    //     INSERT INTO memos (content, "createdAt")
    //     SELECT
    //         ${String(data["content"])},
    //         CURRENT_TIMESTAMP
    //     WHERE NOT EXISTS (
    //         SELECT 1
    //         FROM memos
    //         WHERE DATE("createdAt") = CURRENT_DATE
    //     )
    //     RETURNING id;
    // `;
    const query = await sql`
INSERT INTO memos (content, "createdAt")
SELECT
    ${String(data["content"])},
    CURRENT_TIMESTAMP
RETURNING id;
`;
    // {
    //   command: 'INSERT',
    //   fields: [
    //     {
    //       columnID: 1,
    //       dataTypeID: 23,
    //       dataTypeModifier: -1,
    //       dataTypeSize: 4,
    //       format: 'text',
    //       name: 'id',
    //       tableID: 32769
    //     }
    //   ],
    //   rowAsArray: false,
    //   rowCount: 1,
    //   rows: [ { id: 3 } ],
    //   viaNeonFetch: true
    // }
    const { rows } = query;
    if (rows.length) {
      return NextResponse.json(rows[0], { status: 200 });
    } else {
      const query = await sql`
        SELECT *
        FROM memos
        WHERE DATE("createdAt") = CURRENT_DATE;
    `;
      if (query.rows) {
        return NextResponse.json(
          { message: "Duplicated Date with " + JSON.stringify(query.rows[0]) },
          { status: 200 }
        );
      }
    }
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
