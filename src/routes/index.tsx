import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import heroBottle from "@/assets/hero-bottle.jpg";
import maisonBottle from "@/assets/maison-bottle.jpg";
import heroVideoAsset from "@/assets/hero-video.mp4.asset.json";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/products";
import { rawMaterials } from "@/lib/note-images";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Mehek Fragrances — Dark Luxury Perfumery" },
      {
        name: "description",
        content:
          "Enter Mehek Fragrances — an atelier of dark, cinematic extraits. Explore ten limited compositions in oud, amber, rose and leather.",
      },
      { property: "og:image", content: heroBottle },
    ],
  }),
});




const reviews = [
  { name: "Ayesha Kapoor", city: "Mumbai", rating: 5, verified: true, text: "Noir Oud is other-worldly. Compliments follow me for hours. This is what perfume is supposed to feel like." },
  { name: "Raghav Menon", city: "Bangalore", rating: 5, verified: true, text: "Cuir Noir replaced three of my niche bottles. The leather is so real it feels illegal." },
  { name: "Sanya Kohli", city: "New Delhi", rating: 5, verified: true, text: "Rose Éternelle is an heirloom in a bottle. My mother wants one. My sister wants one. I'm keeping mine." },
  { name: "Karan Sethi", city: "Pune", rating: 5, verified: true, text: "Packaging arrived like a piece of jewellery. Velours Privé is now my only signature." },
  { name: "Meher Iyer", city: "Chennai", rating: 5, verified: true, text: "Soleil d'Or smells like a Riviera afternoon. I wore it to my wedding brunch." },
  { name: "Vikram Rao", city: "Hyderabad", rating: 5, verified: true, text: "Santal Mystique is meditation on skin. Ordered a second bottle before finishing the first." },
];

