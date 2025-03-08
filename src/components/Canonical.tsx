
'use client';

import { usePathname } from 'next/navigation';
import Head from 'next/head';

interface CanonicalProps {
  path?: string;
}

export default function Canonical({ path }: CanonicalProps) {
  const pathname = usePathname();
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://hotelswithottubs.com';
  
  // Use provided path or current pathname
  const canonicalPath = path || pathname;
  const canonicalUrl = `${baseUrl}${canonicalPath}`;

  return (
    <Head>
      <link rel="canonical" href={canonicalUrl} />
    </Head>
  );
}
