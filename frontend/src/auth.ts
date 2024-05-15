import NextAuth, { Session } from "next-auth"
import Credentials from "next-auth/providers/credentials";
import { LoginSchema } from "@/schemas";
import { BACKEND_BASE_URL } from "@/lib/consts";
import { ILoginFailedResponse, ILoginSuccessResponse } from "./interfaces/responses/ILoginResponse";
import { JWT } from "next-auth/jwt";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            credentials: {
                email: {},
                password: {},
            },
            async authorize(credentials): Promise<any> {
                const safeParse = LoginSchema.safeParse(credentials);

                if (!safeParse.success) {
                    throw new Error("Campos inválidos.");
                }
                
                const response = await fetch(`${BACKEND_BASE_URL}/users/login`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(safeParse.data)
                });

                if (!response.ok) {
                    const { message } = await response.json() as ILoginFailedResponse;
                    throw new Error(message);
                }

                const { user, token } = await response.json() as ILoginSuccessResponse;

                return {
                    user: {
                        id: user.id,
                        name: user.name,
                        email: user.email,
                        points: user.points,
                        level: user.level,
                        gamesCount: user.gamesCount,
                    },
                    backendToken: token
                }
            },
        })
    ],
    session: {
        strategy: "jwt"
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) return { ...token, ...user }
            
            return token;
        },

        async session({ session, token }: { session: Session, token: JWT }) {
            session.user = token.user;
            session.backendToken = token.backendToken;
            
            return session;
        }
    },
})