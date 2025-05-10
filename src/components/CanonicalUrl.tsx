"use client";

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

interface CanonicalUrlProps {
  location: string;
  q: string;
}

export default function CanonicalUrl({ location, q }: CanonicalUrlProps) {
  const searchParams = useSearchParams();
  const [canonicalUrl, setCanonicalUrl] = useState('');

  useEffect(() => {
    const removeUtmParams = (url: string) => {
      const urlObj = new URL(url);
      urlObj.searchParams.delete('utm_source');
      urlObj.searchParams.delete('utm_medium');
      urlObj.searchParams.delete('utm_campaign');
      urlObj.searchParams.delete('utm_term');
      urlObj.searchParams.delete('utm_content');
      return urlObj.toString();
    };

    const baseUrl = `${location}/${q}`;
    const newCanonicalUrl = removeUtmParams(`${baseUrl}?${searchParams.toString()}`);
    console.log("Canonical URL:", newCanonicalUrl);
    setCanonicalUrl(newCanonicalUrl);
  }, [q, location, searchParams]);

  return null;
}
