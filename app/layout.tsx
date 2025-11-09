import { type Metadata } from "next";
import { ClerkProvider, SignedIn, UserButton } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// const inter = Inter({ 
//   subsets: ['latin'],
//   variable: '--font-inter',
//   display: 'swap',
// })

// const archivo = Archivo({ 
//   subsets: ['latin'],
//   variable: '--font-archivo',
//   display: 'swap',
// })

export const metadata: Metadata = {
  title: "Cornerstone Orphanage",
  description: "Cornerstone Orphanage website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
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
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
