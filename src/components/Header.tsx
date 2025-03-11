"use client";

import LocationInput from "@/components/LocationInput";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Hotel } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

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
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center py-6 space-y-4">
          <Link 
            href="/" 
            className="flex items-center space-x-3 group"
          >
            <Hotel className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-gray-900">
              HotTubFinder
            </span>
          </Link>

          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-3xl"
          >
            <form 
              onSubmit={handleSubmit} 
              className="flex items-center space-x-2 bg-gray-50 rounded-full p-2"
            >
              <div className="relative flex-grow">
                <Input
                  name="q"
                  placeholder="Find your perfect hot tub getaway..."
                  defaultValue={q}
                  type="search"
                  required
                  className="w-full pl-10 pr-4 py-2 bg-transparent border-none focus:outline-none"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>

              <LocationInput name="location" defaultValue={location} />

              <Button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full 
                  transition-colors duration-300 ease-in-out transform hover:scale-105 active:scale-95"
              >
                Search
              </Button>
            </form>

            <div className="mt-2 flex justify-center space-x-2">
              {[
                { name: "Hot Tub", color: "bg-red-100 text-red-700" },
                { name: "Spa", color: "bg-blue-100 text-blue-700" },
                { name: "Pool", color: "bg-green-100 text-green-700" },
                { name: "Luxury", color: "bg-purple-100 text-purple-700" },
                { name: "Romantic", color: "bg-pink-100 text-pink-700" }
              ].map(({ name, color }) => (
                <button
                  key={name}
                  type="button"
                  className={`px-3 py-1 rounded-full text-xs ${color} 
                    hover:opacity-80 transition-opacity`}
                  onClick={() => {
                    const input = document.querySelector('input[name="q"]') as HTMLInputElement;
                    const currentValue = input.value.trim();
                    input.value = currentValue 
                      ? `${currentValue}, ${name}` 
                      : name;
                  }}
                >
                  {name}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
}
