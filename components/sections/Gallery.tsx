"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { galleryImages } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { Lightbox } from "@/components/ui/Lightbox";

const VISIBLE_COUNT = 4;

export function Gallery() {
  const [startIndex, setStartIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const total = galleryImages.length;

  const visibleIndexes = Array.from(
    { length: VISIBLE_COUNT },
    (_, offset) => (startIndex + offset) % total
  );

  const showPrev = () =>
    setStartIndex((current) => (current - 1 + total) % total);
  const showNext = () => setStartIndex((current) => (current + 1) % total);

  return (
    <section id="gallery" className="bg-cream">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <SectionHeader
          eyebrow="Our Project Gallery"
          title="Real Spaces. Real Impact."
          action={{ label: "View Gallery", href: "#gallery" }}
        />

        <div className="mt-10 flex items-center gap-3">
          <button
            type="button"
            onClick={showPrev}
            aria-label="Show previous gallery images"
            className="flex size-10 shrink-0 items-center justify-center rounded-full border border-ink/15 text-ink hover:bg-cream-dark"
          >
            <ChevronLeft className="size-5" />
          </button>

          <div className="grid flex-1 grid-cols-2 gap-4 lg:grid-cols-4">
            {visibleIndexes.map((imageIndex) => {
              const image = galleryImages[imageIndex];
              return (
                <div
                  key={image.alt}
                  className="relative aspect-square overflow-hidden rounded-lg"
                >
                  {image.src ? (
                    <button
                      type="button"
                      onClick={() => setActiveIndex(imageIndex)}
                      aria-label={`Open image: ${image.alt}`}
                      className="group block h-full w-full cursor-zoom-in"
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(min-width: 1024px) 22vw, 45vw"
                      />
                    </button>
                  ) : (
                    <PlaceholderImage label={image.alt} />
                  )}
                </div>
              );
            })}
          </div>

          <button
            type="button"
            onClick={showNext}
            aria-label="Show next gallery images"
            className="flex size-10 shrink-0 items-center justify-center rounded-full border border-ink/15 text-ink hover:bg-cream-dark"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>

      {activeIndex !== null && (
        <Lightbox
          images={galleryImages}
          index={activeIndex}
          onClose={() => setActiveIndex(null)}
          onPrev={() =>
            setActiveIndex((current) =>
              current === null ? null : (current - 1 + total) % total
            )
          }
          onNext={() =>
            setActiveIndex((current) =>
              current === null ? null : (current + 1) % total
            )
          }
        />
      )}
    </section>
  );
}
