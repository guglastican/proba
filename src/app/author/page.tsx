import Header from "@/components/Header";
import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About the Author | Luxury Hotels with Hot Tubs",
  description: "Learn about the author behind our curated collection of luxury hotels with hot tubs and jacuzzis around the world.",
};

export default function AuthorPage() {
  return (
    <div>
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-8 text-4xl font-bold">About the Author</h1>
          
          <div className="mb-12 flex flex-col items-center gap-8 md:flex-row">
            <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-blue-600 shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&h=256&q=80"
                alt="Author portrait"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="flex-1">
              <h2 className="mb-2 text-2xl font-semibold">John Doe</h2>
              <p className="mb-4 text-lg text-gray-600">Luxury Travel Expert & Hotel Reviewer</p>
              
              <div className="mb-4 flex space-x-4">
                <a href="https://twitter.com/johndoe" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="https://instagram.com/johndoe" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
              
              <p className="text-gray-700">
                With over 10 years of experience in the luxury travel industry, John has personally visited and reviewed more than 500 hotels across 50 countries. His expertise in identifying exceptional accommodations with premium hot tub and spa facilities has made him a trusted authority in the field.
              </p>
            </div>
          </div>
          
          <div className="mb-10">
            <h3 className="mb-4 text-2xl font-semibold">Background & Expertise</h3>
            <p className="mb-4 text-gray-700">
              John began his career as a travel writer for prestigious publications including Travel + Leisure and Condé Nast Traveler. His passion for luxury accommodations with exceptional wellness facilities led him to specialize in reviewing hotels with premium hot tub and spa experiences.
            </p>
            <p className="mb-4 text-gray-700">
              After earning his Master&apos;s degree in Hospitality Management from Cornell University, John worked with several luxury hotel chains to develop their wellness programs before launching this website to share his expertise with travelers seeking the perfect hot tub getaway.
            </p>
            <p className="text-gray-700">
              Today, John continues to travel the world in search of exceptional hot tub experiences, from private in-room jacuzzis with panoramic views to exclusive rooftop infinity hot tubs in the world&apos;s most luxurious hotels.
            </p>
          </div>
          
          <div className="mb-10">
            <h3 className="mb-4 text-2xl font-semibold">Review Methodology</h3>
            <p className="mb-4 text-gray-700">
              Each hotel featured on this site undergoes a rigorous evaluation process. John personally visits and stays at each property, assessing factors including:
            </p>
            <ul className="mb-4 list-inside list-disc space-y-2 text-gray-700">
              <li>Hot tub quality, cleanliness, and maintenance</li>
              <li>Privacy and exclusivity of the hot tub experience</li>
              <li>Views and ambiance surrounding the hot tub</li>
              <li>Additional spa and wellness facilities</li>
              <li>Overall hotel quality, service, and value</li>
            </ul>
            <p className="text-gray-700">
              Only hotels that meet John&apos;s exacting standards are featured on this site, ensuring you can book with confidence.
            </p>
          </div>
          
          <div className="mb-10">
            <h3 className="mb-4 text-2xl font-semibold">Contact</h3>
            <p className="mb-4 text-gray-700">
              Have a question about a specific hotel or want to suggest a property for review? John welcomes your input and is happy to provide personalized recommendations.
            </p>
            <div className="rounded-lg bg-gray-100 p-6">
              <h4 className="mb-2 font-semibold">Get in Touch</h4>
              <p className="mb-4">Email: <a href="mailto:john@luxuryhottuhotels.com" className="text-blue-600 hover:underline">john@luxuryhottuhotels.com</a></p>
              <p>Follow on social media for the latest reviews and travel tips.</p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/" className="inline-flex items-center rounded-md bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
