import { useEffect, useState } from "react";

/**
 * Perfume-droplet cursor. Disabled on touch devices / reduced motion.
 * Uses two layered elements: a gold droplet outline + soft glow trail.
 */
export function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trail, setTrail] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const isTouch = window.matchMedia("(hover: none)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isTouch || reduce) return;
    setEnabled(true);

    let raf = 0;
    let tx = 0, ty = 0;
    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      setPos({ x: tx, y: ty });
      const el = e.target as HTMLElement | null;
      setHovering(!!el?.closest("a, button, [data-hover]"));
    };
    let cur = { x: 0, y: 0 };
    const loop = () => {
      cur.x += (tx - cur.x) * 0.12;
      cur.y += (ty - cur.y) * 0.12;
      setTrail({ x: cur.x, y: cur.y });
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(loop);
    document.body.style.cursor = "none";
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      document.body.style.cursor = "";
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        className="pointer-events-none fixed z-[999] mix-blend-screen transition-[width,height] duration-300"
        style={{
          left: trail.x,
          top: trail.y,
          width: hovering ? 60 : 34,
          height: hovering ? 60 : 34,
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(circle, oklch(0.82 0.13 82 / 0.55), transparent 70%)",
          borderRadius: "50%",
          filter: "blur(6px)",
        }}
      />
      <svg
        className="pointer-events-none fixed z-[1000]"
        style={{
          left: pos.x,
          top: pos.y,
          transform: `translate(-50%, -50%) scale(${hovering ? 1.4 : 1})`,
          transition: "transform 0.35s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
        width="18"
        height="24"
        viewBox="0 0 18 24"
      >
        <defs>
          <linearGradient id="dropGold" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.92 0.09 85)" />
            <stop offset="100%" stopColor="oklch(0.65 0.13 60)" />
          </linearGradient>
        </defs>
        <path
          d="M9 1 C 3 10, 1 14, 1 17 a8 8 0 0 0 16 0 c 0 -3 -2 -7 -8 -16 z"
          fill="none"
          stroke="url(#dropGold)"
          strokeWidth="1.2"
        />
      </svg>
    </>
  );
}
