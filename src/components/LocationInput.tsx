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
import { useState } from "react";

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

  return (
    <div className="w-full">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <div className="flex w-full items-center gap-2 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
            <input
              type="text"
              placeholder="Select location"
              className="flex-1 w-full bg-transparent outline-none text-base sm:text-sm"
              value={input || ""}
              onChange={(e) => setInput(e.target.value)}
              onFocus={() => setOpen(true)}
            />
            <ChevronsUpDown className="h-4 w-4 shrink-0 opacity-50" />
          </div>
        </PopoverTrigger>
        <input type="hidden" name={name} value={input} />
        <PopoverContent className="w-full sm:w-[300px] p-0">
          <Command>
            <CommandInput placeholder="Search locations..." />
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
                    className="cursor-pointer"
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
    </div>
  );
}
