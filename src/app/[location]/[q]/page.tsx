import Header from "@/components/Header";
import HotelItem from "@/components/HotelItem";
import { getAllTags, locations, searchHotels } from "@/data/hotels";
import { Metadata } from "next";
import { cache } from "react";

interface PageProps {
  params: Promise<{ location: string; q: string }>;
}

export const revalidate = 86400; // Refresh cached pages once every 24 hours

export async function generateStaticParams() {
  const allTags = await getAllTags({
    // If you have very many pages, you can only render a subset at compile-time. The rest will be rendered & cached at first access.
    // limit: 10
  });

  return allTags
    .map((tag) =>
      locations.map((location) => ({
        location,
        q: tag,
      })),
    )
    .flat();
}

const getHotels = cache(searchHotels);

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { q, location } = await params;
  
  const qDecoded = decodeURIComponent(q);
  const locationDecoded = decodeURIComponent(location);
  
  const results = await getHotels(qDecoded, locationDecoded);
  
   // Create canonical URL - use custom encoding to preserve commas
  const baseUrl = 'https://www.romantic-vacations-destinations.com';
  const encodeWithCommas = (str: string) => {
    return encodeURIComponent(str).replace(/%2C/g, ',');
  };
  const canonicalUrl = `${baseUrl}/${encodeWithCommas(locationDecoded)}/${encodeWithCommas(qDecoded)}`;
  
  return {
    title: `Top ${results.length}  ${qDecoded} in ${locationDecoded}`,
    description: `Find the best ${qDecoded} near ${locationDecoded}. Imagine stepping onto your private balcony in the heart of ${locationDecoded}.`,
    alternates: {    
      canonical: canonicalUrl,
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { q, location } = await params;

  const qDecoded = decodeURIComponent(q);
  const locationDecoded = decodeURIComponent(location);

  const results = await getHotels(qDecoded, locationDecoded);

  return (
    <div>
      <Header q={qDecoded} location={locationDecoded} />
      <main className="container mx-auto space-y-8 px-4 py-8">
        <h1 className="text-center text-3xl font-bold">
          Top {results.length} {qDecoded} in {locationDecoded}
        </h1>
        <p className="font-regular">Discover the best {results.length} {qDecoded} in {locationDecoded} with our expertly curated list of top-rated accommodations. Whether you&apos;re planning a romantic escape, a rejuvenating weekend, or a luxurious getaway, we&apos;ve got the perfect stay waiting for you. Our platform is designed to make your search seamless—filter effortlessly and find exactly what you need, from cozy rooms with private Jacuzzis to upscale hotels featuring relaxing hot tub suites.</p>
         <p>
If you&apos;ve been tirelessly googling &quot;{qDecoded} near me&quot; and happen to be in the {locationDecoded} area, your search ends here. These hand-picked properties aren&apos;t just good—they&apos;re exceptional, offering comfort, privacy, and that extra touch of indulgence that turns an ordinary trip into an unforgettable experience.
         </p>
         <p>
Right now, our listings highlight {results.length} standout options that meet your exact search for {qDecoded} in {locationDecoded}. Let us help you find the perfect place to unwind and soak the stress away.
          </p>
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {results.map((hotel) => (
            <HotelItem key={hotel.id} hotel={hotel} />
          ))}
        </div>

        {/* FAQ Section with Schema Markup */}
        <div className="mt-12 space-y-6 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": `What are the best ${results.length} ${qDecoded} in ${locationDecoded}?`,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": `Based on our data, we've found the top ${results.length} ${qDecoded} in ${locationDecoded}. Our results factor in user ratings, popularity, and quality metrics to ensure you get the best options available.`
                  }
                },
                {
                  "@type": "Question",
                  "name": `How are the ${qDecoded} in ${locationDecoded} ranked?`,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": `Our ${qDecoded} in ${locationDecoded} are ranked based on a combination of user reviews, expert opinions, and data-driven metrics. We regularly update our rankings to ensure you're getting the most current information.`
                  }
                },
                {
                  "@type": "Question",
                  "name": `Are there any special ${qDecoded} deals in ${locationDecoded}?`,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": `Yes! Many of the ${qDecoded} in ${locationDecoded} offer special deals and promotions. Check the individual listings for current offers, or sign up for our newsletter to get notified about new deals.`
                  }
                },
                {
                  "@type": "Question",
                  "name": `When is the best time to visit ${qDecoded} in ${locationDecoded}?`,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": `The optimal time to visit ${qDecoded} in ${locationDecoded} typically depends on seasonal factors. Generally, weekdays are less crowded than weekends, and you might find better availability and service during off-peak hours.`
                  }
                }
              ]
            })}
          </script>
          <div className="space-y-4">
            {[
              {
                question: `What are the best ${results.length} ${qDecoded} in ${locationDecoded}?`,
                answer: `Based on our data, we've found the top ${results.length} ${qDecoded} in ${locationDecoded}. 
                Our results factor in user ratings, popularity, and quality metrics to ensure you get the best options available.`
              },
              {
                question: `How are the ${qDecoded} in ${locationDecoded} ranked?`,
                answer: `Our ${qDecoded} in ${locationDecoded} are ranked based on a combination of user reviews, expert opinions, 
                and data-driven metrics. We regularly update our rankings to ensure you're getting the most current information.`
              },
              {
                question: `Are there any special ${qDecoded} deals in ${locationDecoded}?`,
                answer: `Yes! Many of the ${qDecoded} in ${locationDecoded} offer special deals and promotions. 
                Check the individual listings for current offers, or sign up for our newsletter to get notified about new deals.`
              },
              {
                question: `When is the best time to visit ${qDecoded} in ${locationDecoded}?`,
                answer: `The optimal time to visit ${qDecoded} in ${locationDecoded} typically depends on seasonal factors. 
                Generally, weekdays are less crowded than weekends, and you might find better availability and service during off-peak hours.`
              }
            ].map((faq, index) => (
              <div key={index} className="border-b pb-4">
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}