import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const url = request.nextUrl.clone();
    const host = request.headers.get('host') || '';
    const proto = request.headers.get('x-forwarded-proto') || url.protocol.replace(':', '');

    const isProductionDomain = host.includes('romantic-vacations-destinations.com');

    if (isProductionDomain) {
        let needsRedirect = false;

        // Enforce HTTPS
        if (proto === 'http') {
            needsRedirect = true;
            url.protocol = 'https:';
            url.port = '';
        }

        // Enforce WWW (catching the apex non-www domain)
        if (host === 'romantic-vacations-destinations.com') {
            needsRedirect = true;
            url.host = 'www.romantic-vacations-destinations.com';
            url.port = '';
        }

        if (needsRedirect) {
            // Use 301 Permanent Redirect for SEO value transfer
            return NextResponse.redirect(url, 301);
        }
    }

    return NextResponse.next();
}

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
};
