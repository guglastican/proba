'use client';

import { Hotel } from '@/data/hotels';
import { GoogleReview } from '@/types/review';
import { useEffect, useState } from 'react';

interface SchemaReviewsProps {
  hotel: Hotel;
  reviews: GoogleReview[];
}

interface SchemaData {
  '@context': string;
  '@type': string;
  name: string;
  image: string;
  address: {
    '@type': string;
    streetAddress: string;
  };
  aggregateRating: {
    '@type': string;
    ratingValue: number;
    reviewCount: number;
  };
  review: Array<{
    '@type': string;
    author: {
      '@type': string;
      name: string;
    };
    datePublished: string;
    reviewRating: {
      '@type': string;
      ratingValue: number;
    };
    reviewBody: string;
  }>;
}

export default function SchemaReviews({ hotel, reviews }: SchemaReviewsProps) {
  const [schemaData, setSchemaData] = useState<SchemaData | null>(null);

  // Extract review processing to a typed function
  const processReview = (review: GoogleReview): SchemaData['review'][0] => {
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
  };

  useEffect(() => {
    // Only generate schema data on the client side to avoid hydration errors
    if (typeof window !== 'undefined' && reviews.length > 0) {
      try {
        const data: SchemaData = {
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
          review: reviews.map(processReview)
        };
        
        setSchemaData(data);
      } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        console.error('Error generating schema data:', errorMessage);
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
