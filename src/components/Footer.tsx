import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-gold/15 bg-background/60">
      <div className="pointer-events-none absolute inset-x-0 -top-24 h-24 bg-gradient-to-b from-transparent to-background/60" />
      <div className="mx-auto grid max-w-[1440px] gap-14 px-6 py-20 md:grid-cols-4 md:px-10">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-6 max-w-sm font-display text-lg leading-relaxed text-muted-foreground">
            Premium house and vehicle cleaning products — crafted in India, formulated for a spotless everyday.
          </p>
          <div className="mt-8 flex gap-4">
            <a
              href="https://www.instagram.com/swaraj_enterprises.co?igsh=cGxxdXl5ZWQxNDMy"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="btn-icon-gold rounded-full border border-gold/30 p-3 text-gold"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div>
          <div className="label-eyebrow">Company</div>
          <ul className="mt-5 space-y-3 text-sm text-foreground/75">
            <li><Link to="/collection" className="hover:text-gold">Products</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
            <li><Link to="/login" className="hover:text-gold">Account</Link></li>
          </ul>
        </div>
        <div>
          <div className="label-eyebrow">Contact</div>
          <ul className="mt-5 space-y-3 text-sm text-foreground/75">
            <li>
              <a href="https://wa.me/919844734939" target="_blank" rel="noopener noreferrer" className="hover:text-gold">
                +91 98447 34939
              </a>
            </li>
            <li>
              <a href="mailto:swarajenterprises.co@gmail.com" className="hover:text-gold break-all">
                swarajenterprises.co@gmail.com
              </a>
            </li>
            <li className="leading-relaxed">
              Aberottu, Narikombu Post &amp; Village,<br />
              Bantwala Tq, Dakshina Kannada — 574231
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gold/10">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-3 px-6 py-6 text-[11px] uppercase tracking-[0.3em] text-muted-foreground md:flex-row md:px-10">
          <div>© {new Date().getFullYear()} Swaraj Enterprises</div>
          <div>Made in India · Formulated for shine</div>
        </div>
      </div>
    </footer>
  );
}
