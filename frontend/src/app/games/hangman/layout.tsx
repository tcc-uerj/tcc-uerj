import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'TCC Project',
    description: 'TCC Project',
}

export default function HangmanLayout({
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