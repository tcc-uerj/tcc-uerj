import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Codewise - Trivia Game',
    description: 'Codewise - Trivia Game',
}

export default function TriviaLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="min-h-screen-no-header flex items-center justify-center">
            {children}
        </div>
    )
}