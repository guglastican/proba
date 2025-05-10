// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Normalizes a URL parameter to a consistent format
 */
function normalizeParam(param: string): string {
  return param
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");
}

/**
 * Middleware to handle URL normalization for the site
 */
export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  
  // Only handle search routes
  if (url.pathname.startsWith('/search/')) {
    const pathParts = url.pathname.split('/').filter(Boolean);
    
    // Skip if we don't have the expected search/location/q pattern
    if (pathParts.length !== 3 || pathParts[0] !== 'search') {
      return NextResponse.next();
    }
    
    const location = decodeURIComponent(pathParts[1]);
    const q = decodeURIComponent(pathParts[2]);
    
    const normalizedLocation = normalizeParam(location);
    const normalizedQ = normalizeParam(q);
    
    // If the URL is already normalized, don't redirect
    if (location === normalizedLocation && q === normalizedQ) {
      return NextResponse.next();
    }
    
    // Redirect to the normalized version
    url.pathname = `/search/${normalizedLocation}/${normalizedQ}`;
    return NextResponse.redirect(url);
  }
  
  return NextResponse.next();
}

// Only run middleware on specific paths
export const config = {
  matcher: ['/search/:path*'],
};