import { withMiddlewareAuthRequired } from '@auth0/nextjs-auth0/edge';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export default withMiddlewareAuthRequired({
  async middleware(request: NextRequest) {
    return NextResponse.next();
  },
  returnTo(request: NextRequest) {
    return request.url;
  }
});

export const config = {
  matcher: [
    '/documentation/:path*',
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ]
};
