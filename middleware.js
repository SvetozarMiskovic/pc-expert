import * as jose from "jose";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const path = req.nextUrl?.pathname;
  const token = req.cookies.get("authToken")?.value;

  if (path === "/prijava") {
    if (token) {
      return process.env.NODE_ENV === "development"
        ? NextResponse.redirect("http://localhost:3000/")
        : NextResponse.redirect("http://localhost:3000/");
    } else return;
  } else if (path === "/nalog") {
    return process.env.NODE_ENV === "development"
      ? NextResponse.redirect("http://localhost:3000/nalog/info")
      : NextResponse.redirect("http://localhost:3000/nalog/info");
  } else if (path === "/registracija") {
    if (token) {
      return process.env.NODE_ENV === "development"
        ? NextResponse.redirect("http://localhost:3000/")
        : NextResponse.redirect("http://localhost:3000/");
    } else return;
  } else if (path === "/admin") {
    return;
    // if (token) {
    //   return process.env.NODE_ENV === "development"
    //     ? NextResponse.redirect("http://localhost:3000/")
    //     : NextResponse.redirect("http://localhost:3000/");
    // } else return;
  }
}

export const config = {
  matcher: ["/nalog", "/prijava", "/registracija", "/admin"],
};
