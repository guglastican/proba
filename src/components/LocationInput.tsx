import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { locations } from "@/data/hotels";
import { cn } from "@/lib/utils";
import { Check, ChevronsUpDown } from "lucide-react";
import { useState, useEffect } from "react";

interface LocationInputProps {
  name?: string;
  defaultValue?: string;
}

export default function LocationInput({
  name,
  defaultValue,
}: LocationInputProps) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState(defaultValue || "");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant="outline"
        role="combobox"
        aria-label="Filter location"
        className="w-[180px] flex-none justify-between"
      >
        {defaultValue || "Filter location..."}
        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
      </Button>
    );
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-label={input ? `Location selected: ${input}` : "Filter by location"}
          aria-expanded={open}
          className="w-[180px] flex-none justify-between"
        >
          {input
            ? // In a real app, search would call an API
            locations.find((location) => location === input)
            : "Filter location..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <input type="hidden" name={name} value={input} />
      <PopoverContent className="w-[180px] p-0">
        <Command>
          <CommandInput placeholder="Search location..." />
          <CommandList>
            <CommandEmpty>No location found.</CommandEmpty>
            <CommandGroup>
              {locations.map((location) => (
                <CommandItem
                  key={location}
                  value={location}
                  onSelect={(currentValue) => {
                    setInput(currentValue === input ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      input === location ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {location}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
