import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ChevronLeft, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { useCart } from "@/lib/cart-store";
import { formatPrice, getProduct, products } from "@/lib/products";

export const Route = createFileRoute("/product/$id")({
  loader: ({ params }) => {
    const p = getProduct(params.id);
    if (!p) throw notFound();
    return { product: p };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.product;
    return {
      meta: p
        ? [
            { title: `${p.name} — Swaraj Enterprises` },
            { name: "description", content: p.description },
            { property: "og:title", content: `${p.name} — Swaraj Enterprises` },
            { property: "og:description", content: p.description },
            { property: "og:image", content: p.image },
            { name: "twitter:card", content: "summary_large_image" },
            { name: "twitter:image", content: p.image },
          ]
        : [],
    };
  },
  component: ProductPage,
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center px-6 text-center">
      <div>
        <div className="label-eyebrow">Not in the range</div>
        <h1 className="mt-4 font-display text-4xl">This product isn't available.</h1>
        <Link to="/collection" className="btn-ghost-gold mt-8 inline-flex">Back to products</Link>
      </div>
    </div>
  ),
});

function ProductPage() {
  const { product: p } = Route.useLoaderData();
  const add = useCart((s) => s.add);
  const setOpen = useCart((s) => s.setOpen);
  const [qty, setQty] = useState(1);

  const similar = products.filter((x) => x.id !== p.id).slice(0, 3);

  return (
    <article className="pt-32">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Link to="/collection" className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.32em] text-muted-foreground hover:text-gold">
          <ChevronLeft className="h-3.5 w-3.5" /> Products
        </Link>

        <div className="mt-8 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[3/4] overflow-hidden bg-muted"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background: `radial-gradient(ellipse at 50% 60%, oklch(${p.accent} / 0.30), transparent 65%)`,
              }}
            />
            <img
              src={p.image}
              alt={p.name}
              className="h-full w-full object-cover"
              loading="eager"
            />
            <div className="pointer-events-none absolute inset-4 border border-gold/20" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <div className="label-eyebrow">{p.subtitle} · {p.size}</div>
            <h1 className="mt-4 font-display text-5xl leading-none md:text-7xl">{p.name}</h1>
            <div className="mt-6 flex items-center gap-4">
              <div className="text-gold-gradient font-display text-3xl">{formatPrice(p.price)}</div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Incl. all taxes</span>
            </div>

            <p className="mt-8 max-w-lg font-display text-lg leading-relaxed text-foreground/85">{p.description}</p>

            {/* Formula */}
            <div className="mt-10">
              <div className="label-eyebrow">Formula</div>
              <div className="mt-4 space-y-3">
                {[
                  { label: "Key", items: p.top },
                  { label: "Uses", items: p.heart },
                  { label: "Benefits", items: p.base },
                ].map((tier) => (
                  <div key={tier.label} className="glass-luxe flex flex-wrap items-center gap-3 p-4">
                    <div className="w-14 text-[10px] uppercase tracking-[0.3em] text-gold">{tier.label}</div>
                    <div className="flex flex-wrap gap-2">
                      {tier.items.map((n: string) => (
                        <span key={n} className="border border-gold/20 px-2.5 py-1 text-xs text-foreground/80">
                          {n}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <Meter label="Efficacy" value={p.longevity} />
              <Meter label="Freshness" value={p.projection} />
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <Meta label="Use Area" value={p.gender} />
              <Meta label="Best For" value={p.season} />
              <Meta label="Surfaces" value={p.occasion} />
              <Meta label="Frequency" value={p.timeOfDay} />
            </div>

            <div className="mt-10 flex items-center gap-4">
              <div className="flex items-center border border-gold/25">
                <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="px-4 py-3 text-gold hover:bg-gold/10">–</button>
                <span className="w-10 text-center">{qty}</span>
                <button onClick={() => setQty((q) => q + 1)} className="px-4 py-3 text-gold hover:bg-gold/10">+</button>
              </div>
              <button
                onClick={() => {
                  add({ id: p.id, name: p.name, price: p.price, size: p.size, image: p.image }, qty);
                }}
                className="btn-gold btn-gold-hover flex-1"
              >
                <ShoppingBag className="h-4 w-4" /> Add to Cart
              </button>
            </div>
            <Link
              to="/checkout"
              onClick={() => {
                add({ id: p.id, name: p.name, price: p.price, size: p.size, image: p.image }, qty);
                setOpen(false);
              }}
              className="btn-ghost-gold mt-3 w-full"
            >
              Buy Now
            </Link>
          </motion.div>
        </div>

        <section className="mt-32">
          <div className="mb-10 flex items-end justify-between">
            <h2 className="font-display text-3xl md:text-4xl">You might also like</h2>
            <Link to="/collection" className="text-[11px] uppercase tracking-[0.3em] text-gold hover:text-gold-soft">See all</Link>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {similar.map((sp, i) => (
              <ProductCard key={sp.id} product={sp} index={i} />
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}

function Meter({ label, value }: { label: string; value: number }) {
  return (
    <div className="glass-luxe p-4">
      <div className="flex items-baseline justify-between">
        <div className="text-[10px] uppercase tracking-[0.3em] text-gold">{label}</div>
        <div className="font-display text-base text-foreground/80">{value}/10</div>
      </div>
      <div className="mt-3 h-1 overflow-hidden bg-muted">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${value * 10}%` }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="h-full"
          style={{ background: "var(--gradient-gold)" }}
        />
      </div>
    </div>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-b border-gold/10 pb-3">
      <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{label}</div>
      <div className="mt-1 font-display text-lg text-foreground/90">{value}</div>
    </div>
  );
}
