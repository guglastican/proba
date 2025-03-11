import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { Button } from "./button";

interface TagProps {
  label: string;
  className?: string;
  onRemove?: () => void;
}

export function Tag({ label, className, onRemove }: TagProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-md border px-2.5 py-0.5 text-sm font-medium transition-colors",
        className
      )}
    >
      {label}
      {onRemove && (
        <Button
          variant="ghost"
          size="icon"
          className="ml-1 h-4 w-4 rounded-full p-0 hover:bg-transparent"
          onClick={onRemove}
        >
          <X className="h-3 w-3" />
        </Button>
      )}
    </div>
  );
}
