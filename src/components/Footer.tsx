import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 py-16 mt-20">
      <div className="standard-container">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="max-w-sm">
            <Link href="/" className="transition-transform hover:scale-105 active:scale-95">
              <span className="text-xl font-black tracking-tighter text-primary flex items-center gap-2 mb-4">
                <div className="w-6 h-6 rounded-md premium-gradient flex items-center justify-center">
                  <span className="text-white text-[10px]">HT</span>
                </div>
                HOT TUB FINDER
              </span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Expertly curated hotel selections featuring the finest private hot tubs and spa experiences across the United States.
            </p>
            <div className="text-sm text-gray-400">
              &copy; {currentYear} HotTubFinder. <br />Handcrafted for ultimate relaxation.
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
            <div>
              <h4 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-6">Company</h4>
              <nav className="flex flex-col space-y-4">
                <Link href="/about" className="text-sm text-gray-500 hover:text-primary transition-all">About Our Mission</Link>
                <Link href="/author" className="text-sm text-gray-500 hover:text-primary transition-all">Meet Excellence</Link>
                <Link href="/destinations" className="text-sm text-gray-500 hover:text-primary transition-all font-bold">All Destinations</Link>
              </nav>
            </div>

            <div>
              <h4 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-6">Legal</h4>
              <nav className="flex flex-col space-y-4">
                <Link href="/privacy-policy" className="text-sm text-gray-500 hover:text-primary transition-all">Privacy Policy</Link>
                <Link href="/terms-of-service" className="text-sm text-gray-500 hover:text-primary transition-all">Terms of Service</Link>
              </nav>
            </div>

            <div>
              <h4 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-6">Resources</h4>
              <nav className="flex flex-col space-y-4">
                <Link href="/sitemap.xml" className="text-sm text-gray-500 hover:text-primary transition-all">XML Sitemap</Link>
                <Link href="/author" className="text-sm text-gray-500 hover:text-primary transition-all italic">Expert Tips</Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
