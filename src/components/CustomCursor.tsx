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
        className="pointer-events-none fixed z-[999] mix-blend-multiply transition-[width,height] duration-300"
        style={{
          left: trail.x,
          top: trail.y,
          width: hovering ? 64 : 38,
          height: hovering ? 64 : 38,
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(circle, oklch(0.9 0.18 95 / 0.55), transparent 70%)",
          borderRadius: "50%",
          filter: "blur(8px)",
        }}
      />
      <svg
        className="pointer-events-none fixed z-[1000]"
        style={{
          left: pos.x,
          top: pos.y,
          transform: `translate(-50%, -50%) scale(${hovering ? 1.4 : 1})`,
          transition: "transform 0.35s cubic-bezier(0.22, 1, 0.36, 1)",
          filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.25))",
        }}
        width="30"
        height="24"
        viewBox="0 0 30 24"
      >
        <defs>
          <linearGradient id="spongeYellow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFE066" />
            <stop offset="60%" stopColor="#F5C518" />
            <stop offset="100%" stopColor="#C99A0E" />
          </linearGradient>
          <linearGradient id="spongeGreen" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3FB65A" />
            <stop offset="100%" stopColor="#1E7A36" />
          </linearGradient>
        </defs>
        {/* green scrub side */}
        <rect x="1" y="2" width="28" height="7" rx="1.5" fill="url(#spongeGreen)" />
        {/* yellow sponge body */}
        <rect x="1" y="8" width="28" height="14" rx="2" fill="url(#spongeYellow)" />
        {/* pores */}
        {[[6,13],[11,16],[16,12],[21,15],[25,18],[9,19],[19,19],[14,18]].map(([cx,cy],i)=>(
          <circle key={i} cx={cx} cy={cy} r="0.9" fill="#B8860B" opacity="0.55" />
        ))}
        {/* highlight */}
        <rect x="2" y="9" width="26" height="1.2" rx="0.6" fill="#FFF3B0" opacity="0.7" />
      </svg>
    </>
  );
}
