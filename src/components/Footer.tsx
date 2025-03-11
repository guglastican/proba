import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-primary-foreground pt-8 pb-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <p>&copy; {currentYear} Hotels With Hot Tubs. All rights reserved.</p>
            <p className="text-sm mt-2 opacity-75">Find the perfect hotel with amenities you'll love.</p>
          </div>
          
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
    </footer>
  );
}
