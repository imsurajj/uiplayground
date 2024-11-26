import { withMiddlewareAuthRequired } from '@auth0/nextjs-auth0/edge';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export default withMiddlewareAuthRequired({
  async middleware(request: NextRequest) {
    return NextResponse.next();
  },
  returnTo(request: NextRequest) {
    return new URL('/login', request.url).toString();
  }
});

export const config = {
  matcher: ['/documentation']
};
