import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export { default } from "next-auth/middleware";

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });
  const url = request.nextUrl.clone();

  if (
    !token &&
    ["/dashboard", "/addBlog", "/editBlog", "/"].includes(url.pathname)
  ) {
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  // Add the custom header for all requests
  const headers = new Headers(request.headers);
  headers.set("x-current-path", request.nextUrl.pathname);

  return NextResponse.next({ headers });
}

export const config = {
  matcher: ["/dashboard", "/addBlog", "/editBlog", "/", "/login", "/register"],
};
