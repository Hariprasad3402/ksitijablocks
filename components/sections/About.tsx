import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function About() {
  return (
    <section id="about" className="bg-cream">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center lg:px-10">
        <div>
          <p className="text-sm font-semibold tracking-[0.15em] text-brand uppercase">
            About Ksitija Blocks
          </p>
          <h2 className="mt-3 font-serif text-4xl text-ink">
            Building a Greener Future
          </h2>
          <p className="mt-5 text-ink-soft">
            At KSITIJA BLOCKS, we are dedicated to creating high-quality,
            eco-friendly building materials that bring sustainability and
            strength together. Specializing in compressed stabilized earth
            blocks (CSEB), we combine traditional construction wisdom with
            modern engineering to offer products that are durable,
            energy-efficient, and environmentally responsible.
          </p>
          <p className="mt-4 text-ink-soft">
            We supply builders, architects, and homeowners with reliable
            earth-based products tailored to meet diverse design and
            structural needs. Whether for residential, commercial, or
            community projects, we aim to inspire sustainable architecture
            and support a cleaner, healthier future.
          </p>
          <Button href="#about" className="mt-8">
            Know More About Us
          </Button>
        </div>

        <div className="relative aspect-square overflow-hidden rounded-lg">
          <Image
            src="/images/about.png"
            alt="Covered CSEB walkway lined with potted plants — traditional roots, modern possibilities"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 40vw, 90vw"
          />
        </div>
      </div>
    </section>
  );
}
