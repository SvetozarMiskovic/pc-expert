import { NextResponse } from "next/server";

export function middleware(req) {
  const path = req.nextUrl?.pathname;
  const token = req.cookies.get("authToken")?.value;

  if (path === "/prijava") {
    if (token) {
      return process.env.NODE_ENV === "development"
        ? NextResponse.redirect("http://localhost:3000/")
        : NextResponse.redirect("https://pc-expert.vercel.app/");
    } else return;
  } else if (path === "/nalog") {
    return process.env.NODE_ENV === "development"
      ? NextResponse.redirect("http://localhost:3000/nalog/info")
      : NextResponse.redirect("https://pc-expert.vercel.app/nalog/info");
  } else if (path === "/registracija") {
    if (token) {
      return process.env.NODE_ENV === "development"
        ? NextResponse.redirect("http://localhost:3000/")
        : NextResponse.redirect("https://pc-expert.vercel.app/");
    } else return;
  }
}

export const config = {
  matcher: ["/nalog", "/prijava", "/registracija"],
};
