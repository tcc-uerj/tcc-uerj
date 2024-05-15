import { auth } from "@/auth";

import { 
    DEFAULT_LOGIN_REDIRECT,
    publicRoutes,
    authRoutes,
    apiAuthPrefix
} from "@/routes";
import { NextApiRequest } from "next";
import { Session } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export default auth((req: NextRequest & { auth: Session | null }): Response | void => {
    const { nextUrl } = req;
    const isLoggedIn = !!req.auth;

    const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
    const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
    const isAuthRoute = authRoutes.includes(nextUrl.pathname);

    if (isApiAuthRoute) {
        return;
    }

    if (isAuthRoute) {
        if (isLoggedIn) {
            return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl))
        }
        return;
    }

    if (!isLoggedIn && !isPublicRoute) {
        return Response.redirect(new URL("/account/login", nextUrl));
    }

    return;
});

export const config = {
    matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)']
}