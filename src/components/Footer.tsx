import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 py-6 mt-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-600 mb-4 md:mb-0">
            &copy; {currentYear} HotTubFinder. All rights reserved.
          </div>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8 border-b border-gray-200 pb-8 w-full">
            <h4 className="text-sm font-bold text-gray-900 w-full text-center mb-2 uppercase tracking-wider">Top Destinations</h4>
            <Link href="/san-francisco-ca/hotels-with-hot-tub-in-room" className="text-sm text-gray-600 hover:text-primary transition-colors">San Francisco</Link>
            <Link href="/miami-fl/hotels-with-hot-tub-in-room" className="text-sm text-gray-600 hover:text-primary transition-colors">Miami</Link>
            <Link href="/chicago-il/hotels-with-hot-tub-in-room" className="text-sm text-gray-600 hover:text-primary transition-colors">Chicago</Link>
            <Link href="/las-vegas-nv/hotels-with-hot-tub-in-room" className="text-sm text-gray-600 hover:text-primary transition-colors">Las Vegas</Link>
            <Link href="/new-york-ny/hotels-with-hot-tub-in-room" className="text-sm text-gray-600 hover:text-primary transition-colors">New York</Link>
            <Link href="/london/hotels-with-hot-tub-in-room" className="text-sm text-gray-600 hover:text-primary transition-colors">London</Link>
            <Link href="/atlanta-ga/hotels-with-hot-tub-in-room" className="text-sm text-gray-600 hover:text-primary transition-colors">Atlanta</Link>
            <Link href="/seattle-wa/hotels-with-hot-tub-in-room" className="text-sm text-gray-600 hover:text-primary transition-colors">Seattle</Link>
          </nav>
          <nav className="flex space-x-4">
            <Link href="/about" className="text-sm text-gray-600 hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/author" className="text-sm text-gray-600 hover:text-primary transition-colors">
              Author
            </Link>
            <Link href="/privacy-policy" className="text-sm text-gray-600 hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-sm text-gray-600 hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap.xml" className="text-sm text-gray-600 hover:text-primary transition-colors">
              Sitemap
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
