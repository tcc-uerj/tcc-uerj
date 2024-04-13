import * as z from "zod";

export const LoginSchema = z.object({
    email: z.string().email(),
    password: z.string()
});

export const SignUpSchema = z
    .object({
        name: z.string(),
        email: z.string().email(),
        password: z.string().min(6),
        confirmPassword: z.string().min(6),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Senhas não são iguais",
        path: ["confirmPassword"],
    });