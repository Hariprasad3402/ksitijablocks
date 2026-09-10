"use client";

import { useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { GalleryImage } from "@/lib/data";

type LightboxProps = {
  images: GalleryImage[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

export function Lightbox({ images, index, onClose, onPrev, onNext }: LightboxProps) {
  const image = images[index];

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onPrev();
      if (event.key === "ArrowRight") onNext();
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onPrev, onNext]);

  if (!image?.src) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={image.alt}
      className="fixed inset-0 z-60 flex items-center justify-center bg-ink/90 p-4 sm:p-10"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close image"
        className="absolute top-4 right-4 flex size-10 items-center justify-center rounded-full bg-cream/10 text-cream hover:bg-cream/20"
      >
        <X className="size-5" />
      </button>

      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          onPrev();
        }}
        aria-label="Previous image"
        className="absolute left-4 flex size-10 shrink-0 items-center justify-center rounded-full bg-cream/10 text-cream hover:bg-cream/20 sm:left-8"
      >
        <ChevronLeft className="size-5" />
      </button>

      <div
        className="relative h-full max-h-[80vh] w-full max-w-4xl"
        onClick={(event) => event.stopPropagation()}
      >
        <Image
          key={image.src}
          src={image.src}
          alt={image.alt}
          fill
          className="object-contain"
          sizes="90vw"
        />
      </div>

      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          onNext();
        }}
        aria-label="Next image"
        className="absolute right-4 flex size-10 shrink-0 items-center justify-center rounded-full bg-cream/10 text-cream hover:bg-cream/20 sm:right-8"
      >
        <ChevronRight className="size-5" />
      </button>

      <p className="absolute bottom-4 left-1/2 max-w-lg -translate-x-1/2 px-4 text-center text-sm text-cream/80">
        {image.alt}
      </p>
    </div>
  );
}
