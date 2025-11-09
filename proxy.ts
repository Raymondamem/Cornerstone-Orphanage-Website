import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isPublicRoute = createRouteMatcher([
  '/',
  '/about',
  '/contact',
  '/gallery',
  '/blog',
  '/blog(.*)',
  '/admin/signin(.*)',
  '/sign-in(.*)',
  '/api/blogs(.*)',
])

// Next.js Proxy requires a named export called `proxy`.
export function proxy(request: any) {
  const handler = clerkMiddleware(async (auth, req) => {
    if (!isPublicRoute(req)) {
      await auth.protect();
    }
  })
  // Delegate to Clerk's generated handler
  return (handler as any)(request)
}

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}
