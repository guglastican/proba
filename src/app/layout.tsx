import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";
import { sanitizeUrl } from "@/lib/utils";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hot Tub Finder - Hotels with Hot Tubs & Jacuzzi Suites",
  description: "Find the best hotels with hot tubs across the U.S. Browse in-room Jacuzzis, spa retreats, romantic getaways and more.",
  metadataBase: new URL(sanitizeUrl(process.env.NEXT_PUBLIC_BASE_URL) || 'https://www.romantic-vacations-destinations.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Hot Tub Finder - Hotels with Hot Tubs",
    description: "Discover the most relaxing hotels with hot tubs across the U.S.",
    url: "/",
    siteName: "Hot Tub Finder",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hot Tub Finder - Hotels with Hot Tubs",
    description: "Discover the most relaxing hotels with hot tubs across the U.S.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      </head>
      {/* Add Google Tag Manager */}
      <GoogleTagManager gtmId="GTM-KQ7B5BL5" />
      <body className={`${geistSans.className} antialiased flex flex-col min-h-screen`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "name": "Hot Tub Finder",
                  "url": "https://www.romantic-vacations-destinations.com/",
                  "logo": "https://www.romantic-vacations-destinations.com/hotels-with-hot-tub.jpg",
                  "founder": {
                    "@type": "Person",
                    "name": "Emma Caldwell",
                    "jobTitle": "Travel Writer & Reviewer"
                  }
                },
                {
                  "@type": "WebSite",
                  "name": "Hot Tub Finder",
                  "url": "https://www.romantic-vacations-destinations.com/"
                }
              ]
            }),
          }}
        />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
