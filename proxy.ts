import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { MAINTENANCE_MODE } from 'lib/site-status';

export function proxy(request: NextRequest) {
  if (!MAINTENANCE_MODE) {
    return NextResponse.next();
  }

  const { pathname } = request.nextUrl;
  const isPublicAsset = /\.[^/]+$/.test(pathname);
  const isAllowedRoute =
    pathname === '/maintenance' ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/icon') ||
    pathname.startsWith('/favicon') ||
    pathname.startsWith('/manifest') ||
    pathname.startsWith('/robots') ||
    pathname.startsWith('/sitemap') ||
    isPublicAsset;

  if (isAllowedRoute) {
    return NextResponse.next();
  }

  const response = NextResponse.rewrite(new URL('/maintenance', request.url));
  response.headers.set('x-robots-tag', 'noindex, nofollow');
  return response;
}

export const config = {
  matcher: '/:path*',
};
