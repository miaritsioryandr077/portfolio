"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t("nav.home"), href: "#hero" },
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.skills"), href: "#skills" },
    { name: t("nav.projects"), href: "#projects" },
    { name: t("nav.services"), href: "#services" },
    { name: t("nav.experience"), href: "#experience" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[9000] transition-all duration-300 ${
          isScrolled ? "py-4 bg-black/50 backdrop-blur-md border-b border-white/5" : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <a href="#" className="text-xl font-bold font-space text-white flex items-center gap-2">
            <span className="w-8 h-8 rounded bg-gradient-to-br from-primary to-accent flex items-center justify-center text-black">
              M/
            </span>
            <span>DEV</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="text-sm font-medium text-foreground/70 hover:text-white transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <LanguageSwitcher />
            <a
              href="#contact"
              className="px-5 py-2 text-sm font-semibold bg-white text-black rounded-full hover:bg-gray-200 transition-colors"
            >
              {t("nav.contact")}
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-xl flex flex-col justify-center px-6 sm:px-8 overflow-y-auto"
          >
            <button
              className="absolute top-4 sm:top-6 right-4 sm:right-6 text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={28} />
            </button>
            <nav className="flex flex-col gap-6 sm:gap-8 text-center items-center py-8">
              {navLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xl sm:text-2xl font-space font-bold text-foreground/70 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex justify-center my-3 sm:my-4">
                <LanguageSwitcher />
              </div>
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-2 sm:mt-4 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold bg-white text-black rounded-full inline-block text-center"
              >
                {t("nav.contactMe")}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}