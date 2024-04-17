import { createContext, useEffect, useState } from 'react';
import { BACKEND_BASE_URL } from '@/lib/consts';
import { LoginSchema } from '@/schemas';
import * as z from 'zod';
import { deleteCookie, getCookie, setCookie } from '@/actions/cookies';
import { api } from '@/services/api';
import { useRouter } from 'next/navigation';
import { useToast } from '@/components/ui/use-toast';

type AuthContextType = {
    user: IUser | null;
    token: string | null;
    isAuthenticated: boolean;
    login: (data: z.infer<typeof LoginSchema>) => Promise<{ error: string; } | null | void>
    logout: () => Promise<void>
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<IUser | null>(null)
    const [token, setToken] = useState<string | null>(null);
    const { toast } = useToast()
    const router = useRouter();
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

        api.defaults.headers['Authorization'] = `Bearer ${token}`;

        const response = await fetch(`${BACKEND_BASE_URL}/users`, {
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

    async function login(data: z.infer<typeof LoginSchema>): Promise<{ error: string; } | null | void> {
        const safeParse = LoginSchema.safeParse(data);

        if (!safeParse.success) return { error: 'Campos inválidos' };

        const response = await fetch(`${BACKEND_BASE_URL}/users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        
        if (!response.ok) {
            const { message } = await response.json();
            return { error: message };
        }
        
        const { user, token } = await response.json();

        if (user === null || token === null) return { error: 'Não foi encontrado o usuário ou token' };

        setUser(user);
        setToken(token);
        setCookie('session-token', token);
        router.push('/');
        toast({
            variant: "success",
            title: "Você entrou no sistema!",
            description: "Divirta-se e aprenda bastante.",
        })
    }

    async function logout() {
        setUser(null);
        deleteCookie('session-token');
        router.push('/');
        toast({
            variant: "destructive",
            title: "Você deslogou do sistema!",
            description: "Volte sempre.",
        })
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