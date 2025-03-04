'use client';

import React, { useState, useEffect, useCallback } from 'react';
import dynamic from 'next/dynamic';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GoogleReview } from '@/types/review';
import { Star, RefreshCcw, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Dynamically import Image to prevent SSR issues
const Image = dynamic(() => import('next/image'), { 
  ssr: false,
  loading: () => <div className="h-8 w-8 bg-gray-200 rounded-full" />
});

interface GoogleReviewsProps {
  placeId: string;
  useMock?: boolean;
}

const GoogleReviews: React.FC<GoogleReviewsProps> = ({ placeId, useMock = false }) => {
  const [reviews, setReviews] = useState<GoogleReview[]>([]);
  const [hotelName, setHotelName] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0);

  // Fallback for missing or invalid data
  const sanitizeReview = useCallback((review: Partial<GoogleReview>): GoogleReview => ({
    author_name: review.author_name || 'Anonymous',
    rating: review.rating || 0,
    text: review.text || 'No review text available',
    profile_photo_url: review.profile_photo_url || '',
    relative_time_description: review.relative_time_description || 'Unknown time',
    time: review.time || Date.now(), // Add missing time property
  }), []);

  const fetchReviews = useCallback(async () => {
    try {
      // Validate placeId
      if (!placeId || typeof placeId !== 'string') {
        throw new Error('Invalid place ID');
      }

      setLoading(true);
      setError(null);
      
      // Add mock parameter if useMock is true
      const url = useMock 
        ? `/api/google-reviews?placeId=${encodeURIComponent(placeId)}&mock=true` 
        : `/api/google-reviews?placeId=${encodeURIComponent(placeId)}`;
      
      console.log(`Fetching reviews from: ${url}`);
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        }
      });
      
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP error: ${response.status} - ${errorText}`);
      }
      
      const data = await response.json();
      console.log('Review data received:', data);
      
      // More robust type checking
      const processedReviews = Array.isArray(data?.reviews) 
        ? data.reviews.map(sanitizeReview)
        : Array.isArray(data) 
          ? data.map(sanitizeReview)
          : [];

      if (processedReviews.length === 0) {
        setError('No reviews found');
      } else {
        setReviews(processedReviews);
        setHotelName(data.name || "");
      }
    } catch (err) {
      console.error('Error fetching reviews:', err);
      setError(err instanceof Error 
        ? err.message 
        : 'Could not load reviews. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  }, [placeId, useMock, sanitizeReview]);

  useEffect(() => {
    if (placeId) {
      fetchReviews();
    }
  }, [placeId, fetchReviews, retryCount, useMock]);

  const handleRetry = () => {
    setRetryCount((prev: number) => prev + 1);
  };

  if (loading) {
    return (
      <div className="mt-4 text-center py-8">
        <div className="animate-spin mb-2 mx-auto">
          <RefreshCcw className="h-6 w-6 text-primary" />
        </div>
        <p>Loading reviews...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-4 text-center py-6 border border-red-200 rounded-md bg-red-50">
        <AlertCircle className="h-6 w-6 text-red-500 mx-auto mb-2" />
        <p className="text-red-500 mb-3">{error}</p>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={handleRetry}
          className="mx-auto"
        >
          <RefreshCcw className="h-4 w-4 mr-2" /> Try Again
        </Button>
      </div>
    );
  }

  if (reviews.length === 0) {
    return <div className="mt-4 text-center py-6">No reviews available for this hotel</div>;
  }

  return (
    <div className="mt-6 space-y-4">
      <h3 className="text-xl font-semibold">
        {hotelName ? `Reviews for ${hotelName}` : 'Google Reviews'}
      </h3>
      {reviews.map((review: GoogleReview, index: number) => (
        <Card key={index} className="overflow-hidden">
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2">
              {review.profile_photo_url && (
                <Image 
                  src={review.profile_photo_url} 
                  alt={review.author_name}
                  width={32}
                  height={32}
                  className="h-8 w-8 rounded-full"
                  quality={85}
                  sizes="32px"
                />
              )}
              <div>
                <CardTitle className="text-sm font-medium">{review.author_name}</CardTitle>
                <div className="flex items-center">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-3 w-3 ${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                    />
                  ))}
                  <span className="ml-1 text-xs text-muted-foreground">
                    {review.relative_time_description}
                  </span>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <p className="text-sm">{review.text}</p>
          </CardContent>
        </Card>
      ))}
      <div className="flex items-center justify-center">
        <Image 
          src="https://developers.google.com/static/maps/documentation/images/powered_by_google_on_white.png" 
          alt="Powered by Google"
          width={120}
          height={24}
          className="h-6"
          quality={85}
          sizes="120px"
        />
      </div>
    </div>
  );
};

export default GoogleReviews;
