import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { CheckCircle2, Lock } from "lucide-react";
import { useCart } from "@/lib/cart-store";
import { formatPrice } from "@/lib/products";

export const Route = createFileRoute("/checkout")({
  component: Checkout,
  head: () => ({ meta: [{ title: "Checkout — Mehek Fragrances" }, { name: "description", content: "Complete your Mehek Fragrances order." }] }),
});

function Checkout() {
  const router = useRouter();
  const { items, subtotal, clear } = useCart();
  const [step, setStep] = useState<"form" | "done">("form");

  const total = subtotal();
  const shipping = total > 0 ? 0 : 0;

  if (items.length === 0 && step === "form") {
    return (
      <div className="mx-auto max-w-lg px-6 pt-40 text-center">
        <h1 className="font-display text-4xl">Your coffret is empty</h1>
        <p className="mt-4 text-muted-foreground">Add a fragrance before checking out.</p>
        <Link to="/collection" className="btn-ghost-gold mt-8 inline-flex">Discover the collection</Link>
      </div>
    );
  }

  return (
    <div className="pt-32">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <AnimatePresence mode="wait">
          {step === "form" ? (
            <motion.div key="form" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }} className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setStep("done");
                  clear();
                }}
                className="space-y-10"
              >
                <div>
                  <div className="label-eyebrow">Checkout</div>
                  <h1 className="mt-4 font-display text-4xl md:text-5xl">Deliver this scent</h1>
                </div>

                <Section title="Contact">
                  <Field label="Email" type="email" required />
                  <Field label="Phone" type="tel" required />
                </Section>

                <Section title="Shipping">
                  <div className="grid gap-4 md:grid-cols-2">
                    <Field label="First name" required />
                    <Field label="Last name" required />
                  </div>
                  <Field label="Address" required />
                  <div className="grid gap-4 md:grid-cols-3">
                    <Field label="City" required />
                    <Field label="State" required />
                    <Field label="PIN" required />
                  </div>
                </Section>

                <Section title="Payment">
                  <div className="glass-luxe flex items-start gap-4 p-5">
                    <Lock className="mt-1 h-4 w-4 text-gold" />
                    <div className="flex-1">
                      <div className="font-display text-lg">Razorpay</div>
                      <div className="mt-1 text-xs text-muted-foreground">
                        You'll be redirected to Razorpay's secure vault. UPI, cards & netbanking accepted. (Demo)
                      </div>
                    </div>
                  </div>
                </Section>

                <button type="submit" className="btn-gold btn-gold-hover w-full">
                  Pay {formatPrice(total + shipping)}
                </button>
              </form>

              <aside className="lg:sticky lg:top-32 lg:self-start">
                <div className="glass-luxe p-8">
                  <div className="label-eyebrow">Your Coffret</div>
                  <ul className="mt-6 space-y-5">
                    {items.map((it) => (
                      <li key={it.id} className="flex gap-4">
                        <div className="h-20 w-16 flex-shrink-0 overflow-hidden bg-ink">
                          <img src={it.image} alt={it.name} className="h-full w-full object-cover" />
                        </div>
                        <div className="flex flex-1 items-start justify-between">
                          <div>
                            <div className="font-display text-lg leading-tight">{it.name}</div>
                            <div className="mt-1 text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                              {it.size} · Qty {it.qty}
                            </div>
                          </div>
                          <div className="text-sm text-gold-soft">{formatPrice(it.price * it.qty)}</div>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 space-y-3 border-t border-gold/10 pt-6 text-sm">
                    <Row label="Subtotal" value={formatPrice(total)} />
                    <Row label="Shipping" value="Complimentary" />
                  </div>
                  <div className="mt-6 flex items-baseline justify-between border-t border-gold/10 pt-6">
                    <div className="label-eyebrow">Total</div>
                    <div className="text-gold-gradient font-display text-3xl">{formatPrice(total)}</div>
                  </div>
                </div>
              </aside>
            </motion.div>
          ) : (
            <motion.div
              key="done"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto max-w-xl py-24 text-center"
            >
              {Array.from({ length: 20 }).map((_, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 100, x: (Math.random() - 0.5) * 400 }}
                  animate={{ opacity: [0, 1, 0], y: -300 }}
                  transition={{ duration: 2.4, delay: i * 0.08, ease: "easeOut" }}
                  className="absolute left-1/2 h-1 w-1 rounded-full bg-gold"
                  style={{ boxShadow: "0 0 8px oklch(0.82 0.13 82)" }}
                />
              ))}
              <CheckCircle2 className="mx-auto h-14 w-14 text-gold" />
              <h1 className="mt-6 font-display text-5xl">Merci.</h1>
              <p className="mt-4 font-display text-xl text-foreground/80">
                Your coffret is being hand-finished in the atelier.
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                A confirmation with tracking will arrive shortly.
              </p>
              <button onClick={() => router.navigate({ to: "/" })} className="btn-gold btn-gold-hover mt-10">
                Return to the Maison
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <div className="label-eyebrow">{title}</div>
      <div className="mt-5 space-y-4">{children}</div>
    </section>
  );
}

function Field({ label, type = "text", required = false }: { label: string; type?: string; required?: boolean }) {
  return (
    <label className="block">
      <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{label}</div>
      <input
        type={type}
        required={required}
        className="mt-2 w-full border-0 border-b border-gold/25 bg-transparent py-3 font-display text-lg text-foreground transition-colors focus:border-gold focus:outline-none"
      />
    </label>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between text-muted-foreground">
      <span>{label}</span>
      <span className="text-foreground/90">{value}</span>
    </div>
  );
}
