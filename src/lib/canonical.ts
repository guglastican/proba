export function normalizeUrlParams(param: string): string {
  return decodeURIComponent(param)
    .replace(/-/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase())
    .trim();
}

export function buildCanonicalUrl(location: string, tag: string): string {
  return `${process.env.BASE_URL || 'https://example.com'}/${encodeURIComponent(location)}/${encodeURIComponent(tag.toLowerCase())}`;
}
