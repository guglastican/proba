'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html>
      <body className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
        <div className="max-w-md w-full space-y-8 text-center">
          <h1 className="text-6xl font-bold text-red-600">500</h1>
          <h2 className="text-3xl font-semibold text-gray-800">Global Application Error</h2>
          <p className="text-gray-600 mb-6">
            A critical error occurred. Our team has been notified. Please try refreshing the page or return to the homepage.
          </p>
          <div className="flex justify-center space-x-4">
            <button 
              onClick={() => reset()}
              className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors"
            >
              Try Again
            </button>
            <Link 
              href="/" 
              className="bg-gray-200 text-gray-800 px-6 py-3 rounded-md hover:bg-gray-300 transition-colors"
            >
              Return to Homepage
            </Link>
          </div>
          {error.digest && (
            <p className="text-sm text-gray-500 mt-4">
              Error ID: {error.digest}
            </p>
          )}
        </div>
      </body>
    </html>
  );
}
