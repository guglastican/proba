"use client";

import LocationInput from "@/components/LocationInput";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

export default function HeroSearch() {
  const router = useRouter();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const q = formData.get("q") as string;
    const location = formData.get("location") as string;
    const params = new URLSearchParams();
    params.set("q", q);
    if (location) params.set("location", location);
    router.push(`/search?${params.toString()}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex w-full max-w-2xl flex-col gap-3 sm:flex-row sm:items-center"
    >
      <Input
        name="q"
        placeholder="Try 'hot tub', 'in-room Jacuzzi', 'spa'…"
        type="search"
        required
        className="h-14 flex-1 rounded-full border-0 bg-white px-6 text-base text-gray-900 shadow-lg placeholder:text-gray-400"
      />
      <LocationInput name="location" />
      <Button
        type="submit"
        size="lg"
        className="h-14 rounded-full px-8 text-base font-semibold shadow-lg"
      >
        <Search className="mr-2 size-5" />
        Search
      </Button>
    </form>
  );
}
