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

    // --- Fast Edge URL Normalization (Replacing getMatchedParams 301 logic) ---
    // If the path contains static file extensions or starts with api/next, ignore
    if (url.pathname.includes('.') || url.pathname.startsWith('/_') || url.pathname.startsWith('/api')) {
        return NextResponse.next();
    }

    const segments = url.pathname.split('/').filter(Boolean);

    // Hardcoded 404 intercepts
    if (segments[0] === 'hotel' || segments[0] === 'destination-weddings-in-oregon' || segments[0] === 'caribbean-sailing-cruise-vacation') {
        const redirectUrl = url.clone();
        redirectUrl.pathname = '/';
        return NextResponse.redirect(redirectUrl, 301);
    }

    if (segments[0] === 'cas-vegas-nv') {
        const redirectUrl = url.clone();
        redirectUrl.pathname = '/las-vegas-nv/hotels-with-hot-tub-in-room';
        return NextResponse.redirect(redirectUrl, 301);
    }

    // Dynamic Route Validation (/[location]/[q])
    if (segments.length === 2) {
        let locationSegment = decodeURIComponent(segments[0]);
        let tagSegment = decodeURIComponent(segments[1]);

        // Helper slugifier to mimic utils.ts
        const edgeSlugify = (str: string) => str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

        const cleanLoc = edgeSlugify(locationSegment);
        let cleanTag = edgeSlugify(tagSegment);

        let didFixParams = false;

        // If location or tag contains uppercase or spaces (e.g. /Miami, FL/Shopping)
        if (locationSegment !== cleanLoc || tagSegment !== cleanTag) {
            didFixParams = true;
        }

        // Number intercept (e.g. /las-vegas-nv/27)
        if (/^\d+$/.test(cleanTag)) {
            didFixParams = true;
            cleanTag = 'hotels-with-hot-tub-in-room';
        }

        // Tag typo/truncate intercept (e.g. /London/Hotels With Jacuzzi)
        if (cleanTag === 'hotels-with-hot' || cleanTag === 'hotels-with-jacuzzi' || cleanTag === 'spa') {
            didFixParams = true;
            cleanTag = 'hotels-with-hot-tub-in-room';
        }

        if (didFixParams) {
            const cleanedUrl = url.clone();
            cleanedUrl.pathname = `/${cleanLoc}/${cleanTag}`;
            return NextResponse.redirect(cleanedUrl, 301);
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
