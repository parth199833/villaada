import { auth } from "@/auth";

const publicRoutes = ["/login", "/signup", "/forgot-password"]; // Add all public routes here

export default auth((req) => {
  const { pathname, origin } = req.nextUrl;

  console.log("Middleware called with req auth", req.auth);
  console.log("Middleware called with req nextUrl", req.nextUrl);

  // Check if the route is public
  const isPublicRoute = publicRoutes.includes(pathname);

  if (!req.auth && !isPublicRoute) {
    console.log("User is not authenticated and trying to access a protected route");
    const newUrl = new URL("/login", origin);
    return Response.redirect(newUrl);
  }

  if (req.auth && pathname === "/login") {
    console.log("Auth /login called");
    const homeUrl = new URL("/home-2", origin);
    return Response.redirect(homeUrl);
  }
});

// Define the matcher to exclude certain paths
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
