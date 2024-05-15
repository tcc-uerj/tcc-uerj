import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Providers } from '@/components/Providers'
import { Toaster } from '@/components/ui/toaster'
import { auth } from '@/auth'
import { SessionProvider } from 'next-auth/react'

export const metadata: Metadata = {
  title: 'TCC Project',
  description: 'TCC Project',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body className="h-screen bg-background">
          <Providers>
            <Navbar />
              <main>{children}</main>
              <Toaster />
            <Footer />
          </Providers>
        </body>
      </html>
    </SessionProvider>
  )
}