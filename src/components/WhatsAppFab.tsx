import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function WhatsAppFab() {
  return (
    <motion.a
      href="https://wa.me/918291388799"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.08 }}
      className="glass-luxe animate-gold-pulse fixed bottom-6 right-6 z-[100] flex h-14 w-14 items-center justify-center rounded-full text-gold"
      aria-label="WhatsApp us"
    >
      <MessageCircle className="h-5 w-5" />
    </motion.a>
  );
}
