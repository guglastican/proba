export function normalizeUrlParams(param: string): string {
  return decodeURIComponent(param)
    .replace(/-/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase())
    .trim();
}

export function buildCanonicalUrl(location: string, tag: string): string {
  return `${process.env.NEXT_PUBLIC_BASE_URL || 'https://www.romantic-vacations-destinations.com'}/${encodeURIComponent(location)}/${encodeURIComponent(tag.toLowerCase())}`;
}

export function buildSearchCanonicalUrl(q: string, location: string): string {
  return `${process.env.NEXT_PUBLIC_BASE_URL || 'https://www.romantic-vacations-destinations.com'}/search?q=${encodeURIComponent(q)}&location=${encodeURIComponent(location)}`;
}
