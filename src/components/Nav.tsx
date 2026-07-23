import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Search, ShoppingBag, User, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { useCart } from "@/lib/cart-store";

const links = [
  { to: "/", label: "Home" },
  { to: "/collection", label: "Products" },
  { to: "/contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const setCartOpen = useCart((s) => s.setOpen);
  const count = useCart((s) => s.items.reduce((a, b) => a + b.qty, 0));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
          scrolled ? "glass-luxe" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-4 md:px-10 md:py-5">
          <Link to="/" className="group">
            <Logo />
          </Link>

          <nav className="hidden items-center gap-10 md:flex">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="group relative text-[0.72rem] uppercase tracking-[0.32em] text-foreground/80 transition-colors hover:text-gold"
                activeProps={{ className: "text-gold" }}
              >
                {l.label}
                <span className="absolute -bottom-2 left-0 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1 md:gap-3">
            <button
              onClick={() => setSearchOpen(true)}
              className="p-2.5 text-foreground/80 transition-colors hover:text-gold"
              aria-label="Search"
            >
              <Search className="h-[18px] w-[18px]" />
            </button>
            <Link
              to="/login"
              className="hidden p-2.5 text-foreground/80 transition-colors hover:text-gold md:inline-flex"
              aria-label="Account"
            >
              <User className="h-[18px] w-[18px]" />
            </Link>
            <button
              onClick={() => setCartOpen(true)}
              className="relative p-2.5 text-foreground/80 transition-colors hover:text-gold"
              aria-label="Cart"
            >
              <ShoppingBag className="h-[18px] w-[18px]" />
              {count > 0 && (
                <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-gold px-1 text-[10px] font-medium text-white">
                  {count}
                </span>
              )}
            </button>
            <button
              onClick={() => setMobile(true)}
              className="p-2.5 text-foreground/80 transition-colors hover:text-gold md:hidden"
              aria-label="Menu"
            >
              <Menu className="h-[18px] w-[18px]" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex items-center justify-between p-6">
              <Logo />
              <button onClick={() => setMobile(false)} className="p-2 text-gold">
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="mt-16 flex flex-col items-center gap-10">
              {[...links, { to: "/login", label: "Account" }].map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.6 }}
                >
                  <Link
                    to={l.to}
                    onClick={() => setMobile(false)}
                    className="font-display text-3xl tracking-wide text-foreground hover:text-gold"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search overlay */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-start justify-center bg-background/90 pt-32 backdrop-blur-2xl"
            onClick={() => setSearchOpen(false)}
          >
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl px-6"
            >
              <label className="label-eyebrow block">Search Swaraj</label>
              <input
                autoFocus
                placeholder="A product, a surface, a need…"
                className="mt-4 w-full border-0 border-b border-gold/30 bg-transparent pb-4 font-display text-3xl text-foreground placeholder:text-foreground/30 focus:border-gold focus:outline-none md:text-5xl"
              />
              <p className="mt-6 text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Try "floor", "glass", "car"
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
