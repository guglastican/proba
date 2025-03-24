export function normalizeUrlParams(param: string): string {
  return decodeURIComponent(param)
    .replace(/-/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase())
    .trim();
}

export function buildCanonicalUrl(location: string, tag: string): string {
  // Ensure consistent encoding by normalizing spaces and special characters
  const normalizedLocation = location.trim().replace(/\s+/g, ' ').replace(/,/g, '');
  const normalizedTag = tag.trim().toLowerCase().replace(/\s+/g, ' ');
  
  return `${process.env.NEXT_PUBLIC_BASE_URL || 'https://www.romantic-vacations-destinations.com'}/${encodeURIComponent(normalizedLocation)}/${encodeURIComponent(normalizedTag)}`;
}

export function buildSearchCanonicalUrl(q: string, location: string): string {
  // Ensure consistent encoding by normalizing spaces and special characters
  const normalizedQ = q.trim().replace(/\s+/g, ' ');
  const normalizedLocation = location.trim().replace(/\s+/g, ' ');
  
  // Use + for spaces in query parameters to match browser URL encoding
  const encodedQ = encodeURIComponent(normalizedQ).replace(/%20/g, '+');
  const encodedLocation = encodeURIComponent(normalizedLocation).replace(/%20/g, '+');
  
  return `${process.env.NEXT_PUBLIC_BASE_URL || 'https://www.romantic-vacations-destinations.com'}/search?q=${encodedQ}&location=${encodedLocation}`;
}
