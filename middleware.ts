import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('auth_token')?.value
  
  // Get the pathname of the request (e.g. /, /protected, /login)
  const path = request.nextUrl.pathname

  // Define a list of public routes that don't require authentication
  const publicPaths = ['/auth/sign-in', '/auth/sign-up']

  // Check if the current path is a public path
  const isPublicPath = publicPaths.includes(path)

  // If it's not a public path and there's no token, redirect to /auth/sign-in
  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL('/auth/sign-in', request.url))
  }

  // Clone the request headers and set the Authorization header if token exists
  const requestHeaders = new Headers(request.headers)
  if (token) {
    requestHeaders.set('Authorization', `Bearer ${token}`)
  }
  
  // Allow the request to continue
  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })
}

// Specify which routes this middleware should run for
export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}