import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/products";

export const Route = createFileRoute("/collection")({
  component: Collection,
  head: () => ({
    meta: [
      { title: "The Collection — Mehek Fragrances" },
      {
        name: "description",
        content:
          "Ten limited extraits from Mehek Fragrances — oud, amber, rose, leather. Filter by gender, mood and note.",
      },
      { property: "og:title", content: "The Collection — Mehek Fragrances" },
      {
        property: "og:description",
        content: "Ten cinematic extraits. Composed in shadow, gilded in gold.",
      },
    ],
  }),
});

const genders = ["All", "Unisex", "Women", "Men"] as const;
const priceBands = [
  { id: "any", label: "Any price", min: 0, max: Infinity },
  { id: "u10", label: "Under ₹10,500", min: 0, max: 10500 },
  { id: "10-13", label: "₹10,500 – ₹13,000", min: 10500, max: 13000 },
  { id: "13+", label: "₹13,000+", min: 13000, max: Infinity },
] as const;
const notes = ["All", "Oud", "Rose", "Amber", "Leather", "Vanilla", "Sandalwood"] as const;

function Collection() {
  const [gender, setGender] = useState<(typeof genders)[number]>("All");
  const [band, setBand] = useState<(typeof priceBands)[number]["id"]>("any");
  const [note, setNote] = useState<(typeof notes)[number]>("All");

  const filtered = useMemo(() => {
    const b = priceBands.find((x) => x.id === band)!;
    return products.filter((p) => {
      if (gender !== "All" && p.gender !== gender) return false;
      if (p.price < b.min || p.price > b.max) return false;
      if (note !== "All") {
        const all = [...p.top, ...p.heart, ...p.base, ...p.featured.map((f) => f.name)]
          .join(" ")
          .toLowerCase();
        if (!all.includes(note.toLowerCase())) return false;
      }
      return true;
    });
  }, [gender, band, note]);

  return (
    <div>
      <section className="relative pt-40 pb-16">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="label-eyebrow">The Complete Collection</div>
            <h1 className="mt-6 font-display text-5xl leading-[0.95] md:text-8xl">
              Ten extraits,<br />
              <span className="italic text-gold-gradient">one obsession</span>.
            </h1>
            <p className="mt-8 max-w-xl font-display text-lg text-foreground/80">
              Every bottle is hand-poured in editions of two-hundred. When they end, they end.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-[76px] z-30 border-y border-gold/10 bg-ink/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1440px] flex-wrap items-center gap-6 px-6 py-4 md:px-10">
          <FilterGroup label="Gender" options={[...genders]} value={gender} onChange={(v) => setGender(v as typeof gender)} />
          <FilterGroup
            label="Price"
            options={priceBands.map((p) => p.label)}
            value={priceBands.find((p) => p.id === band)!.label}
            onChange={(v) => setBand(priceBands.find((p) => p.label === v)!.id)}
          />
          <FilterGroup label="Note" options={[...notes]} value={note} onChange={(v) => setNote(v as typeof note)} />
          <div className="ml-auto text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
            {filtered.length} of {products.length}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          {filtered.length === 0 ? (
            <div className="py-32 text-center">
              <div className="font-display text-3xl">No extraits match that mood.</div>
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
