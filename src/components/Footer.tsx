
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-primary-foreground pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Main Navigation */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <nav aria-label="Footer Navigation">
              <ul className="space-y-2">
                <li><Link href="/" className="hover:underline">Home</Link></li>
                <li><Link href="/search" className="hover:underline">Search Hotels</Link></li>
                <li><Link href="/categories" className="hover:underline">Browse By Location</Link></li>
                <li><Link href="/about" className="hover:underline">About Us</Link></li>
                <li><Link href="/sitemap.xml" className="hover:underline">Sitemap</Link></li>
              </ul>
            </nav>
          </div>
          
          {/* Popular Locations */}
          <div>
            <h3 className="text-xl font-bold mb-4">Popular Locations</h3>
            <ul className="space-y-2">
              <li><Link href="/category/united-states/san-francisco" className="hover:underline">San Francisco Hotels</Link></li>
              <li><Link href="/category/united-states/chicago" className="hover:underline">Chicago Hotels</Link></li>
              <li><Link href="/category/united-states/miami" className="hover:underline">Miami Hotels</Link></li>
            </ul>
          </div>
          
          {/* Hotel Amenities */}
          <div>
            <h3 className="text-xl font-bold mb-4">Hotel Amenities</h3>
            <ul className="space-y-2">
              <li><Link href="/search?q=hot%20tub" className="hover:underline">Hotels with Hot Tubs</Link></li>
              <li><Link href="/search?q=spa" className="hover:underline">Hotels with Spas</Link></li>
              <li><Link href="/search?q=pet%20friendly" className="hover:underline">Pet-Friendly Hotels</Link></li>
              <li><Link href="/search?q=breakfast" className="hover:underline">Hotels with Free Breakfast</Link></li>
              <li><Link href="/search?q=pool" className="hover:underline">Hotels with Pools</Link></li>
            </ul>
          </div>
          
          {/* Information and Legal */}
          <div>
            <h3 className="text-xl font-bold mb-4">Information</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="hover:underline">Terms of Service</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact Us</Link></li>
              <li><Link href="/faq" className="hover:underline">FAQ</Link></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="mt-12 pt-6 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>&copy; {currentYear} Hotels With Hot Tubs. All rights reserved.</p>
              <p className="text-sm mt-2">Find the perfect hotel with amenities you'll love.</p>
            </div>
            
            {/* Schema.org structured data for local business (hidden from users, visible to search engines) */}
            <div className="hidden">
              <script type="application/ld+json" 
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "WebSite",
                    "name": "Hotels With Hot Tubs",
                    "url": "https://hotelswithottubs.com",
                    "potentialAction": {
                      "@type": "SearchAction",
                      "target": "https://hotelswithottubs.com/search?q={search_term_string}",
                      "query-input": "required name=search_term_string"
                    }
                  })
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
