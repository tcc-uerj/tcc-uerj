import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'

export default function Login() {
    return (
        <div className="m-auto mt-[200px] w-2/6">
            <Card>
                <CardHeader>
                    <CardTitle>Acesse sua conta</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                    <div className="space-y-1">
                        <Label htmlFor="email">E-mail</Label>
                        <Input id="email" type="email" placeholder="Seu e-mail" />
                    </div>
                    <div className="space-y-1">
                        <Label htmlFor="password">Senha</Label>
                        <Input id="password" type="password" placeholder="Sua senha" />
                    </div>
                </CardContent>
                <CardFooter>
                    <Button>Entrar</Button>
                </CardFooter>
            </Card>
        </div>
    )
}
