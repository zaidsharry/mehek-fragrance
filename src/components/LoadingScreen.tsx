import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";

/**
 * Cinematic first-load reveal — logo emerges from smoke, gold particles drift.
 * Only plays once per session.
 */
export function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("mehek-intro")) {
      setVisible(false);
      return;
    }
    const t = window.setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem("mehek-intro", "1");
    }, 2600);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-[1200] flex items-center justify-center bg-ink"
        >
          {/* Smoke */}
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.4, x: -80 + i * 40 }}
              animate={{ opacity: [0, 0.5, 0], scale: 2, x: 60 + i * 20 }}
              transition={{ duration: 2.4, delay: i * 0.15, ease: "easeOut" }}
              className="absolute h-80 w-80 rounded-full"
              style={{
                background: "radial-gradient(circle, oklch(0.82 0.13 82 / 0.15), transparent 70%)",
                filter: "blur(30px)",
                mixBlendMode: "screen",
              }}
            />
          ))}
          {/* Particles */}
          {Array.from({ length: 16 }).map((_, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 100 + Math.random() * 200, x: (Math.random() - 0.5) * 600 }}
              animate={{ opacity: [0, 1, 0], y: -400 }}
              transition={{ duration: 2.6, delay: i * 0.1, ease: "easeOut" }}
              className="absolute h-1 w-1 rounded-full bg-gold"
              style={{ boxShadow: "0 0 8px oklch(0.82 0.13 82)" }}
            />
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, filter: "blur(20px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex flex-col items-center"
          >
            <Logo showText={false} className="scale-150" />
            <div className="mt-8 font-display text-3xl tracking-[0.3em] shimmer-text">SWARAJ ENTERPRISES</div>
            <div className="mt-3 label-eyebrow">Cleaning Products</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
