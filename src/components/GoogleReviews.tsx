'use client';

import React, { useState, useEffect, useCallback } from 'react';
import dynamic from 'next/dynamic';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GoogleReview } from '@/types/review';
import { Star, RefreshCcw, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Dynamic import for Image to prevent SSR issues
const Image = dynamic(() => import('next/image'), {
  ssr: false,
  loading: () => <div className="h-8 w-8 bg-gray-200 rounded-full animate-pulse" />,
});

interface GoogleReviewsProps {
  placeId: string;
  useMock?: boolean;
}

const GoogleReviews: React.FC<GoogleReviewsProps> = ({ placeId, useMock = false }) => {
  const [reviews, setReviews] = useState<GoogleReview[]>([]);
  const [hotelName, setHotelName] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState<number>(0);

  // Sanitize review data with fallback values
  const sanitizeReview = useCallback(
    (review: Partial<GoogleReview>): GoogleReview => ({
      author_name: review.author_name || 'Anonymous',
      rating: review.rating || 0,
      text: review.text || 'No review text available',
      profile_photo_url: review.profile_photo_url || '',
      relative_time_description: review.relative_time_description || 'Unknown time',
      time: review.time || Date.now(),
    }),
    []
  );

  // Fetch reviews from the API
  const fetchReviews = useCallback(async () => {
    if (!placeId || typeof placeId !== 'string') {
      setError('Invalid place ID');
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    const url = useMock
      ? `/api/google-reviews?placeId=${encodeURIComponent(placeId)}&mock=true`
      : `/api/google-reviews?placeId=${encodeURIComponent(placeId)}`;

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: { Accept: 'application/json' },
        cache: 'no-store', // Prevent stale data
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to fetch reviews: ${response.status} - ${errorText}`);
      }

      const data = await response.json();

      // Handle different possible response structures
      const processedReviews = Array.isArray(data?.reviews)
        ? data.reviews.map(sanitizeReview)
        : Array.isArray(data)
          ? data.map(sanitizeReview)
          : [];

      if (processedReviews.length === 0) {
        setError('No reviews found for this location');
      } else {
        setReviews(processedReviews);
        setHotelName(data.name || 'Unnamed Location');
      }
    } catch (err) {
      console.error('Error fetching reviews:', err);
      setError(
        err instanceof Error
          ? err.message
          : 'Could not load reviews. Please try again later.'
      );
    } finally {
      setLoading(false);
    }
  }, [placeId, useMock, sanitizeReview]);

  // Fetch reviews on mount or when dependencies change
  useEffect(() => {
    fetchReviews();
  }, [fetchReviews, retryCount]);

  // Retry handler
  const handleRetry = () => {
    setRetryCount((prev) => prev + 1);
  };

  // Loading state
  if (loading) {
    return (
      <div className="mt-4 text-center py-8">
        <RefreshCcw className="h-6 w-6 text-primary animate-spin mx-auto mb-2" />
        <p className="text-muted-foreground">Loading reviews...</p>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="mt-4 text-center py-6 border border-red-200 rounded-md bg-red-50">
        <AlertCircle className="h-6 w-6 text-red-500 mx-auto mb-2" />
        <p className="text-red-600 mb-3">{error}</p>
        <Button variant="outline" size="sm" onClick={handleRetry}>
          <RefreshCcw className="h-4 w-4 mr-2" /> Try Again
        </Button>
      </div>
    );
  }

  // No reviews state
  if (reviews.length === 0) {
    return (
      <div className="mt-4 text-center py-6 text-muted-foreground">
        No reviews available for this location
      </div>
    );
  }

  // Success state: Render reviews
  return (
    <div className="mt-6 space-y-6">
      <h3 className="text-xl font-semibold text-gray-900">
        {hotelName ? `Reviews for ${hotelName}` : 'Google Reviews'}
      </h3>
      <div className="space-y-4">
        {reviews.map((review, index) => (
          <Card key={`${review.time}-${index}`} className="overflow-hidden shadow-sm">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-3">
                {review.profile_photo_url && (
                  <Image
                    src={review.profile_photo_url}
                    alt={`${review.author_name}'s profile`}
                    width={32}
                    height={32}
                    className="h-8 w-8 rounded-full object-cover"
                    quality={85}
                    sizes="32px"
                  />
                )}
                <div>
                  <CardTitle className="text-sm font-medium text-gray-800">
                    {review.author_name}
                  </CardTitle>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3 w-3 ${
                          i < review.rating
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                    <span className="ml-2 text-xs text-muted-foreground">
                      {review.relative_time_description}
                    </span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-sm text-gray-700">{review.text}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <Image
          src="https://developers.google.com/static/maps/documentation/images/powered_by_google_on_white.png"
          alt="Powered by Google"
          width={120}
          height={24}
          className="h-6 w-auto"
          quality={85}
          sizes="120px"
        />
      </div>
    </div>
  );
};

export default GoogleReviews;