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
        <h1 className="text-4xl font-bold text-center mb-8">About Our Hotel Directory</h1>
        
        <section className="max-w-3xl mx-auto space-y-6">
          <p className="text-lg">
            Welcome to the premier destination for discovering and booking exceptional hotels worldwide. 
            Our mission is to simplify travel planning by providing comprehensive, up-to-date information 
            on hotels, resorts, and accommodations.
          </p>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>Detailed hotel profiles with photos and amenities</li>
              <li>Real-time pricing and availability checks</li>
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
