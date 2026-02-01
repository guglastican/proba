"use client";

import LocationInput from "@/components/LocationInput";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface HeaderProps {
  q?: string;
  location?: string;
}

export default function Header({ q, location }: HeaderProps) {
  const router = useRouter();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const q = formData.get("q") as string;
    const location = formData.get("location") as string;
    const newSearchParams = new URLSearchParams();
    newSearchParams.set("q", q);
    if (location) newSearchParams.set("location", location);
    router.push(`/search?${newSearchParams.toString()}`);
  }

  return (
    <header className="sticky top-0 z-50 w-full glass-effect shadow-sm">
      <div className="standard-container py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link href="/" className="transition-transform hover:scale-105 active:scale-95">
            <span className="text-2xl font-black tracking-tighter text-primary flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg premium-gradient shadow-lg flex items-center justify-center">
                <span className="text-white text-xs">HT</span>
              </div>
              HOT TUB FINDER
            </span>
          </Link>
          <form
            action="/"
            onSubmit={handleSubmit}
            className="flex w-full max-w-2xl items-center gap-3"
            key={`${q}-${location}`}
          >
            <div className="flex-1 flex gap-2">
              <Input
                name="q"
                placeholder="Find 'Hot Tub' rooms..."
                defaultValue={q}
                type="search"
                required
                className="bg-white/50 border-gray-200 focus:bg-white transition-all shadow-sm h-11"
              />
              <LocationInput name="location" defaultValue={location} />
            </div>
            <Button size="lg" className="premium-gradient hover:opacity-90 shadow-md h-11 px-6">
              <Search className="mr-2 h-4 w-4" />
              Search
            </Button>
          </form>
        </div>
      </div>
    </header>
  );
}
