import { productCategories } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { BlockShape } from "@/components/ui/BlockShape";

export function ProductCategories() {
  return (
    <section id="products" className="bg-cream-dark/40">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <SectionHeader
          eyebrow="Our Products"
          title="Mudblock Categories"
          description="Six block types for walls, slabs, lintels, pathways and cladding."
          action={{ label: "View All Products", href: "#products" }}
        />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {productCategories.map((product) => (
            <div
              key={product.name}
              className="flex flex-col items-center gap-4 rounded-lg border border-ink/10 bg-cream p-5 text-center"
            >
              <div className="flex h-24 w-full items-center justify-center">
                <BlockShape shape={product.shape} />
              </div>
              <div>
                <p className="font-medium text-ink">{product.name}</p>
                <p className="mt-1 text-xs text-ink-soft">
                  {product.dimensions.join(" / ")}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
