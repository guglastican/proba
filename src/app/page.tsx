import Header from "@/components/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hot Tub Hotels - Find Your Perfect Getaway",
  description: "Discover hotels with hot tubs for your perfect relaxation",
};

export default function HomePage() {
  return (
    <div>
      <Header q="" location="All Locations" />
      <main className="container mx-auto space-y-8 px-4 py-8">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Find Your Perfect Hot Tub Hotel</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Discover luxurious accommodations with private hot tubs for the ultimate relaxation experience.
          </p>
        </section>
      </main>
    </div>
  );
}
