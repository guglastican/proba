export function normalizeUrlParams(param: string): string {
  return decodeURIComponent(param)
    .replace(/-/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase())
    .trim();
}

export function buildCanonicalUrl(location: string, tag: string): string {
  // Ensure consistent encoding by normalizing spaces and special characters
  const normalizedLocation = location.trim().replace(/\s+/g, ' ');
  const normalizedTag = tag.trim().toLowerCase().replace(/\s+/g, ' ');
  
  return `${process.env.NEXT_PUBLIC_BASE_URL || 'https://www.romantic-vacations-destinations.com'}/${encodeURIComponent(normalizedLocation)}/${encodeURIComponent(normalizedTag)}`;
}

export function buildSearchCanonicalUrl(q: string, location: string): string {
  // Ensure consistent encoding by normalizing spaces and special characters
  const normalizedQ = q.trim().replace(/\s+/g, ' ');
  const normalizedLocation = location.trim().replace(/\s+/g, ' ');
  
  // Use standard URL encoding with %20 for spaces
  const encodedQ = encodeURIComponent(normalizedQ);
  const encodedLocation = encodeURIComponent(normalizedLocation);
  
  return `${process.env.NEXT_PUBLIC_BASE_URL || 'https://www.romantic-vacations-destinations.com'}/search?q=${encodedQ}&location=${encodedLocation}`;
}
