import type { Metadata } from 'next'
import { TooltipProvider } from '@/components/ui/tooltip'
import { Toaster } from '@/components/ui/toaster'
import './globals.css'

export const metadata: Metadata = {
  title: 'Cornerstone Orphanage',
  description: 'Every Child Deserves Love, Family, and a Future Filled with Hope',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <TooltipProvider>
          {children}
          <Toaster />
        </TooltipProvider>
      </body>
    </html>
  )
}
