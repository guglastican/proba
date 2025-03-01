# Google Hotel Reviews Integration

This document provides instructions on how to set up and use the Google Places API integration for hotel reviews on your website.

## Features

- Fetch and display real Google reviews for hotels
- SEO-optimized with Schema.org structured data
- Responsive design that works on all devices
- Proper attribution with "Powered by Google" logo

## Setup Instructions

### 1. Get a Google Places API Key

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Places API for your project
4. Create an API key with appropriate restrictions
   - It's recommended to restrict the API key to only the Places API
   - You may also want to add HTTP referrer restrictions to your domain

### 2. Configure Environment Variables

1. Open the `.env.local` file in the root of your project
2. Replace `your_google_places_api_key_here` with your actual Google Places API key:
   ```
   GOOGLE_PLACES_API_KEY=your_actual_api_key_here
   ```

### 3. Add Google Place IDs to Hotels

For each hotel you want to display Google reviews for, you need to add its Google Place ID:

1. Find the Google Place ID for your hotel using the [Place ID Finder](https://developers.google.com/maps/documentation/places/web-service/place-id)
2. Add the Place ID to the hotel data in `src/data/hotels.ts`:
   ```typescript
   {
     id: 1,
     name: "Hotel Name",
     // other hotel properties...
     googlePlaceId: "ChIJN1t_tDeuEmsRUsoyG83frY4" // Add the Google Place ID here
   }
   ```

## How It Works

1. When a hotel with a `googlePlaceId` is displayed, the application makes a request to the Google Places API through our secure backend proxy
2. The reviews are fetched and displayed in a Google-style format
3. Schema.org structured data is added to the page for SEO benefits
4. The "Powered by Google" attribution is displayed as required by Google's terms of service

## Troubleshooting

If reviews are not displaying:

1. Check that your API key is correctly set in `.env.local`
2. Verify that the Places API is enabled in your Google Cloud Console
3. Ensure the Google Place ID for the hotel is correct
4. Check the browser console for any error messages
5. Verify that your API key has the necessary permissions and isn't restricted in a way that prevents it from working

## API Usage and Costs

The Google Places API is not free for production use. Be aware of the following:

- There is a free tier with a monthly credit
- Beyond the free tier, you will be charged for API usage
- Set up billing alerts in the Google Cloud Console to avoid unexpected charges
- Consider implementing caching to reduce API calls

## Terms of Service Compliance

When using the Google Places API, you must comply with Google's terms of service:

- Always display the "Powered by Google" logo
- Do not modify or filter the reviews
- Do not use the data for purposes other than displaying reviews on your site
- Review the full [Google Maps Platform Terms of Service](https://cloud.google.com/maps-platform/terms)
