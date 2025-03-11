import { getAllCountries } from "@/data/categories";

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://hotelswithottubs.com';
  const countries = getAllCountries();

  // Generate static URLs
  const staticUrls = [
    '',
    '/about',
    '/search',
    '/categories',
    '/contact',
    '/privacy-policy',
    '/terms-of-service',
    '/faq'
  ].map(path => `${baseUrl}${path}`);

  // Generate dynamic category URLs
  const categoryUrls: string[] = [];

  countries.forEach(country => {
    country.cities.forEach(city => {
      categoryUrls.push(`${baseUrl}/category/${country.slug}/${city.slug}`);
    });
  });

  // Combine all URLs
  const allUrls = [...staticUrls, ...categoryUrls];

  // Create XML sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allUrls.map(url => `
  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  `).join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}