function Home() {
  const featured = products.slice(0, 6);

  return (
    <div>
      {/* HERO — full-bleed video */}
      <section className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden bg-ink">
        {/* Background video */}
        <video
          src={heroVideoAsset.url}
          poster={heroBottle}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ willChange: "transform" }}
        />

        {/* Cinematic vignette — dark all around, subtle warm center */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, oklch(0 0 0 / 0) 30%, oklch(0 0 0 / 0.55) 65%, oklch(0 0 0 / 0.9) 100%)",
          }}
        />
        {/* Top + bottom darkening bands so text is always legible */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 z-10 h-[45vh] bg-gradient-to-b from-ink via-ink/70 to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[45vh] bg-gradient-to-t from-ink via-ink/70 to-transparent"
        />

        {/* Floating gold particles */}
        {Array.from({ length: 22 }).map((_, i) => (
          <span
            key={i}
            className="animate-drift pointer-events-none absolute z-10 h-1 w-1 rounded-full bg-gold"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${15 + Math.random() * 70}%`,
              animationDelay: `${i * 0.4}s`,
              boxShadow: "0 0 6px oklch(0.82 0.13 82 / 0.9)",
              opacity: 0.55,
            }}
          />
        ))}

        {/* Top-centered eyebrow + headline */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-x-0 top-0 z-20 flex flex-col items-center px-6 pt-28 text-center md:pt-32"
        >
          <div className="label-eyebrow">Maison Mehek · Est. 2026</div>
          <h1 className="mt-6 font-display text-5xl leading-[0.95] tracking-tight md:text-7xl lg:text-[6rem]">
            A private <span className="italic text-gold-gradient">library</span> of scent.
          </h1>
        </motion.div>

        {/* Bottom-centered tagline + CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-x-0 bottom-0 z-20 flex flex-col items-center px-6 pb-24 text-center md:pb-28"
        >
          <p className="mx-auto max-w-xl font-display text-lg leading-relaxed text-foreground/85 md:text-xl">
            Ten cinematic extraits composed in oud, amber, rose and leather —
            hand-poured, in editions rarely seen twice.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link to="/collection" className="btn-gold btn-gold-hover">
              Shop Collection <ChevronRight className="h-4 w-4" />
            </Link>
            <Link to="/product/$id" params={{ id: "noir-oud" }} className="btn-ghost-gold">
              Discover Noir Oud
            </Link>
          </div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="absolute bottom-4 left-1/2 z-20 -translate-x-1/2 text-center"
        >
          <div className="mx-auto h-10 w-px bg-gradient-to-b from-transparent to-gold" />
          <div className="mt-2 text-[10px] uppercase tracking-[0.4em] text-gold">Scroll</div>
        </motion.div>
      </section>



      {/* MANIFESTO */}
      <section className="relative py-32 md:py-48">
        <div className="mx-auto grid max-w-[1200px] gap-16 px-6 md:grid-cols-12 md:px-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-5"
          >
            <div className="label-eyebrow">The Maison</div>
            <h2 className="mt-6 font-display text-4xl leading-tight md:text-5xl">
              Perfume, but rendered <span className="italic text-gold-gradient">cinematic</span>.
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-6 md:col-start-7"
          >
            <p className="font-display text-xl leading-relaxed text-foreground/85 md:text-2xl">
              We compose fragrance the way a director frames light — with intention,
              with restraint, and with a taste for the shadowed side of the room.
            </p>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Every extrait is built in Grasse and matured in Mumbai. No shortcuts,
              no synthetic understudies for the raw materials we adore — only aged
              agarwood, Turkish rose absolute, Mysore sandalwood and a great deal
              of patience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* INGREDIENTS SCROLL STORY */}
      <section className="relative overflow-hidden border-y border-gold/10 py-32">
        <div className="smoke-layer" />
        <div className="relative mx-auto max-w-[1440px] px-6 md:px-10">
          <div className="mb-16 text-center">
            <div className="label-eyebrow">The Raw Materials</div>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">A pyramid of origins</h2>
          </div>
          <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-6">
            {rawMaterials.map((ing, i) => (
              <motion.div
                key={ing.name}
                initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="glass-luxe group relative aspect-square overflow-hidden"
              >
                <img
                  src={ing.image}
                  alt={ing.name}
                  loading="lazy"
                  width={512}
                  height={512}
                  className="absolute inset-0 h-full w-full object-cover opacity-70 transition-all duration-700 group-hover:scale-110 group-hover:opacity-100"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 100%, oklch(0.75 0.16 55 / 0.4), transparent 65%)",
                  }}
                />
                <div className="relative flex h-full flex-col justify-end p-6">
                  <div className="font-display text-xl leading-tight">{ing.name}</div>
                  <div className="mt-1 text-[10px] uppercase tracking-[0.28em] text-gold-soft">
                    {ing.tag}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* FEATURED COLLECTION */}
      <section className="py-32 md:py-40">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="label-eyebrow">The Collection</div>
              <h2 className="mt-4 font-display text-4xl md:text-6xl">
                Ten extraits. <span className="italic text-gold-gradient">One obsession.</span>
              </h2>
            </div>
            <Link to="/collection" className="btn-ghost-gold">View all ten</Link>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="border-t border-gold/10 py-32">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <div className="mb-14 text-center">
            <div className="label-eyebrow">On the Skin of Others</div>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">A house verified</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((r, i) => (
              <motion.figure
                key={r.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="glass-luxe p-8"
              >
                <div className="flex items-center justify-between">
                  <div className="text-gold">{"★".repeat(r.rating)}</div>
                  {r.verified && (
                    <div className="text-[10px] uppercase tracking-[0.28em] text-gold-soft">
                      Verified Purchase
                    </div>
                  )}
                </div>
                <blockquote className="mt-5 font-display text-lg leading-relaxed text-foreground/90">
                  "{r.text}"
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-gold/10 pt-5">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-full font-display text-lg text-ink"
                    style={{ background: "var(--gradient-gold)" }}
                  >
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-display text-base leading-tight">{r.name}</div>
                    <div className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                      {r.city}
                    </div>
                  </div>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="relative overflow-hidden py-32">
        <div className="smoke-layer" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto max-w-3xl px-6 text-center md:px-10"
        >
          <h2 className="font-display text-5xl leading-tight md:text-7xl">
            Compose your <span className="italic text-gold-gradient">signature</span>.
          </h2>
          <p className="mx-auto mt-6 max-w-lg font-display text-lg text-foreground/80">
            Each bottle arrives in a hand-finished coffret with a personalised card.
            Fragrance concierge available on WhatsApp.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/collection" className="btn-gold btn-gold-hover">Shop the Collection</Link>
            <Link to="/contact" className="btn-ghost-gold">Speak with a concierge</Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
