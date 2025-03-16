import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 py-6 mt-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-sm text-gray-600 mb-4 md:mb-0">
          &copy; {currentYear} HotTubFinder. All rights reserved.
        </div>
        <nav className="flex space-x-4">
          <Link 
            href="/about" 
            className="text-sm text-gray-600 hover:text-primary transition-colors"
          >
            About
          </Link>
          <Link 
            href="/author" 
            className="text-sm text-gray-600 hover:text-primary transition-colors"
          >
            Author
          </Link>
          <Link 
            href="/privacy-policy" 
            className="text-sm text-gray-600 hover:text-primary transition-colors"
          >
            Privacy Policy
          </Link>
          <Link 
            href="/terms-of-service" 
            className="text-sm text-gray-600 hover:text-primary transition-colors"
          >
            Terms of Service
          </Link>
          <Link 
            href="/sitemap" 
            className="text-sm text-gray-600 hover:text-primary transition-colors"
          >
            Sitemap
          </Link>
        </nav>
      </div>
    </footer>
  );
}
