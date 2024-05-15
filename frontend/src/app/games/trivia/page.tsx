"use client";

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export default function Trivia() {
    return (
        <div className="flex bg-gray-500 items-center flex-col p-6 rounded-lg shadow-lg mt-[100px]">
            <div className='max-w-screen-xl mx-auto p-4'>
                <div className='flex flex-col justify-between w-full text-xl font-semibold'>
                    <div>Regras</div>
                    <div className="mt-5 mb-5">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </div>
                    <div className=''>
                        <Link href={{
                            pathname: '/games/trivia/play',
                            query: {},
                        }}>        
                            <Button className={cn('p-7 text-bold')}>Jogar</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
