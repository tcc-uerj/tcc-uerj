"use client"
import React, { useState, useTransition } from 'react';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input'
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { SignUpSchema } from '@/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { signUp } from '@/actions/signup';
import { FormError } from '@/components/FormError';
import { login } from '@/actions/login';
import { toast } from '@/components/ui/use-toast';

export default function SignUp() {
    const [error, setError] = useState("");
    const [isPending, startTransition] = useTransition();
    
    const form = useForm<z.infer<typeof SignUpSchema>>({
        resolver: zodResolver(SignUpSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    });

    async function handleSignUp(data: z.infer<typeof SignUpSchema>) {
        startTransition(async () => {
            try {
                const { user, token, error } = await signUp(data);
    
                if (error) {
                    setError(error);
                    return;
                }
    
                await login({ email: data.email, password: data.password });

                toast({
                    variant: "success",
                    title: "Cadastro realizado com sucesso!",
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
                    <CardTitle>Cadastre-se aqui</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(handleSignUp)} className="space-y-6">
                            <div className="space-y-4">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Nome</FormLabel>
                                            <FormControl>
                                                <Input {...field} type="text" placeholder="Seu nome" disabled={isPending} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
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
                                <FormField
                                    control={form.control}
                                    name="confirmPassword"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Confirme a senha</FormLabel>
                                            <FormControl>
                                                <Input {...field} type="password" placeholder="******" disabled={isPending} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <FormError message={error} />
                            <Button type="submit" className="w-full" disabled={isPending}>Criar conta</Button>
                        </form>
                    </Form>
                </CardContent>
                <CardFooter></CardFooter>
            </Card>
        </div>
    )
}
