
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Add a utility function to sanitize URLs
export function sanitizeUrl(url: string | undefined): string {
  if (!url) return '';
  return url.trim().replace(/\n/g, '');
}
