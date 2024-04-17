import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Providers } from '@/components/Providers'
import { Toaster } from '@/components/ui/toaster'

export const metadata: Metadata = {
  title: 'TCC Project',
  description: 'TCC Project',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
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
  )
}