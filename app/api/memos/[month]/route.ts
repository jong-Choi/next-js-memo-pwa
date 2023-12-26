import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    console.log(request.url);
    const result = { username: "홍길동", email: "gildong@naver.com" };
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
