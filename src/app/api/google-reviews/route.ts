import { NextResponse } from 'next/server';

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
    
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,reviews&key=${apiKey}`
    );
    
    if (!response.ok) {
      console.error(`HTTP error: ${response.status} ${response.statusText}`);
      throw new Error(`HTTP error: ${response.status}`);
    }
    
    const data = await response.json();
    console.log('Google Places API response status:', data.status);
    
    if (data.status !== 'OK') {
      console.error('Google Places API error:', data.error_message || data.status);
      throw new Error(data.error_message || `Failed with status: ${data.status}`);
    }
    
    // Handle case where result exists but has no reviews
    if (!data.result.reviews || data.result.reviews.length === 0) {
      console.log('No reviews found for this place, using mock data');
      return NextResponse.json({
        name: data.result.name || "Hotel",
        rating: data.result.rating || 4.0,
        reviews: MOCK_REVIEWS
      });
    }
    
    return NextResponse.json(data.result);
  } catch (error) {
    console.error('Error fetching Google reviews:', error);
    
    // Return mock data as fallback when API fails
    console.log('Falling back to mock data due to API error');
    return NextResponse.json({ 
      name: "Example Hotel",
      rating: 4.5,
      reviews: MOCK_REVIEWS 
    });
  }
}
