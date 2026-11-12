import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { categories } from "@/data/directory";
import { locations } from "@/data/hotels";
import { slugify, PRIMARY_TAG_SLUG } from "@/lib/utils";

const cityHref = (location: string) => `/${slugify(location)}/${PRIMARY_TAG_SLUG}`;

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-primary shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link href="/" className="text-2xl font-bold text-primary-foreground">
          Hot Tub Finder
        </Link>

        <nav className="flex items-center gap-1 text-sm font-medium">
          {/* Stay Types dropdown */}
          <div className="group relative">
            <Link
              href="/categories"
              className="flex items-center gap-1 rounded-lg px-3 py-2 text-primary-foreground/90 transition-colors hover:bg-white/10 hover:text-white"
            >
              Stay Types
              <ChevronDown className="size-4 transition-transform duration-200 group-hover:rotate-180" />
            </Link>

            <div className="invisible absolute left-0 top-full z-50 pt-2 opacity-0 transition-opacity duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="w-72 rounded-xl border border-gray-100 bg-white p-2 shadow-xl">
                {categories.map((category) => (
                  <Link
                    key={category.slug}
                    href={`/categories/${category.slug}`}
                    className="flex flex-col rounded-lg px-3 py-2 transition-colors hover:bg-emerald-50"
                  >
                    <span className="font-semibold text-gray-900">{category.name}</span>
                    <span className="text-xs text-gray-500">{category.tagline}</span>
                  </Link>
                ))}
                <Link
                  href="/categories"
                  className="mt-1 block rounded-lg bg-gray-50 px-3 py-2 text-center text-sm font-semibold text-primary transition-colors hover:bg-gray-100"
                >
                  View all stay types
                </Link>
              </div>
            </div>
          </div>

          {/* Destinations dropdown */}
          <div className="group relative">
            <Link
              href="/destinations"
              className="flex items-center gap-1 rounded-lg px-3 py-2 text-primary-foreground/90 transition-colors hover:bg-white/10 hover:text-white"
            >
              Destinations
              <ChevronDown className="size-4 transition-transform duration-200 group-hover:rotate-180" />
            </Link>

            <div className="invisible absolute right-0 top-full z-50 pt-2 opacity-0 transition-opacity duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="w-56 rounded-xl border border-gray-100 bg-white p-2 shadow-xl">
                {locations.map((location) => (
                  <Link
                    key={location}
                    href={cityHref(location)}
                    className="flex items-center justify-between rounded-lg px-3 py-2 text-gray-700 transition-colors hover:bg-emerald-50 hover:text-primary"
                  >
                    {location}
                  </Link>
                ))}
                <Link
                  href="/destinations"
                  className="mt-1 block rounded-lg bg-gray-50 px-3 py-2 text-center text-sm font-semibold text-primary transition-colors hover:bg-gray-100"
                >
                  View all destinations
                </Link>
              </div>
            </div>
          </div>

          {/* About */}
          <Link
            href="/about"
            className="rounded-lg px-3 py-2 text-primary-foreground/90 transition-colors hover:bg-white/10 hover:text-white"
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
