import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hotel With Hotube",
  description: "Find the best hotelss near you",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.className} antialiased`}>{children}</body>
    </html>
  );
}
//Google Manager Tag
{process.env.NODE_ENV === "production" && (
  <>
    <GoogleTagManager gtmId="GTM-KQ7B5BL5" />
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR-ID`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  </>
)}