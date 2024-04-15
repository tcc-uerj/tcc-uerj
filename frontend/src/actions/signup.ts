import * as z from 'zod';
import { SignUpSchema } from "@/schemas";
import { api } from '@/services/api';

export async function signUp(data: z.infer<typeof SignUpSchema>) {
    const safeParse = SignUpSchema.safeParse(data);

    if (!safeParse.success) {
        return { error: 'Campos inválidos' }
    }

    const { name, email, password } = safeParse.data;

    const response = await api.post('/users', {
        name,
        email,
        password
    })
    .then((res) => res.data)
    .catch((err) => err.response.data);

    if (response.status !== 201) {
        return { error: response.message }
    }

    return response.data;
}