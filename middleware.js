import { NextResponse } from "next/server";

export function middleware(req) {
  return process.env.NODE_ENV === "development"
    ? NextResponse.redirect("http://localhost:3000/nalog/info")
    : NextResponse.redirect("https://pc-expert.vercel.app/nalog/info");
}

export const config = {
  matcher: "/nalog",
};
