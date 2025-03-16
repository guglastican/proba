import { Metadata } from 'next';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'About Our Hotel Directory Service',
  description: 'Learn about our mission to provide the most comprehensive hotel listings and travel information',
};

export default function AboutPage() {
  return (
    <div>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">About Us – Booking Hotels with Hot Tubs</h1>
        
        <section className="max-w-3xl mx-auto space-y-6">
          <p className="text-lg">
          Welcome to Booking Hotels with Hot Tubs, your ultimate guide to finding the perfect hotel stay with the luxury of a private hot tub. Whether you&apos;re planning a romantic getaway, a relaxing retreat, or a special occasion, we make it easy to discover hotels that offer the comfort and indulgence you deserve.
          </p>
          <h2 className="text-4xl font-bold text-center mb-8">Why Choose Us?</h2>
          <p className="text-lg">
          We specialize in helping travelers find hotels that feature hot tubs in-room or hot tubs on private balconies, ensuring a truly relaxing experience. Our carefully curated listings highlight the best accommodations, so you don&apos;t have to spend hours searching for the perfect stay.
          </p>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>We specialize in helping travelers find hotels that feature hot tubs in-room or hot tubs on private balconies, ensuring a truly relaxing experience. Our carefully curated listings highlight the best accommodations, so you don&apos;t have to spend hours searching for the perfect stay.</li>
              <li>Easy Booking – Find and book your dream stay quickly and effortlessly.</li>
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
