'use client';

import { Hotel } from '@/data/hotels';
import { GoogleReview } from '@/types/review';
import { useEffect, useState } from 'react';

interface SchemaReviewsProps {
  hotel: Hotel;
  reviews: GoogleReview[];
}

export default function SchemaReviews({ hotel, reviews }: SchemaReviewsProps) {
  const [schemaData, setSchemaData] = useState<any>(null);

  useEffect(() => {
    // Only generate schema data on the client side to avoid hydration errors
    if (typeof window !== 'undefined' && reviews.length > 0) {
      try {
        const data = {
          '@context': 'https://schema.org',
          '@type': 'Hotel',
          name: hotel.name,
          image: hotel.image,
          address: {
            '@type': 'PostalAddress',
            streetAddress: hotel.address
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: hotel.rating,
            reviewCount: hotel.reviews
          },
          review: reviews.map(review => {
            // Ensure time is a valid number
            const timestamp = typeof review.time === 'number' ? review.time * 1000 : Date.now();
            
            return {
              '@type': 'Review',
              author: {
                '@type': 'Person',
                name: review.author_name || 'Anonymous'
              },
              datePublished: new Date(timestamp).toISOString(),
              reviewRating: {
                '@type': 'Rating',
                ratingValue: review.rating || 5
              },
              reviewBody: review.text || ''
            };
          })
        };
        
        setSchemaData(data);
      } catch (error) {
        console.error('Error generating schema data:', error);
      }
    }
  }, [hotel, reviews]);

  if (!schemaData) {
    return null;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
