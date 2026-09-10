import { footerStats } from "@/lib/data";
import { Button } from "@/components/ui/Button";

export function Footer() {
  return (
    <footer id="contact" className="bg-brand-dark text-cream">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-12 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <div className="max-w-sm">
          <h2 className="font-serif text-3xl">
            Let&apos;s Build a Sustainable Tomorrow
          </h2>
          <p className="mt-2 text-cream/80">
            Get in touch with our team for your next project.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-8">
          {footerStats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex items-center gap-3">
              <Icon className="size-8" strokeWidth={1.5} />
              <div>
                <p className="text-xl font-semibold">{value}</p>
                <p className="text-sm text-cream/80">{label}</p>
              </div>
            </div>
          ))}
        </div>

        <Button href="#contact" variant="inverse" className="shrink-0">
          Contact Us
        </Button>
      </div>
    </footer>
  );
}
