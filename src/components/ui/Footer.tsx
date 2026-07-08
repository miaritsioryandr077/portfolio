"use client";

import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/10 bg-black/50 py-8 px-4 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-sm text-foreground/60">
          <p>© {new Date().getFullYear()} .  miaritsiorydev  .  Tous droits réservés.</p>
          <div className="hidden md:block w-1 h-1 rounded-full bg-white/20"></div>
          <p>Design & Code avec ❤️ par Miaritsiory</p>
        </div>

        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-10 h-10 rounded-full glass flex items-center justify-center text-foreground hover:text-white transition-colors"
          aria-label="Retour en haut"
        >
          <ArrowUp size={18} />
        </motion.button>
      </div>
    </footer>
  );
}
