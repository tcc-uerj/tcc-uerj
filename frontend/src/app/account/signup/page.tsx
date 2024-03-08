import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'

export default function SignUp() {
    return (
        <div className="m-auto mt-[200px] w-2/6">
            <Card>
                <CardHeader>
                    <CardTitle>Cadastre-se aqui</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                    <div className="space-y-1">
                        <Label htmlFor="name">Nome</Label>
                        <Input id="name" type="name" placeholder="Digite seu nome" />
                    </div>
                    <div className="space-y-1">
                        <Label htmlFor="email">E-mail</Label>
                        <Input id="email" type="email" placeholder="Digite seu e-mail" />
                    </div>
                    <div className="space-y-1">
                        <Label htmlFor="password">Senha</Label>
                        <Input id="password" type="password" placeholder="Escolha sua senha" />
                    </div>
                    <div className="space-y-1">
                        <Label htmlFor="confirmPassword">Confirme sua senha</Label>
                        <Input id="confirmPassword" type="password" placeholder="Confirme sua senha" />
                    </div>
                </CardContent>
                <CardFooter>
                    <Button>Cadastrar</Button>
                </CardFooter>
            </Card>
        </div>
    )
}
