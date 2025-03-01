import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const placeId = searchParams.get('placeId');
  
  if (!placeId) {
    return NextResponse.json({ error: 'Place ID is required' }, { status: 400 });
  }
  
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  
  if (!apiKey) {
    console.error('Google Places API key is not configured');
    return NextResponse.json({ error: 'API configuration error' }, { status: 500 });
  }
  
  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,reviews&key=${apiKey}`
    );
    
    const data = await response.json();
    
    if (data.status !== 'OK') {
      throw new Error(data.error_message || 'Failed to fetch reviews');
    }
    
    return NextResponse.json(data.result);
  } catch (error) {
    console.error('Error fetching Google reviews:', error);
    return NextResponse.json({ error: 'Failed to fetch reviews' }, { status: 500 });
  }
}
