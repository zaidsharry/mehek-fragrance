import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import heroCleaning from "@/assets/hero-cleaning.jpg";
import heroBottle from "@/assets/hero-bottle.jpg";
import maisonBottle from "@/assets/maison-bottle.jpg";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/products";
import { rawMaterials } from "@/lib/note-images";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Swaraj Enterprises — Premium House & Vehicle Cleaning" },
      {
        name: "description",
        content:
          "Discover Swaraj Enterprises — a premium range of house and vehicle cleaning products. Floor cleaners, disinfectants, detergents and car care, formulated in India.",
      },
      { property: "og:image", content: heroCleaning },
    ],
  }),
});

const reviews = [
  { name: "Ayesha Kapoor", city: "Mumbai", rating: 5, verified: true, text: "Cleanora is the only floor cleaner I buy now. The lemon-mint finish lasts through the whole day and my marble looks brand new." },
  { name: "Raghav Menon", city: "Bangalore", rating: 5, verified: true, text: "AutoGloss made my car wash look showroom-fresh. The blue foam is thick, rinses clean and leaves a real gloss." },
  { name: "Sanya Kohli", city: "New Delhi", rating: 5, verified: true, text: "Fabrix has replaced every other conditioner in my laundry. Clothes come out silky and the jasmine note is subtle, not sweet." },
  { name: "Karan Sethi", city: "Pune", rating: 5, verified: true, text: "Blackguard is a workhorse. I use it in the garage and outdoor drains — one bottle lasts a month and keeps everything fresh." },
  { name: "Meher Iyer", city: "Chennai", rating: 5, verified: true, text: "Clearon glass spray is exactly what it says — zero streaks on my mirrors and windows. Fast-dry and no residue." },
  { name: "Vikram Rao", city: "Hyderabad", rating: 5, verified: true, text: "Hygix is the strongest toilet cleaner I've tried. Odour and stains gone in minutes. Eucalyptus finish is a nice touch." },
];

