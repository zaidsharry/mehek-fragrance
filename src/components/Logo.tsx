export function Logo({ className = "", showText = true }: { className?: string; showText?: boolean }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg viewBox="0 0 60 60" className="h-9 w-9" aria-hidden>
        <defs>
          <linearGradient id="mfgold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="oklch(0.72 0.14 80)" />
            <stop offset="50%" stopColor="oklch(0.90 0.09 85)" />
            <stop offset="100%" stopColor="oklch(0.60 0.13 60)" />
          </linearGradient>
        </defs>
        {/* Perfume flask silhouette */}
        <path
          d="M22 12 h16 v4 h-2 l3 4 v3 l4 6 v18 a5 5 0 0 1 -5 5 h-16 a5 5 0 0 1 -5 -5 v-18 l4 -6 v-3 l3 -4 h-2 z"
          fill="none"
          stroke="url(#mfgold)"
          strokeWidth="1.4"
        />
        {/* Diamond top */}
        <path d="M27 6 l3 -3 l3 3 l-3 3 z" fill="url(#mfgold)" />
        <circle cx="36" cy="4" r="0.9" fill="url(#mfgold)" />
        <circle cx="38" cy="7" r="0.5" fill="url(#mfgold)" />
        {/* MF monogram */}
        <text
          x="30"
          y="42"
          textAnchor="middle"
          fontFamily="Cormorant Garamond, serif"
          fontSize="14"
          fill="url(#mfgold)"
          fontWeight="500"
        >
          MF
        </text>
      </svg>
      {showText && (
        <div className="leading-none">
          <div className="font-display text-[1.15rem] tracking-[0.22em] text-gold-gradient">MEHEK</div>
          <div className="mt-1 label-eyebrow text-[0.55rem]">Fragrances</div>
        </div>
      )}
    </div>
  );
}
