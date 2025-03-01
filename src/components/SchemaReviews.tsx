import { Hotel } from '@/data/hotels';
import { GoogleReview } from '@/types/review';

interface SchemaReviewsProps {
  hotel: Hotel;
  reviews: GoogleReview[];
}

export default function SchemaReviews({ hotel, reviews }: SchemaReviewsProps) {
  const schemaData = {
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
    review: reviews.map(review => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: review.author_name
      },
      datePublished: new Date(review.time * 1000).toISOString(),
      reviewRating: {
        '@type': 'Rating',
        ratingValue: review.rating
      },
      reviewBody: review.text
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
