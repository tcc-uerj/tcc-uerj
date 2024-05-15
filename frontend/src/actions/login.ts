"use server"

import { LoginSchema } from "@/schemas";
import { signIn } from "@/auth";
import * as z from "zod";
import { AuthError } from "next-auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

export const login = async (data: z.infer<typeof LoginSchema>): Promise<{ error: string } | undefined> => {
    const validateFields = LoginSchema.safeParse(data);

    if (!validateFields.success) {
        throw new Error("Invalid fields");
    }

    const { email, password } = validateFields.data;

    try {
        await signIn("credentials", {
            email,
            password,
            redirectTo: DEFAULT_LOGIN_REDIRECT,
            redirect: true
        });
    } catch (error) {
        if (error instanceof AuthError) {
            if (error.cause?.err instanceof Error) {
                return { error: error.cause.err.message };
            }
            
            switch (error.type) {
                case "CredentialsSignin":
                    return { error: "Credenciais inválidas." };
                default:
                    return { error: "Algum erro ocorreu!" };
            }
        }

        throw error;
    }
}