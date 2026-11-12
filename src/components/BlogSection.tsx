import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data/directory";
import { sanitizeUrl } from "@/lib/utils";

export default function BlogSection() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">From the blog</h2>
        <p className="mt-3 text-lg text-gray-600">
          Get more inspiration for your hot tub getaway by reading our guides.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {blogPosts.map((post) => (
          <Link
            key={post.title}
            href={post.href}
            className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5 transition-shadow hover:shadow-lg"
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src={sanitizeUrl(post.image)}
                alt={post.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-gray-900">
                {post.category}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-5">
              <h3 className="mb-2 text-lg font-bold leading-snug text-gray-900 group-hover:text-primary">
                {post.title}
              </h3>
              <p className="text-sm text-gray-600">{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
