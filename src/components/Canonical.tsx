
'use client';

import { usePathname } from 'next/navigation';
import Script from 'next/script';

export default function Canonical() {
  const pathname = usePathname();
  // Ensure URL is properly formatted with https:// and no trailing newlines
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL 
    ? process.env.NEXT_PUBLIC_BASE_URL.trim() 
    : 'https://romantic-vacations-destinations.com';
    
  // Make sure baseUrl doesn't end with a slash when pathname starts with one
  const formattedBaseUrl = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
  const canonicalUrl = `${formattedBaseUrl}${pathname}`;

  return (
    <Script id="canonical-tag" strategy="afterInteractive">
      {`
        const link = document.createElement('link');
        link.rel = 'canonical';
        link.href = '${canonicalUrl}';
        document.head.appendChild(link);
      `}
    </Script>
  );
}