function Home() {
  const featured = products.slice(0, 6);

  return (
    <div>
      {/* HERO — full-bleed cleaning image */}
      <section className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden bg-background">
        {/* Background image */}
        <motion.img
          src={heroCleaning}
          alt="Swaraj Enterprises — premium cleaning products"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 6, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ willChange: "transform" }}
        />

        {/* Bright airy vignette */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, oklch(1 0 0 / 0) 30%, oklch(1 0 0 / 0.35) 65%, oklch(1 0 0 / 0.7) 100%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 z-10 h-[40vh] bg-gradient-to-b from-background via-background/70 to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[45vh] bg-gradient-to-t from-background via-background/70 to-transparent"
        />

        {/* Floating brand particles */}
        {Array.from({ length: 22 }).map((_, i) => (
          <span
            key={i}
            className="animate-drift pointer-events-none absolute z-10 h-1 w-1 rounded-full bg-gold"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${15 + Math.random() * 70}%`,
              animationDelay: `${i * 0.4}s`,
              boxShadow: "0 0 6px oklch(0.48 0.16 255 / 0.9)",
              opacity: 0.55,
            }}
          />
        ))}

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-x-0 top-0 z-20 flex flex-col items-center px-6 pt-28 text-center md:pt-32"
        >
          <div className="label-eyebrow">Swaraj Enterprises · Est. 2018</div>
          <h1 className="mt-6 font-display text-5xl leading-[0.95] tracking-tight md:text-7xl lg:text-[6rem]">
            A cleaner <span className="italic text-gold-gradient">home</span>, a brighter drive.
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-x-0 bottom-0 z-20 flex flex-col items-center px-6 pb-24 text-center md:pb-28"
        >
          <p className="mx-auto max-w-xl font-display text-lg leading-relaxed text-foreground/85 md:text-xl">
            Ten premium formulas for house and vehicle — lemon-fresh floor cleaners, streak-free glass sprays and showroom-gloss car care.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link to="/collection" className="btn-gold btn-gold-hover">
              Shop Products <ChevronRight className="h-4 w-4" />
            </Link>
            <Link to="/product/$id" params={{ id: "cleanora-floor" }} className="btn-ghost-gold">
              Discover Cleanora
            </Link>
          </div>
        </motion.div>

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
      <section className="relative overflow-hidden py-32 md:py-48">
        <div className="mx-auto grid max-w-[1200px] items-center gap-16 px-6 md:grid-cols-12 md:px-10">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative md:col-span-5"
          >
            <div className="pointer-events-none absolute -inset-10 -z-10">
              <div className="smoke-layer absolute inset-0 opacity-70" />
              <motion.div
                aria-hidden
                className="absolute left-1/2 top-1/2 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full"
                style={{
                  background:
                    "radial-gradient(closest-side, oklch(0.48 0.16 255 / 0.18), transparent 70%)",
                  filter: "blur(40px)",
                }}
                animate={{ scale: [1, 1.08, 1], opacity: [0.6, 0.9, 0.6] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
            <motion.img
              src={maisonBottle}
              alt="Swaraj Enterprises signature cleaning bottle"
              loading="lazy"
              width={1024}
              height={1280}
              className="relative mx-auto w-full max-w-[440px] rounded-sm object-cover shadow-[0_40px_120px_-30px_oklch(0.48_0.16_255_/_0.35)]"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-6 md:col-start-7"
          >
            <div className="label-eyebrow">Our Story</div>
            <h2 className="mt-6 font-display text-4xl leading-tight md:text-5xl">
              Cleaning, but made <span className="italic text-gold-gradient">premium</span>.
            </h2>
            <p className="mt-10 font-display text-xl leading-relaxed text-foreground/85 md:text-2xl">
              We formulate every product the way a chemist would build a fragrance —
              with intention, with restraint, and with an obsession for the finish.
            </p>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Every bottle is developed in our Mumbai lab and tested across Indian homes and
              vehicles. No harsh cover-ups, no watered-down formulas — only concentrated,
              plant-forward chemistry that leaves surfaces genuinely clean.
            </p>
          </motion.div>
        </div>
      </section>

      {/* KEY INGREDIENTS */}
      <section className="relative overflow-hidden border-y border-gold/10 py-32">
        <div className="smoke-layer" />
        <div className="relative mx-auto max-w-[1440px] px-6 md:px-10">
          <div className="mb-16 text-center">
            <div className="label-eyebrow">Key Ingredients</div>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">Nature-forward chemistry</h2>
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
                  className="absolute inset-0 h-full w-full object-cover opacity-90 transition-all duration-700 group-hover:scale-110 group-hover:opacity-100"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 100%, oklch(0.48 0.16 255 / 0.35), transparent 65%)",
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

      {/* FEATURED PRODUCTS */}
      <section className="py-32 md:py-40">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="label-eyebrow">The Range</div>
              <h2 className="mt-4 font-display text-4xl md:text-6xl">
                Ten products. <span className="italic text-gold-gradient">One standard.</span>
              </h2>
            </div>
            <Link to="/collection" className="btn-ghost-gold">View all products</Link>
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
            <div className="label-eyebrow">Trusted in every home</div>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">What customers say</h2>
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
                      Verified Buyer
                    </div>
                  )}
                </div>
                <blockquote className="mt-5 font-display text-lg leading-relaxed text-foreground/90">
                  "{r.text}"
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-gold/10 pt-5">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-full font-display text-lg text-white"
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
            Build your <span className="italic text-gold-gradient">cleaning kit</span>.
          </h2>
          <p className="mx-auto mt-6 max-w-lg font-display text-lg text-foreground/80">
            Every order is dispatched from our Mumbai warehouse with free shipping over ₹499.
            Bulk and B2B enquiries welcomed on WhatsApp.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/collection" className="btn-gold btn-gold-hover">Shop the Range</Link>
            <Link to="/contact" className="btn-ghost-gold">Talk to us</Link>
          </div>
        </motion.div>
      </section>

      {/* Suppress unused import warning for hero bottle in case referenced elsewhere */}
      <span aria-hidden style={{ display: "none" }}>{heroBottle ? "" : ""}</span>
    </div>
  );
}
