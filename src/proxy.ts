import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * PAUSE CONTROLLER
 * Set this to 'true' to pause the website and show the hold page.
 * Set this to 'false' to keep the website running normally.
 */
const IS_WEBSITE_PAUSED = false; 

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    IS_WEBSITE_PAUSED && 
    !pathname.startsWith('/hold') && 
    !pathname.startsWith('/_next') && 
    !pathname.includes('.')
  ) {
    const url = new URL('/hold', request.url);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
