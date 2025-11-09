import type { Metadata } from 'next'
import { TooltipProvider } from '@/components/ui/tooltip'
import { Toaster } from '@/components/ui/toaster'
import { Inter, Archivo } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const archivo = Archivo({ 
  subsets: ['latin'],
  variable: '--font-archivo',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Cornerstone Orphanage - Every Child Deserves Love',
  description: 'Every Child Deserves Love, Family, and a Future Filled with Hope. Cornerstone Orphanage provides a safe and nurturing home where children are empowered to dream, learn, and discover their purpose.',
  keywords: 'orphanage, children, charity, donation, support, volunteer, Bauchi, Nigeria',
  authors: [{ name: 'Cornerstone Orphanage' }],
  openGraph: {
    title: 'Cornerstone Orphanage - Every Child Deserves Love',
    description: 'Every Child Deserves Love, Family, and a Future Filled with Hope',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${archivo.variable}`}>
      <body className={`${inter.className} antialiased`}>
        <TooltipProvider>
          {children}
          <Toaster />
        </TooltipProvider>
      </body>
    </html>
  )
}
