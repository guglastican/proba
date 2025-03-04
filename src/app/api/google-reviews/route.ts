import { NextResponse } from 'next/server';

// Types for Google Places API response
interface GooglePlacesReview {
  authorName?: string;
  authorPhoto?: {
    uri?: string;
  };
  rating?: number;
  relativePublishTimeDescription?: string;
  text?: string;
  publishTime?: string;
}

interface GooglePlacesResponse {
  id?: string;
  displayName?: {
    text?: string;
  };
  rating?: number;
  reviews?: GooglePlacesReview[];
  error?: {
    message?: string;
  };
}

// Mock data for fallback when API fails or for development
const MOCK_REVIEWS = [
  {
    author_name: "John Smith",
    profile_photo_url: "https://lh3.googleusercontent.com/a-/ALV-UjXcCZhUfuYNYjMOIhzqKEEGgGUjQ9NRN_BJJQwQvQ=s128-c0x00000000-cc-rp-mo-ba4",
    rating: 5,
    relative_time_description: "2 months ago",
    text: "Excellent hotel with amazing service. The rooms were clean and comfortable. The staff was very friendly and helpful. Would definitely stay here again!",
    time: 1704067200 // January 1, 2024
  },
  {
    author_name: "Emily Johnson",
    profile_photo_url: "https://lh3.googleusercontent.com/a-/ALV-UjWWBetr9zj_IvQx-IZrKP0JsLbMjRPBHXXXvs1Ybw=s128-c0x00000000-cc-rp-mo-ba3",
    rating: 4,
    relative_time_description: "3 months ago",
    text: "Great location and beautiful views. The room was spacious and well-appointed. The only downside was the noise from the street, but overall a very pleasant stay.",
    time: 1698796800 // November 1, 2023
  },
  {
    author_name: "Michael Brown",
    profile_photo_url: "https://lh3.googleusercontent.com/a-/ALV-UjVcBi_O5Z9PJh6QmYYQzGZK-gT9h1MhzMu_ZdYQKA=s128-c0x00000000-cc-rp-mo-ba5",
    rating: 5,
    relative_time_description: "1 month ago",
    text: "One of the best hotels I've stayed at. The hot tub in the room was amazing! The staff went above and beyond to make our stay special. Highly recommend!",
    time: 1706745600 // February 1, 2024
  }
];

// Error messages for common Places API errors
const ERROR_MESSAGES = {
  INVALID_REQUEST: 'The Place ID provided is invalid.',
  NOT_FOUND: 'This Place ID no longer exists or has been updated.',
  OVER_QUERY_LIMIT: 'The API request quota has been exceeded.',
  REQUEST_DENIED: 'The API request was denied. Please check your API key configuration.',
  ZERO_RESULTS: 'No reviews found for this location.',
  UNKNOWN_ERROR: 'An unexpected error occurred while fetching reviews.'
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const placeId = searchParams.get('placeId');
  const useMock = searchParams.get('mock') === 'true';
  
  if (!placeId) {
    return NextResponse.json({ error: 'Place ID is required' }, { status: 400 });
  }
  
  // Return mock data if requested or if in development mode
  if (useMock || process.env.NODE_ENV === 'development') {
    console.log('Using mock data for reviews');
    return NextResponse.json({ 
      name: "Example Hotel",
      rating: 4.5,
      reviews: MOCK_REVIEWS 
    });
  }
  
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  
  if (!apiKey) {
    console.error('Google Places API key is not configured');
    return NextResponse.json({ error: 'API configuration error' }, { status: 500 });
  }
  
  try {
    console.log(`Fetching reviews for place ID: ${placeId}`);
    
    // Using the new Places API endpoint
    const response = await fetch(
      `https://places.googleapis.com/v1/places/${placeId}?fields=id,displayName,rating,reviews&key=${apiKey}`,
      {
        headers: {
          'Content-Type': 'application/json',
          'X-Goog-Api-Key': apiKey,
          'X-Goog-FieldMask': 'id,displayName,rating,reviews'
        }
      }
    );
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      const status = response.status;
      
      // Handle specific error cases
      if (status === 404) {
        console.error('Place not found:', placeId);
        return NextResponse.json({ error: ERROR_MESSAGES.NOT_FOUND }, { status: 404 });
      }
      
      if (status === 400) {
        console.error('Invalid Place ID:', placeId);
        return NextResponse.json({ error: ERROR_MESSAGES.INVALID_REQUEST }, { status: 400 });
      }
      
      if (status === 429) {
        console.error('API quota exceeded');
        return NextResponse.json({ error: ERROR_MESSAGES.OVER_QUERY_LIMIT }, { status: 429 });
      }
      
      if (status === 403) {
        console.error('API request denied');
        return NextResponse.json({ error: ERROR_MESSAGES.REQUEST_DENIED }, { status: 403 });
      }
      
      throw new Error(errorData.error?.message || `HTTP error: ${status}`);
    }
    
    const data: GooglePlacesResponse = await response.json();
    
    // Format the response to match our expected structure
    const formattedResult = {
      name: data.displayName?.text || "Hotel",
      rating: data.rating || 0,
      reviews: data.reviews?.map((review: GooglePlacesReview) => ({
        author_name: review.authorName || "Anonymous",
        profile_photo_url: review.authorPhoto?.uri || "",
        rating: review.rating || 0,
        relative_time_description: review.relativePublishTimeDescription || "",
        text: review.text || "",
        time: review.publishTime ? new Date(review.publishTime).getTime() / 1000 : Date.now() / 1000
      })) || []
    };
    
    // If no reviews are available, use mock data
    if (!formattedResult.reviews.length) {
      console.log('No reviews found for this place, using mock data');
      formattedResult.reviews = MOCK_REVIEWS;
    }
    
    return NextResponse.json(formattedResult);
  } catch (error) {
    console.error('Error fetching Google reviews:', error);
    
    // Return mock data as fallback when API fails
    console.log('Falling back to mock data due to API error');
    return NextResponse.json({ 
      name: "Example Hotel",
      rating: 4.5,
      reviews: MOCK_REVIEWS,
      error: ERROR_MESSAGES.UNKNOWN_ERROR
    });
  }
}
