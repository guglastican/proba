import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { type Category } from "@/data/directory";
import { sanitizeUrl } from "@/lib/utils";

export default function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      href={`/categories/${category.slug}`}
      className="group relative flex h-56 overflow-hidden rounded-2xl bg-gray-900 shadow-sm ring-1 ring-black/5 transition-shadow hover:shadow-xl"
    >
      <Image
        src={sanitizeUrl(category.image)}
        alt={category.name}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        className="object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
        <div>
          <h3 className="text-lg font-bold text-white">{category.name}</h3>
          <p className="text-sm text-white/80">{category.tagline}</p>
        </div>
        <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-colors group-hover:bg-white group-hover:text-gray-900">
          <ArrowRight className="size-4" />
        </span>
      </div>
    </Link>
  );
}
