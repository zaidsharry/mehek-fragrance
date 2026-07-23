import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/products";

export const Route = createFileRoute("/collection")({
  component: Collection,
  head: () => ({
    meta: [
      { title: "All Products — Swaraj Enterprises" },
      {
        name: "description",
        content:
          "Browse the complete Swaraj Enterprises range — floor cleaners, disinfectants, glass sprays, detergents, dishwash and car care.",
      },
      { property: "og:title", content: "All Products — Swaraj Enterprises" },
      {
        property: "og:description",
        content: "Ten premium cleaning products for house and vehicle. Formulated in India.",
      },
    ],
  }),
});

const categories = ["All", "Home", "Vehicle", "Personal"] as const;
const priceBands = [
  { id: "any", label: "Any price", min: 0, max: Infinity },
  { id: "u250", label: "Under ₹250", min: 0, max: 250 },
  { id: "250-500", label: "₹250 – ₹500", min: 250, max: 500 },
  { id: "500+", label: "₹500+", min: 500, max: Infinity },
] as const;
const ingredients = ["All", "Lemon", "Mint", "Eucalyptus", "Pine", "Aloe", "Lavender", "Jasmine"] as const;

function Collection() {
  const [category, setCategory] = useState<(typeof categories)[number]>("All");
  const [band, setBand] = useState<(typeof priceBands)[number]["id"]>("any");
  const [ingredient, setIngredient] = useState<(typeof ingredients)[number]>("All");

  const filtered = useMemo(() => {
    const b = priceBands.find((x) => x.id === band)!;
    return products.filter((p) => {
      if (category !== "All" && p.gender !== category) return false;
      if (p.price < b.min || p.price > b.max) return false;
      if (ingredient !== "All") {
        const all = [...p.top, ...p.heart, ...p.base, ...p.featured.map((f) => f.name)]
          .join(" ")
          .toLowerCase();
        if (!all.includes(ingredient.toLowerCase())) return false;
      }
      return true;
    });
  }, [category, band, ingredient]);

  return (
    <div>
      <section className="relative pt-40 pb-16">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="label-eyebrow">The Complete Range</div>
            <h1 className="mt-6 font-display text-5xl leading-[0.95] md:text-8xl">
              Ten products,<br />
              <span className="italic text-gold-gradient">one standard</span>.
            </h1>
            <p className="mt-8 max-w-xl font-display text-lg text-foreground/80">
              Premium cleaning formulas for house and vehicle — concentrated, plant-forward, and made in India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-[76px] z-30 border-y border-gold/10 bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1440px] flex-wrap items-center gap-6 px-6 py-4 md:px-10">
          <FilterGroup label="Category" options={[...categories]} value={category} onChange={(v) => setCategory(v as typeof category)} />
          <FilterGroup
            label="Price"
            options={priceBands.map((p) => p.label)}
            value={priceBands.find((p) => p.id === band)!.label}
            onChange={(v) => setBand(priceBands.find((p) => p.label === v)!.id)}
          />
          <FilterGroup label="Ingredient" options={[...ingredients]} value={ingredient} onChange={(v) => setIngredient(v as typeof ingredient)} />
          <div className="ml-auto text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
            {filtered.length} of {products.length}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          {filtered.length === 0 ? (
            <div className="py-32 text-center">
              <div className="font-display text-3xl">No products match those filters.</div>
              <p className="mt-3 text-sm text-muted-foreground">Try softening a filter.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

function FilterGroup({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="text-[10px] uppercase tracking-[0.32em] text-gold">{label}</div>
      <div className="flex flex-wrap gap-1">
        {options.map((o) => (
          <button
            key={o}
            onClick={() => onChange(o)}
            className={`border px-3 py-1.5 text-[11px] uppercase tracking-[0.22em] transition-all duration-300 ${
              o === value
                ? "border-gold bg-gold/10 text-gold"
                : "border-gold/15 text-foreground/70 hover:border-gold/40 hover:text-gold"
            }`}
          >
            {o}
          </button>
        ))}
      </div>
    </div>
  );
}
