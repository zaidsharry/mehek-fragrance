import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-gold/15 bg-ink/60">
      <div className="pointer-events-none absolute inset-x-0 -top-24 h-24 bg-gradient-to-b from-transparent to-ink/60" />
      <div className="mx-auto grid max-w-[1440px] gap-14 px-6 py-20 md:grid-cols-4 md:px-10">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-6 max-w-sm font-display text-lg leading-relaxed text-muted-foreground">
            An atelier of dark, cinematic fragrances — hand-composed for those who leave a trace.
          </p>
          <div className="mt-8 flex gap-4">
            <a href="#" className="rounded-full border border-gold/30 p-3 text-gold transition-colors hover:bg-gold/10">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" className="rounded-full border border-gold/30 p-3 text-gold transition-colors hover:bg-gold/10">
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div>
          <div className="label-eyebrow">Maison</div>
          <ul className="mt-5 space-y-3 text-sm text-foreground/75">
            <li><Link to="/collection" className="hover:text-gold">Collection</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
            <li><Link to="/login" className="hover:text-gold">Account</Link></li>
          </ul>
        </div>
        <div>
          <div className="label-eyebrow">Contact</div>
          <ul className="mt-5 space-y-3 text-sm text-foreground/75">
            <li>+91 82913 88799</li>
            <li>concierge@mehekfragrances.com</li>
            <li>Mumbai · India</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gold/10">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-3 px-6 py-6 text-[11px] uppercase tracking-[0.3em] text-muted-foreground md:flex-row md:px-10">
          <div>© {new Date().getFullYear()} Mehek Fragrances</div>
          <div>Composed in India · Bottled with intention</div>
        </div>
      </div>
    </footer>
  );
}
