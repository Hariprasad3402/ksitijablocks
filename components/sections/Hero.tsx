import Image from "next/image";
import { heroFeatures } from "@/lib/data";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-image.jpeg"
          alt="Modern home built with Ksitija compressed stabilized earth blocks"
          fill
          preload
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-cream/55 md:hidden" />
        <div className="absolute inset-0 hidden bg-linear-to-r from-cream/85 via-cream/45 to-transparent md:block" />
      </div>

      <div className="mx-auto flex min-h-160 max-w-7xl flex-col justify-center gap-8 px-6 py-20 lg:px-10">
        <div className="max-w-xl">
          <p className="text-sm font-semibold tracking-[0.15em] text-brand uppercase">
            Sustainable Living Starts Here
          </p>
          <h1 className="mt-3 font-serif text-5xl leading-[1.1] text-ink sm:text-6xl">
            Built Naturally
            <br />
            Built to Last
          </h1>
          <p className="mt-5 max-w-md text-ink-soft">
            Eco-friendly building materials combining traditional wisdom with
            modern engineering for a stronger, greener tomorrow.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="#products">Explore Products</Button>
            <Button href="#contact" variant="outline" showArrow={false}>
              Contact Us
            </Button>
          </div>
        </div>

        <div className="flex flex-wrap gap-x-10 gap-y-6">
          {heroFeatures.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2">
              <Icon className="size-5 text-brand" strokeWidth={1.75} />
              <span className="text-sm font-medium text-ink">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
