import Header from '@/components/Header';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About the Author - Hotel Reviews and Recommendations",
  description: "Learn more about our travel writer and hotel reviewer",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://www.romantic-vacations-destinations.com'}/author`,
  },
};

export default function AuthorPage() {
  return (
    <>
      <Header q="" location="" />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">About the Author</h1>
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-6 mb-8">
            <div className="w-32 h-32 rounded-full overflow-hidden">
              <Image
                src="/Emma-Caldwell.jpg"
                alt="Emma Caldwell"
                width={128}
                height={128}
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-semibold">Emma Caldwell</h2>
              <p className="text-gray-600">Travel Writer & Reviewer</p>
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-gray-800">
              With over a decade of experience in travel journalism, Emma specializes in authentic local experiences and hotel reviews. Her work has been featured in numerous international publications. If you love the idea of unwinding in a private hot tub after a long day of sightseeing, enjoying a romantic getaway, or simply indulging in a luxurious hotel experience, you&apos;re in the right place!
            </p>
            <div>
              <h2 className="text-2xl font-semibold">Why I Created This Website</h2>
              <p className="text-gray-800">My passion for travel and comfortable accommodations inspired me to create Booking Hotels with Hot Tubs. I realized that finding the perfect hotel with a private hot tub, jetted suite, or spa-like amenities was often difficult and time-consuming. Many hotel booking sites list thousands of options, but very few focus specifically on hot tub hotels—which is where I come in.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">What You&apos;ll Find on This Website</h2>
              <ul className="list-disc pl-6 space-y-3">
                <li><strong>✔ Handpicked Hot Tub Hotels</strong> – I personally research and select the best hotels that feature private hot tubs, whirlpool baths, and jetted suites so you can book with confidence.</li>
                <li><strong>✔ Destination Guides</strong> – Whether you&apos;re looking for the best hot tub hotels in major cities, beach resorts, mountain getaways, or countryside retreats, I cover it all.</li>
                <li><strong>✔ Exclusive Travel Tips</strong> – From finding the best deals to maximizing your hot tub experience, I share expert tips to help you make the most of your stay.</li>
                <li><strong>✔ Romantic Getaway Ideas</strong> – Planning a honeymoon, anniversary, or couples&apos; retreat? I highlight the most romantic hotels with hot tubs for an unforgettable experience.</li>
                <li><strong>✔ Luxury & Budget Options</strong> – No matter your budget, I help you find the best affordable and luxury hot tub hotels, ensuring you get value for your money.</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">Why Trust My Expertise?</h2>
              <p className="text-gray-800">I have years of experience in travel blogging, hotel research, and SEO, which allows me to provide accurate, helpful, and user-friendly hotel recommendations. Every listing on my website is carefully curated based on real traveler reviews, hotel amenities, and location convenience.</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">My Mission: Helping You Book the Perfect Stay</h2>
              <p className="text-gray-800">At Booking Hotels with Hot Tubs, my mission is to make luxurious and relaxing travel experiences accessible to everyone. Whether you&apos;re looking for a secluded cabin with a hot tub, a beachfront jetted suite, or a five-star spa resort, I strive to bring you the best options at the best prices.</p>
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-2">Let&apos;s Connect!</h3>
              <p className="text-gray-800">I love hearing from fellow travelers! Whether you need hotel recommendations, travel advice, or have a question about a specific destination, feel free to reach out.</p>
              <p className="text-gray-800">📩 Email: admin@romantic-vacations-destinations.com</p>
              <p className="text-gray-800">🌍 Instagram: @hotelswithbalcony</p>
              <p className="text-gray-800">Start exploring and book your dream hot tub hotel today!</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
