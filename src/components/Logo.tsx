export function Logo({ className = "", showText = true }: { className?: string; showText?: boolean }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg viewBox="0 0 60 60" className="h-9 w-9" aria-hidden>
        <defs>
          <linearGradient id="sebrand" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="oklch(0.48 0.16 255)" />
            <stop offset="55%" stopColor="oklch(0.62 0.13 220)" />
            <stop offset="100%" stopColor="oklch(0.65 0.14 165)" />
          </linearGradient>
        </defs>
        {/* Rounded shield */}
        <path
          d="M30 4 L52 12 V30 C52 44 42 52 30 56 C18 52 8 44 8 30 V12 Z"
          fill="url(#sebrand)"
          opacity="0.12"
        />
        <path
          d="M30 4 L52 12 V30 C52 44 42 52 30 56 C18 52 8 44 8 30 V12 Z"
          fill="none"
          stroke="url(#sebrand)"
          strokeWidth="1.6"
        />
        {/* Droplet/leaf hybrid — clean & growth */}
        <path
          d="M30 16 C36 24 40 30 40 36 A10 10 0 0 1 20 36 C20 30 24 24 30 16 Z"
          fill="url(#sebrand)"
        />
        {/* SE monogram */}
        <text
          x="30"
          y="52"
          textAnchor="middle"
          fontFamily="Jost, sans-serif"
          fontSize="7"
          fill="url(#sebrand)"
          fontWeight="600"
          letterSpacing="1"
        >
          SE
        </text>
      </svg>
      {showText && (
        <div className="leading-none">
          <div className="font-display text-[1.15rem] tracking-[0.22em] text-gold-gradient">SWARAJ</div>
          <div className="mt-1 label-eyebrow text-[0.55rem]">Enterprises</div>
        </div>
      )}
    </div>
  );
}
