import Header from "@/components/Header";
import CategoryCard from "@/components/CategoryCard";
import { categories, getHotelsForCategory } from "@/data/directory";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Browse Stays by Type - Hot Tub Finder",
  description:
    "Browse hotels with hot tubs by stay type — in-room Jacuzzis, spa retreats, romantic getaways, pet-friendly stays, rooftop views and more.",
  alternates: {
    canonical: "https://www.romantic-vacations-destinations.com/categories",
  },
};

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <header className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">Browse by stay type</h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Every kind of hot tub escape, organised so you can find the perfect soak fast.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => {
            const count = getHotelsForCategory(category.slug).length;
            return (
              <CategoryCard
                key={category.slug}
                category={{ ...category, tagline: `${count} stays · ${category.tagline}` }}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}
