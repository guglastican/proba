
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Add a utility function to sanitize URLs
export function sanitizeUrl(url: string | undefined): string {
  if (!url) return '';

  // Remove any whitespace, tabs, and newlines
  const cleanUrl = url.replace(/\s/g, '');

  // Ensure the URL has a protocol
  if (!cleanUrl.match(/^https?:\/\//)) {
    return `https://${cleanUrl}`;
  }

  return cleanUrl;
}

export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')     // Replace spaces with -
    .replace(/[^\w-]+/g, '')  // Remove all non-word chars
    .replace(/--+/g, '-')     // Replace multiple - with single -
    .replace(/^-+/, '')       // Trim - from start of text
    .replace(/-+$/, '');      // Trim - from end of text
}
