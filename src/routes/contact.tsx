import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { MessageCircle, Mail, Phone, MapPin } from "lucide-react";
import heroBottle from "@/assets/hero-bottle.jpg";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact — Swaraj Enterprises" },
      { name: "description", content: "Talk to Swaraj Enterprises about products, bulk orders and B2B pricing. WhatsApp +91 98447 34939." },
      { property: "og:title", content: "Contact — Swaraj Enterprises" },
      { property: "og:description", content: "We're on WhatsApp for orders, bulk enquiries and B2B pricing." },
      { property: "og:image", content: heroBottle },
    ],
  }),
});

function Contact() {
  return (
    <div className="pt-32">
      <div className="mx-auto grid max-w-[1440px] gap-16 px-6 md:grid-cols-2 md:px-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="label-eyebrow">Get in Touch</div>
          <h1 className="mt-6 font-display text-5xl leading-[0.95] md:text-7xl">
            A direct line<br />
            <span className="italic text-gold-gradient">to our team</span>.
          </h1>
          <p className="mt-8 max-w-md font-display text-lg text-foreground/80">
            Product questions, bulk orders, B2B pricing, distribution enquiries — reach us any way you like, we'll answer personally.
          </p>

          <div className="mt-12 space-y-6">
            <ContactRow
              icon={<MessageCircle className="h-5 w-5" />}
              label="WhatsApp"
              value="+91 82913 88799"
              href="https://wa.me/918291388799"
              primary
            />
            <ContactRow icon={<Phone className="h-5 w-5" />} label="Telephone" value="+91 82913 88799" href="tel:+918291388799" />
            <ContactRow icon={<Mail className="h-5 w-5" />} label="Email" value="hello@swarajenterprises.in" href="mailto:hello@swarajenterprises.in" />
            <ContactRow icon={<MapPin className="h-5 w-5" />} label="Warehouse" value="Mumbai, India" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-[4/5] overflow-hidden bg-muted"
        >
          <img src={heroBottle} alt="Swaraj Enterprises warehouse" className="h-full w-full object-cover" />
          <div className="pointer-events-none absolute inset-4 border border-gold/30" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-8">
            <div className="label-eyebrow">Est. 2018</div>
            <div className="mt-2 font-display text-3xl text-foreground">Swaraj Enterprises, Mumbai</div>
          </div>
        </motion.div>
      </div>

      {/* Form */}
      <section className="mx-auto mt-32 max-w-3xl px-6 md:px-10">
        <div className="text-center">
          <div className="label-eyebrow">Or send us a note</div>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">Write to us</h2>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className="mt-10 space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <FormField label="Your name" />
            <FormField label="Email" type="email" />
          </div>
          <FormField label="Subject" />
          <label className="block">
            <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Message</div>
            <textarea
              rows={5}
              className="mt-2 w-full resize-none border-0 border-b border-gold/25 bg-transparent py-3 font-display text-lg focus:border-gold focus:outline-none"
            />
          </label>
          <div className="text-center">
            <button className="btn-gold btn-gold-hover">Send Message</button>
          </div>
        </form>
      </section>
    </div>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
  primary = false,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  primary?: boolean;
}) {
  const inner = (
    <div className={`glass-luxe group flex items-center gap-5 p-5 transition-all duration-500 ${href ? "hover:border-gold/50 hover:translate-x-1" : ""}`}>
      <div className={`flex h-11 w-11 items-center justify-center rounded-full ${primary ? "text-white" : "text-gold"}`} style={primary ? { background: "var(--gradient-gold)" } : { border: "1px solid oklch(0.48 0.16 255 / 0.4)" }}>
        {icon}
      </div>
      <div>
        <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{label}</div>
        <div className="mt-1 font-display text-xl text-foreground/95 group-hover:text-gold">{value}</div>
      </div>
    </div>
  );
  return href ? (
    <a href={href} target="_blank" rel="noreferrer">{inner}</a>
  ) : (
    inner
  );
}

function FormField({ label, type = "text" }: { label: string; type?: string }) {
  return (
    <label className="block">
      <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{label}</div>
      <input
        type={type}
        className="mt-2 w-full border-0 border-b border-gold/25 bg-transparent py-3 font-display text-lg focus:border-gold focus:outline-none"
      />
    </label>
  );
}
