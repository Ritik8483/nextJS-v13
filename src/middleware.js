import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname } = request.nextUrl;
  console.log("request", request);

  if (pathname != "/" && pathname != "/about-us") {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

export const config = {
  //only if it matches this routes it will navigate them
  //   matcher: "/about-us/:path*", //for all types of routes inside about us
  matcher: ["/about-us/:path*", "/login"],
};
