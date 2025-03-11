'use client';

import { usePathname } from 'next/navigation';
import Script from 'next/script';

export default function Canonical() {
  const pathname = usePathname();

  // Default URL and ensure it's properly formatted
  let baseUrl = 'https://romantic-vacations-destinations.com';

  // Try to get the environment variable if available
  if (process.env.NEXT_PUBLIC_BASE_URL) {
    // Ensure it starts with https:// and has no trailing newlines or spaces
    const envUrl = process.env.NEXT_PUBLIC_BASE_URL.trim();
    if (envUrl.startsWith('http://') || envUrl.startsWith('https://')) {
      baseUrl = envUrl;
    } else {
      // Add https:// if missing
      baseUrl = `https://${envUrl}`;
    }
  }

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