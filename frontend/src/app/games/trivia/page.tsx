"use client";

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export default function Trivia() {
    return (
        <div className="flex justify-center items-center w-full h-full">
            <div className="w-[500px] bg-indigo-200 rounded-lg p-5 shadow-lg mt-[100px]">
                <div className='flex flex-col justify-between'>
                    <div className="mb-5 text-bold text-indigo-900 font-bold">
                        Bem-vindo(a) ao Trivia Game! <br />
                        - Responda corretamente às perguntas sobre design pattern e clean code para acumular pontos. <br />
                        - Cada pergunta terá quatro opções de resposta, mas apenas uma é a correta. <br />
                        - Você tem um tempo limitado para responder todas perguntas. <br />
                        Boa sorte e divirta-se testando seus conhecimentos em engenharia de software! <br />
                    </div>
                    <div className=''>
                        <Link href={{
                            pathname: '/games/trivia/play',
                            query: {},
                        }}>        
                            <Button className={cn('p-6 w-full font-bold')}>Jogar</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
