import { AnimatePresence, motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Minus, Plus, ShoppingBag, X } from "lucide-react";
import { useCart } from "@/lib/cart-store";
import { formatPrice } from "@/lib/products";

export function CartDrawer() {
  const { items, open, setOpen, setQty, remove, subtotal } = useCart();

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            key="scrim"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed inset-0 z-[80] bg-ink/70 backdrop-blur-md"
            onClick={() => setOpen(false)}
          />
          <motion.aside
            key="drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="fixed right-0 top-0 z-[90] flex h-full w-full max-w-md flex-col glass-luxe"
          >
            <div className="flex items-center justify-between border-b border-gold/15 px-6 py-5">
              <div>
                <div className="label-eyebrow">Your Coffret</div>
                <div className="mt-1 font-display text-xl">
                  {items.length} {items.length === 1 ? "item" : "items"}
                </div>
              </div>
              <button onClick={() => setOpen(false)} className="p-2 text-foreground/70 hover:text-gold">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-6">
              {items.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <ShoppingBag className="h-10 w-10 text-gold/50" />
                  <p className="mt-6 font-display text-2xl">Your coffret is empty</p>
                  <p className="mt-2 text-sm text-muted-foreground">Begin your olfactive journey below.</p>
                  <Link
                    to="/collection"
                    onClick={() => setOpen(false)}
                    className="btn-ghost-gold mt-8"
                  >
                    Discover the collection
                  </Link>
                </div>
              ) : (
                <ul className="space-y-6">
                  <AnimatePresence initial={false}>
                    {items.map((it) => (
                      <motion.li
                        key={it.id}
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, x: 40 }}
                        className="flex gap-4 border-b border-gold/10 pb-6"
                      >
                        <div className="relative h-28 w-24 flex-shrink-0 overflow-hidden bg-ink">
                          <img src={it.image} alt={it.name} className="h-full w-full object-cover" />
                        </div>
                        <div className="flex flex-1 flex-col">
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <div className="font-display text-lg leading-tight">{it.name}</div>
                              <div className="mt-1 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                                {it.size}
                              </div>
                            </div>
                            <button onClick={() => remove(it.id)} className="text-muted-foreground hover:text-gold">
                              <X className="h-4 w-4" />
                            </button>
                          </div>
                          <div className="mt-auto flex items-center justify-between">
                            <div className="flex items-center gap-1 border border-gold/20">
                              <button
                                onClick={() => setQty(it.id, it.qty - 1)}
                                className="px-2 py-1.5 text-gold hover:bg-gold/10"
                              >
                                <Minus className="h-3 w-3" />
                              </button>
                              <span className="w-8 text-center text-sm">{it.qty}</span>
                              <button
                                onClick={() => setQty(it.id, it.qty + 1)}
                                className="px-2 py-1.5 text-gold hover:bg-gold/10"
                              >
                                <Plus className="h-3 w-3" />
                              </button>
                            </div>
                            <div className="text-gold-gradient font-display text-lg">
                              {formatPrice(it.price * it.qty)}
                            </div>
                          </div>
                        </div>
                      </motion.li>
                    ))}
                  </AnimatePresence>
                </ul>
              )}
            </div>

            {items.length > 0 && (
              <div className="border-t border-gold/15 px-6 py-6">
                <div className="flex items-baseline justify-between">
                  <div className="label-eyebrow">Subtotal</div>
                  <motion.div
                    key={subtotal()}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-gold-gradient font-display text-3xl"
                  >
                    {formatPrice(subtotal())}
                  </motion.div>
                </div>
                <p className="mt-2 text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                  Complimentary shipping · Signature packaging
                </p>
                <Link
                  to="/checkout"
                  onClick={() => setOpen(false)}
                  className="btn-gold btn-gold-hover mt-6 w-full"
                >
                  Proceed to Checkout
                </Link>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
