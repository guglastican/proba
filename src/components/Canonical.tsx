
'use client';

import { usePathname } from 'next/navigation';
import Script from 'next/script';

export default function Canonical() {
  const pathname = usePathname();
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://hotelswithottubs.com';
  const canonicalUrl = `${baseUrl}${pathname}`;

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
