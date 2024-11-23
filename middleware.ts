import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Get the pathname of the request (e.g. /, /protected, /login)
  const path = request.nextUrl.pathname

  // Define a list of public routes that don't require authentication
  const publicPaths = ['/auth/sign-in', '/auth/sign-up']

  // Check if the current path is a public path
  const isPublicPath = publicPaths.some(publicPath => path.startsWith(publicPath))

  // If it's not a public path and not already on /auth/sign-in, redirect to /auth/sign-in
  if (!isPublicPath && path !== '/auth/sign-in') {
    return NextResponse.redirect(new URL('/auth/sign-in', request.url))
  }

  // If it's a public path or already on /auth/sign-in, allow the request to continue
  return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}