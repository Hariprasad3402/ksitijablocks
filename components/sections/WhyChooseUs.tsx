import { benefits } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function WhyChooseUs() {
  return (
    <section id="benefits" className="bg-cream">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <SectionHeader
          eyebrow="Why Choose Mud Blocks"
          title="More Than Just a Block"
          action={{ label: "View All Benefits", href: "#benefits" }}
        />

        <div className="mt-10 grid grid-cols-2 gap-y-8 sm:grid-cols-4 lg:grid-cols-8">
          {benefits.map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-3 text-center">
              <div className="flex size-16 items-center justify-center rounded-full bg-cream-dark">
                <Icon className="size-6 text-brand" strokeWidth={1.5} />
              </div>
              <p className="text-sm font-medium text-ink">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
