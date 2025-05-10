// lib/url-helpers.ts

/**
 * Normalizes a URL parameter to a consistent format
 * - Converts to lowercase
 * - Replaces spaces with hyphens
 * - Removes special characters
 * - Ensures consistent encoding
 */
export function normalizeParam(param: string): string {
  return param
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");
}

/**
 * Converts a normalized parameter back to a display-friendly format
 * - Replaces hyphens with spaces
 */
export function formatParamForDisplay(param: string): string {
  return param.replace(/-/g, " ");
}

/**
 * Builds a canonical URL for search pages
 */
export function buildCanonicalSearchUrl(location: string, q: string): string {
  return `/search/${normalizeParam(location)}/${normalizeParam(q)}`;
}