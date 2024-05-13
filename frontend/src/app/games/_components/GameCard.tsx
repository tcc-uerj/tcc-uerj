"use client"

import Link from "next/link"

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
        <div className="hover:shadow-sm transition overflow-hidden border bg-indigo-800 hover:bg-indigo-600 rounded-lg p-3 h-full w-[400px]">
            <div className="flex flex-col">
                <div className="text-xl font-medium group-hover:text-sky-700 transition line-clamp-2">
                    {game.name}
                </div>
                <p className="text-sm text-muted-foreground">
                    {game.description}
                </p>
            </div>
        </div>
    </Link>
  )
}
