import { auth } from "@/auth"
 
export default auth((req) => {
    console.log("Middleware called with req auth",req.auth);
    console.log("Middlwware callled with req nextuel",req.nextUrl);
  if (!req.auth && req.nextUrl.pathname !== "/login") {
    console.log("First if condition")
    const newUrl = new URL("/login", req.nextUrl.origin)
    return Response.redirect(newUrl)
  }
  if(req.auth && req.nextUrl.pathname === "/login"){
    const homeurl=new URL("/home-2",req.nextUrl.origin);
    return Response.redirect(homeurl);
  }
})
export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
  }