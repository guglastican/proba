'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GoogleReview } from '@/types/review';
import { Star } from 'lucide-react';

interface GoogleReviewsProps {
  placeId: string;
}

export default function GoogleReviews({ placeId }: GoogleReviewsProps) {
  const [reviews, setReviews] = useState<GoogleReview[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchReviews() {
      try {
        setLoading(true);
        const response = await fetch(`/api/google-reviews?placeId=${placeId}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch reviews');
        }
        
        const data = await response.json();
        setReviews(data.reviews || []);
      } catch (err) {
        setError('Could not load reviews');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    if (placeId) {
      fetchReviews();
    }
  }, [placeId]);

  if (loading) {
    return <div className="mt-4 text-center">Loading reviews...</div>;
  }

  if (error) {
    return <div className="mt-4 text-center text-red-500">{error}</div>;
  }

  if (reviews.length === 0) {
    return <div className="mt-4 text-center">No reviews available</div>;
  }

  return (
    <div className="mt-6 space-y-4">
      <h3 className="text-xl font-semibold">Google Reviews</h3>
      {reviews.map((review, index) => (
        <Card key={index} className="overflow-hidden">
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2">
              {review.profile_photo_url && (
                <img 
                  src={review.profile_photo_url} 
                  alt={review.author_name}
                  className="h-8 w-8 rounded-full"
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
        <img 
          src="https://developers.google.com/static/maps/documentation/images/powered_by_google_on_white.png" 
          alt="Powered by Google"
          className="h-6"
        />
      </div>
    </div>
  );
}
