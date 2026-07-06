import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { Logo } from "@/components/Logo";

export const Route = createFileRoute("/login")({
  component: Login,
  head: () => ({ meta: [{ title: "Account — Mehek Fragrances" }, { name: "description", content: "Sign in to your Mehek Fragrances account." }] }),
});

function Login() {
  const [mode, setMode] = useState<"in" | "up">("in");

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-32">
      <div className="smoke-layer" />
      {Array.from({ length: 14 }).map((_, i) => (
        <span
          key={i}
          className="animate-drift pointer-events-none absolute h-1 w-1 rounded-full bg-gold"
          style={{
            left: `${20 + Math.random() * 60}%`,
            top: `${20 + Math.random() * 60}%`,
            animationDelay: `${i * 0.5}s`,
            boxShadow: "0 0 6px oklch(0.82 0.13 82 / 0.8)",
            opacity: 0.5,
          }}
        />
      ))}

      <motion.div
        initial={{ opacity: 0, y: 40, filter: "blur(20px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="glass-luxe relative w-full max-w-md p-10"
      >
        <div className="flex flex-col items-center">
          <Logo showText={false} />
          <h1 className="mt-6 font-display text-3xl">{mode === "in" ? "Welcome back" : "Join the Maison"}</h1>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            {mode === "in" ? "Sign in to your private library." : "Create an account to keep your favourites."}
          </p>
        </div>

        <form className="mt-8 space-y-5" onSubmit={(e) => e.preventDefault()}>
          {mode === "up" && <FloatingField label="Full name" />}
          <FloatingField label="Email" type="email" />
          <FloatingField label="Password" type="password" />

          <button className="btn-gold btn-gold-hover mt-2 w-full">
            {mode === "in" ? "Sign in" : "Create account"}
          </button>
        </form>

        <div className="mt-6 flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          <div className="h-px flex-1 bg-gold/15" /> or <div className="h-px flex-1 bg-gold/15" />
        </div>

        <button className="btn-ghost-gold mt-4 w-full">Continue with Google</button>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          {mode === "in" ? "New to Mehek?" : "Already a member?"}{" "}
          <button
            onClick={() => setMode(mode === "in" ? "up" : "in")}
            className="text-gold hover:text-gold-soft"
          >
            {mode === "in" ? "Create an account" : "Sign in"}
          </button>
        </p>

        <div className="mt-6 text-center">
          <Link to="/" className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground hover:text-gold">
            Return to the Maison
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

function FloatingField({ label, type = "text" }: { label: string; type?: string }) {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");
  const active = focused || value.length > 0;
  return (
    <label className="relative block">
      <span
        className={`pointer-events-none absolute left-0 origin-left transition-all duration-500 ${
          active ? "top-0 scale-75 text-gold" : "top-4 scale-100 text-muted-foreground"
        } text-[11px] uppercase tracking-[0.3em]`}
      >
        {label}
      </span>
      <input
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="w-full border-0 border-b border-gold/25 bg-transparent pb-2 pt-6 font-display text-lg text-foreground focus:border-gold focus:outline-none"
      />
    </label>
  );
}
