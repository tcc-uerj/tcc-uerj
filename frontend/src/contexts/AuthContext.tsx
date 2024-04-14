import { createContext, useEffect, useState } from 'react';
import { BACKEND_URL } from '@/lib/consts';
import { LoginSchema } from '@/schemas';
import * as z from 'zod';
import { deleteCookie, getCookie, setCookie } from '@/actions';

type AuthContextType = {
    user: IUser | null;
    token: string | null;
    isAuthenticated: boolean;
    login: (data: z.infer<typeof LoginSchema>) => Promise<void>
    logout: () => Promise<void>
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<IUser | null>(null)
    const [token, setToken] = useState<string | null>(null);
    const isAuthenticated = !!user;

    useEffect(() => {
        const fetchCookie = async () => {
            const sessionToken = await getCookie('session-token');

            if (sessionToken) {
                retrieveAndSetUser(sessionToken);
            }
        };

        fetchCookie();
    }, [token]);

    async function retrieveAndSetUser(token: string | undefined) {
        if (!token) return;

        const response = await fetch(`${BACKEND_URL}/users`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        if (!response.ok) return;

        const user = await response.json();

        setUser(user);
    }

    async function login(data: z.infer<typeof LoginSchema>) {
        const safeParse = LoginSchema.safeParse(data);

        if (!safeParse.success) return;

        const response = await fetch(`${BACKEND_URL}/users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        
        if (!response.ok) return;
        
        const { user, token } = await response.json();

        if (user === null || token === null) return;

        setUser(user);
        setToken(token);
        setCookie('session-token', token);
    }

    async function logout() {
        setUser(null);
        deleteCookie('session-token');
    }

    return (
        <AuthContext.Provider 
            value={{ 
                user, 
                token,
                isAuthenticated, 
                login, 
                logout 
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}