import Link from "next/link";
import Header from "@/components/Header";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex flex-col items-center justify-center px-4 py-24 text-center">
        <p className="text-6xl font-bold text-primary">404</p>
        <h1 className="mt-4 text-3xl font-bold text-gray-900">Page not found</h1>
        <p className="mt-3 max-w-md text-gray-600">
          The page you&apos;re looking for doesn&apos;t exist or may have moved. Let&apos;s get
          you back to finding your perfect hot tub stay.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Back to Hot Tub Finder
        </Link>
      </div>
    </div>
  );
}
