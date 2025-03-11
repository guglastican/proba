import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";
import { sanitizeUrl } from "@/lib/utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hotel With Hot Tubs",
  description: "Find the best hotels near you",
  metadataBase: new URL(sanitizeUrl(process.env.NEXT_PUBLIC_BASE_URL) || 'https://romantic-vacations-destinations.com'),
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Add Google Tag Manager */}
      <GoogleTagManager gtmId="GTM-KQ7B5BL5" />
      <body className={`${geistSans.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
