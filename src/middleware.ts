import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // If user is on login page and already has auth token, redirect to returnTo or documentation
  if (pathname === '/login') {
    const authToken = request.cookies.get('auth_token');
    if (authToken) {
      const returnTo = request.nextUrl.searchParams.get('returnTo') || '/documentation';
      return NextResponse.redirect(new URL(returnTo, request.url));
    }
    return NextResponse.next();
  }

  // Only protect /documentation routes
  if (!pathname.startsWith('/documentation')) {
    return NextResponse.next();
  }

  // Check for auth token for protected routes
  const authToken = request.cookies.get('auth_token');
  if (!authToken) {
    const url = new URL('/login', request.url);
    url.searchParams.set('returnTo', pathname);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/documentation/:path*',
    '/login'
  ],
}
