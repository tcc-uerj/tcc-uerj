"use client"
import React, { useContext, useState, useTransition } from 'react';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input'
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { LoginSchema } from '@/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormError } from '@/components/FormError';
import { login } from '@/actions/login';
import { toast } from '@/components/ui/use-toast';
import { useRouter } from 'next/navigation';

export default function Login() {
    const [error, setError] = useState<string>("");
    const [isPending, startTransition] = useTransition();

    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    });

    const router = useRouter();

    async function handleLogin(data: z.infer<typeof LoginSchema>) {
        startTransition(async () => {
            try {
                const response = await login(data);

                if (response?.error) {
                    setError(response.error);
                    return;
                }
                
                toast({
                    variant: "success",
                    title: "Você entrou no sistema!",
                    description: "Divirta-se e aprenda bastante.",
                    forceMount: true,
                    duration: 2000
                })
            } catch (error) {}
        })
    }

    return (
        <div className="m-auto mt-[200px] w-[400px]">
            <Card>
                <CardHeader>
                    <CardTitle>Acesse sua conta</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(handleLogin)} className="space-y-6">
                            <div className="space-y-4">
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>E-mail</FormLabel>
                                            <FormControl>
                                                <Input {...field} type="email" placeholder="Seu e-mail" disabled={isPending} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Senha</FormLabel>
                                            <FormControl>
                                                <Input {...field} type="password" placeholder="******" disabled={isPending} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <FormError message={error} />
                            <Button type="submit" className="w-full" disabled={isPending}>Entrar</Button>
                        </form>
                    </Form>
                </CardContent>
                <CardFooter></CardFooter>
            </Card>
        </div>
    )
}
