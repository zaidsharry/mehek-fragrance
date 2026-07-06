import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { useState, type MouseEvent, useEffect } from "react";
import { Plus } from "lucide-react";
import type { Product } from "@/lib/products";
import { formatPrice } from "@/lib/products";
import { useCart } from "@/lib/cart-store";
import { noteImage } from "@/lib/note-images";

/**
 * Signature interaction: on hover, the bottle lifts and tilts with the mouse,
 * a gold glow ignites, four fragrance-note glass cards emerge from the smoke
 * and gently orbit the bottle. On mobile, tap toggles the reveal.
 */
export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const [hover, setHover] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotY = useSpring(useTransform(mx, [-0.5, 0.5], [10, -10]), { stiffness: 120, damping: 18 });
  const rotX = useSpring(useTransform(my, [-0.5, 0.5], [-8, 8]), { stiffness: 120, damping: 18 });
  const add = useCart((s) => s.add);

  useEffect(() => {
    setIsTouch(window.matchMedia("(hover: none)").matches);
  }, []);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0); my.set(0); if (!isTouch) setHover(false);
  };

  const notes = product.featured;
  const active = hover;

  const cardHandlers = isTouch
    ? { onClick: (e: MouseEvent) => { e.preventDefault(); setHover((h) => !h); } }
    : {
        onMouseEnter: () => setHover(true),
        onMouseLeave: onLeave,
        onMouseMove: onMove,
      };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1, delay: (index % 3) * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="group relative"
    >
      <div
        {...cardHandlers}
        className="relative aspect-[3/4] cursor-pointer overflow-hidden bg-ink"
        style={{ perspective: 1200 }}
      >
        {/* Ambient glow, ignites on hover */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700"
          style={{
            opacity: active ? 1 : 0,
            background: `radial-gradient(ellipse at 50% 60%, oklch(${product.accent} / 0.35), transparent 65%)`,
          }}
        />
        {/* Gold ambient frame */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-2 border transition-all duration-700"
          style={{
            borderColor: active ? "oklch(0.82 0.13 82 / 0.55)" : "oklch(0.82 0.13 82 / 0.10)",
            boxShadow: active ? "inset 0 0 40px oklch(0.82 0.13 82 / 0.15)" : "none",
          }}
        />

        {/* Bottle */}
        <motion.div
          className="absolute inset-0 flex items-end justify-center"
          style={{ rotateX: rotX, rotateY: rotY, transformStyle: "preserve-3d" }}
        >
          <motion.img
            src={product.image}
            alt={product.name}
            width={896}
            height={1152}
            loading="lazy"
            className="h-full w-full object-cover"
            animate={{ scale: active ? 1.05 : 1, y: active ? -8 : 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            style={{ willChange: "transform" }}
          />
        </motion.div>

        {/* Smoke wisps */}
        <AnimatePresence>
          {active &&
            [0, 1, 2].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30, scale: 0.6 }}
                animate={{ opacity: [0, 0.6, 0], y: -80, scale: 1.4 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 3.5, delay: i * 0.4, ease: "easeOut", repeat: Infinity }}
                className="pointer-events-none absolute h-24 w-24 rounded-full"
                style={{
                  left: `${30 + i * 15}%`,
                  bottom: "42%",
                  background: "radial-gradient(circle, oklch(0.9 0.02 60 / 0.35), transparent 65%)",
                  filter: "blur(14px)",
                  mixBlendMode: "screen",
                }}
              />
            ))}
        </AnimatePresence>

        {/* Orbiting note bubbles (signature interaction) — large photoreal glass */}
        <div className="pointer-events-none absolute inset-0">
          {notes.map((n, i) => {
            const angle = (i / notes.length) * Math.PI * 2 - Math.PI / 2;
            const radius = 42; // % of card
            const x = 50 + Math.cos(angle) * radius;
            const y = 50 + Math.sin(angle) * radius * 0.78;
            return (
              <motion.div
                key={n.name}
                initial={false}
                animate={
                  active
                    ? { opacity: 1, scale: 1, x: `-50%`, y: `-50%`, filter: "blur(0px)" }
                    : { opacity: 0, scale: 0.4, x: `-50%`, y: `-30%`, filter: "blur(14px)" }
                }
                transition={{ duration: 0.9, delay: active ? 0.15 + i * 0.09 : i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                className="absolute"
                style={{ left: `${x}%`, top: `${y}%` }}
              >
                <motion.div
                  animate={active ? { y: [0, -10, 0] } : { y: 0 }}
                  transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
                  className="flex flex-col items-center gap-2"
                >
                  <div
                    className="relative h-24 w-24 overflow-hidden rounded-full border border-gold/40 shadow-[0_20px_50px_-10px_oklch(0_0_0_/_0.9),inset_0_2px_8px_oklch(1_0_0_/_0.1)] backdrop-blur-md md:h-28 md:w-28"
                    style={{
                      background: "radial-gradient(circle at 30% 30%, oklch(1 0 0 / 0.15), oklch(0 0 0 / 0.6))",
                    }}
                  >
                    <img
                      src={noteImage(n.name)}
                      alt={n.name}
                      loading="lazy"
                      width={112}
                      height={112}
                      className="h-full w-full object-cover"
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0 rounded-full"
                      style={{
                        background:
                          "radial-gradient(circle at 30% 25%, oklch(1 0 0 / 0.35), transparent 45%)",
                        mixBlendMode: "screen",
                      }}
                    />
                  </div>
                  <span className="whitespace-nowrap rounded-full bg-ink/80 px-3 py-1 font-display text-[13px] leading-none text-gold-soft backdrop-blur-sm">
                    {n.name}
                  </span>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Sparkle particles */}
        <AnimatePresence>
          {active &&
            Array.from({ length: 8 }).map((_, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  x: (Math.random() - 0.5) * 200,
                  y: (Math.random() - 0.9) * 180,
                }}
                transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.25, ease: "easeOut" }}
                className="pointer-events-none absolute left-1/2 top-1/2 h-1 w-1 rounded-full bg-gold"
                style={{ boxShadow: "0 0 8px oklch(0.82 0.13 82 / 0.9)" }}
              />
            ))}
        </AnimatePresence>

        {/* Bottom gradient */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink via-ink/70 to-transparent" />

        {/* Meta */}
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
          <div>
            <div className="label-eyebrow text-[0.6rem]">{product.subtitle}</div>
            <Link to="/product/$id" params={{ id: product.id }} className="mt-2 block font-display text-2xl leading-tight text-foreground hover:text-gold">
              {product.name}
            </Link>
            <div className="mt-2 text-sm text-gold-soft">{formatPrice(product.price)}</div>
          </div>
          <button
            aria-label={`Add ${product.name} to cart`}
            onClick={(e) => {
              e.stopPropagation();
              add({ id: product.id, name: product.name, price: product.price, size: product.size, image: product.image });
            }}
            className="glass-luxe flex h-11 w-11 items-center justify-center rounded-full text-gold transition-transform duration-500 hover:scale-110"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
