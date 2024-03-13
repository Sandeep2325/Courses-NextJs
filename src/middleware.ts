import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;
    const isPublicPath = path === "/login" || path === "/signup";
    
    const restrictedPath=path==="/courses" || path==="courses/:page*" || path==="/chat" || path==="chat/:page*"
    const token = request.cookies.get("auth_token")?.value || "";
   
    if (isPublicPath && token) {
        // return NextResponse.redirect("/")
        return NextResponse.redirect(new URL("/", request.nextUrl));
    }
    if (!isPublicPath && !token) {
        return NextResponse.redirect(new URL("/login", request.nextUrl));
    }
    if(restrictedPath && !token){
        return NextResponse.redirect(new URL("/login", request.nextUrl));

    }

}
// See "Matching Paths" below to learn more
export const config = {
    matcher: ["/", "/contactus", "/courses/:page*", "/login", "/signup", "/pricing", "/aboutus","/chat"],
};
