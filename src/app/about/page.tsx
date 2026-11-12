import { Metadata } from 'next';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'About Hot Tub Finder',
  description: 'Learn about our mission to help travellers find the best hotels with hot tubs across the U.S.',
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://www.romantic-vacations-destinations.com'}/about`
  }
};

export default function AboutPage() {
  return (
    <div>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">About Hot Tub Finder</h1>
        
        <section className="max-w-3xl mx-auto space-y-6">
          <p className="text-lg">
          Welcome to Hot Tub Finder, your ultimate guide to finding the perfect hotel stay with the luxury of a hot tub. Whether you&apos;re planning a romantic getaway, a relaxing retreat, or a special occasion, we make it easy to discover hotels that offer the comfort and indulgence you deserve.
          </p>
          <h2 className="text-3xl font-bold text-center mb-4">Why Choose Us?</h2>
          <p className="text-lg">
          We specialize in helping travelers find hotels that feature hot tubs in-room or hot tubs on private balconies, ensuring a truly relaxing experience. Our carefully curated listings highlight the best accommodations, so you don&apos;t have to spend hours searching for the perfect stay.
          </p>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>Hand-picked hotels with in-room Jacuzzis, whirlpool tubs and spa hot tubs</li>
              <li>Easy Booking – Find and book your dream stay quickly and effortlessly</li>
              <li>Verified guest reviews and ratings</li>
              <li>Expert travel tips and local recommendations</li>
            </ul>
          </div>

          <div className="mt-8 border-t pt-6">
            <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
            <p className="text-lg">
              With decades of combined experience in the travel industry, our team of passionate professionals 
              works tirelessly to ensure you have access to the best accommodations and most reliable travel 
              information available anywhere.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
