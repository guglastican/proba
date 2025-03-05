import Header from '@/components/Header';

export default function AuthorPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">About the Author</h1>
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-6 mb-8">
            <div className="w-32 h-32 rounded-full bg-gray-200" />
            <div>
              <h2 className="text-2xl font-semibold">John Doe</h2>
              <p className="text-gray-600">Travel Writer & Reviewer</p>
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-lg">
              With over a decade of experience in travel journalism, John specializes in 
              authentic local experiences and hotel reviews. His work has been featured 
              in numerous international publications.
            </p>
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-2">Contact</h3>
              <p className="text-gray-600">Email: john@travelreviews.com</p>
              <p className="text-gray-600">Twitter: @johntravels</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
