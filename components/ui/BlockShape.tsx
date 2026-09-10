import type { ProductCategory } from "@/lib/data";

const containerClasses: Record<ProductCategory["shape"], string> = {
  brick: "aspect-[4/3] max-w-[70%]",
  "long-brick": "aspect-[16/9] max-w-[85%]",
  cube: "aspect-square max-w-[55%]",
  "u-core": "aspect-[4/3] max-w-[70%]",
  slab: "aspect-[16/6] max-w-[90%]",
  plank: "aspect-[16/5] max-w-[90%]",
};

export function BlockShape({ shape }: { shape: ProductCategory["shape"] }) {
  return (
    <div className={`${containerClasses[shape]} w-full`}>
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="h-full w-full"
        aria-hidden="true"
      >
        <polygon points="50,5 90,25 50,45 10,25" fill="var(--color-brand-light)" />
        <polygon points="10,25 50,45 50,95 10,75" fill="var(--color-brand)" />
        <polygon points="90,25 50,45 50,95 90,75" fill="var(--color-brand-dark)" />
        {shape === "u-core" && (
          <polygon points="35,17 65,17 65,33 35,33" fill="var(--color-cream)" />
        )}
      </svg>
    </div>
  );
}
