// import { NextResponse,type NextRequest } from "next/server";

// export function middleware(request:NextRequest){
//     return NextResponse.redirect(new URL("/Login", request.url));
// }

// export const config = {
//     matcher:"/Overview",
// }



import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const authToken = request.cookies.get("authToken"); // 🔥 Check auth token

  // If user is not logged in and tries to access /Overview, redirect to /Login
  if (!authToken && request.nextUrl.pathname.startsWith("/Overview")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next(); // ✅ Allow access if authenticated
}

export const config = {
  matcher: ["/Overview/:path*"], // ✅ Protect Overview & subroutes
};
