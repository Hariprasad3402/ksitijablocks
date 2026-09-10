import { ImageOff } from "lucide-react";

type PlaceholderImageProps = {
  label?: string;
  className?: string;
};

export function PlaceholderImage({ label, className = "" }: PlaceholderImageProps) {
  return (
    <div
      className={`flex h-full w-full flex-col items-center justify-center gap-2 bg-cream-dark text-ink-soft ${className}`}
    >
      <ImageOff className="size-8" strokeWidth={1.5} />
      {label && <span className="px-4 text-center text-xs">{label}</span>}
    </div>
  );
}
