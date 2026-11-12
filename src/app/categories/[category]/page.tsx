import Header from "@/components/Header";
import HotelItem from "@/components/HotelItem";
import ComparisonTable from "@/components/ComparisonTable";
import FAQSection from "@/components/FAQSection";
import QuickAnswer from "@/components/QuickAnswer";
import { categories, getCategoryBySlug, getHotelsForCategory } from "@/data/directory";
import { locationGEOData } from "@/data/location-geo-data";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

interface PageProps {
  params: Promise<{ category: string }>;
}

export function generateStaticParams() {
  return categories.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category } = await params;
  const data = getCategoryBySlug(category);
  if (!data) return { title: "Category Not Found" };

  const count = getHotelsForCategory(category).length;
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://www.romantic-vacations-destinations.com";

  return {
    title: `${data.name} - Hot Tub Hotels & Stays (${count})`,
    description: data.description,
    alternates: { canonical: `${baseUrl}/categories/${data.slug}` },
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { category } = await params;
  const data = getCategoryBySlug(category);
  if (!data) notFound();

  const hotels = getHotelsForCategory(category);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <Link
          href="/categories"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-primary"
        >
          <ArrowLeft className="size-4" />
          All stay types
        </Link>

        <header className="mb-12 text-center">
          <h1 className="mb-3 text-4xl font-bold text-gray-900 md:text-5xl">{data.name}</h1>
          <p className="mx-auto mb-4 max-w-2xl text-lg text-gray-600">{data.tagline}</p>
          <p className="mx-auto max-w-2xl text-gray-600">{data.description}</p>
        </header>

        <div className="mx-auto mb-12 max-w-4xl">
          <QuickAnswer location="the U.S." q={data.name} hotels={hotels} />
        </div>

        {hotels.length === 0 ? (
          <p className="py-16 text-center text-gray-500">
            No stays match this category yet — check back soon.
          </p>
        ) : (
          <>
            <div className="flex flex-col space-y-16 border-t border-gray-100 py-8">
              {hotels.map((hotel, index) => (
                <HotelItem key={hotel.id} hotel={hotel} index={index} />
              ))}
            </div>

            <ComparisonTable hotels={hotels} />
          </>
        )}

        <FAQSection faqs={locationGEOData["General"].faqs} location={data.name} />
      </main>
    </div>
  );
}
