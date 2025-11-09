<<<<<<< HEAD
import { type Metadata } from "next";
import { ClerkProvider, SignedIn, UserButton } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
=======
import type { Metadata } from 'next'
import { TooltipProvider } from '@/components/ui/tooltip'
import { Toaster } from '@/components/ui/toaster'
import { Inter, Archivo } from 'next/font/google'
import './globals.css'
>>>>>>> e35fc6f7991f46901ff13dace344b32f4c7e322c

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
<<<<<<< HEAD
  title: "Cornerstone Orphanage",
  description: "Cornerstone Orphanage website",
};
=======
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
>>>>>>> e35fc6f7991f46901ff13dace344b32f4c7e322c

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<<<<<<< HEAD
    <ClerkProvider
      signInUrl="/admin/signin"
      signUpUrl="/admin/signin"
      afterSignInUrl="/admin/blogs"
      afterSignUpUrl="/admin/blogs"
    >
      <html lang="en">
        <body className={`${inter.variable} antialiased relative`}>
          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 lg:top-8 lg:right-8 z-10">
            <SignedIn>
              <UserButton afterSignOutUrl="/admin/signin" />
            </SignedIn>
          </div>
=======
    <html lang="en" className={`${inter.variable} ${archivo.variable}`}>
      <body className={`${inter.className} antialiased`}>
        <TooltipProvider>
>>>>>>> e35fc6f7991f46901ff13dace344b32f4c7e322c
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
