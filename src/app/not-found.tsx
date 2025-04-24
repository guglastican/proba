'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/');
    }, 400); // Redirect after 1 second

    // Clear the timer if the component unmounts before the timeout finishes
    return () => clearTimeout(timer); 
  }, [router]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full space-y-8 text-center">
        <h1 className="text-6xl font-bold text-primary">404</h1>
        <h2 className="text-3xl font-semibold text-gray-800">Page Not Found</h2>
        <p className="text-gray-600">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <p className="text-gray-500 text-sm mb-6">
          Redirecting to homepage shortly...
        </p>
        <Link 
          href="https://www.romantic-vacations-destinations.com" 
          className="inline-block bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors"
        >
          Return to Homepage Now
        </Link>
      </div>
    </div>
  );
}
