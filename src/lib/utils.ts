
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Add a utility function to sanitize URLs
export function sanitizeUrl(url: string | undefined): string {
  if (!url) return '';
  
  // Remove any whitespace and newlines
  const trimmedUrl = url.trim().replace(/\n/g, '');
  
  // Ensure the URL has a protocol
  if (!trimmedUrl.match(/^https?:\/\//)) {
    return `https://${trimmedUrl}`;
  }
  
  return trimmedUrl;
}
