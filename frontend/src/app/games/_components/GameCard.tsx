"use client"

import Link from "next/link"
import Image from "next/image"

export default function GameCard({ game }: { 
    game: { 
        id: number,
        imageUrl?: string;
        href: string,
        name: string,
        description: string;
    } 
}) {
  return (
    <Link href={game.href} className="m-3">
        <div className="hover:shadow-sm transition overflow-hidden border rounded-lg p-3 h-full">
            <div className="flex flex-col">
                <div className="text-lg md:text-base font-medium group-hover:text-sky-700 transition line-clamp-2">
                    {game.name}
                </div>
                <p className="text-xs text-muted-foreground">
                    {game.description}
                </p>
            </div>
        </div>
    </Link>
  )
}
