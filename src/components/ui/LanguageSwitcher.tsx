"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Flag from "react-flagkit";
import { useLanguage } from "@/context/LanguageContext";
import { Language } from "@/i18n/translations";

// Association des langues avec le code pays officiel de leur drapeau respectif
export const languages: { code: Language; label: string; countryCode: string }[] = [
  { code: "fr", label: "Français", countryCode: "FR" },
  { code: "en", label: "English", countryCode: "GB" },
  { code: "mg", label: "Malagasy", countryCode: "MG" },
  { code: "de", label: "Deutsch", countryCode: "DE" },
  { code: "es", label: "Español", countryCode: "ES" },
  { code: "ja", label: "日本語", countryCode: "JP" },
  { code: "zh", label: "中文", countryCode: "CN" },
  { code: "ar", label: "العربية", countryCode: "SA" },
];

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState<"top" | "bottom">("bottom");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMounted(true);
    
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Vérifier la position de la dropdown pour éviter qu'elle sorte de l'écran
  useEffect(() => {
    if (isOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;
      const dropdownHeight = Math.min(languages.length * 45 + 20, 250); // Hauteur approximative
      
      if (spaceBelow < dropdownHeight) {
        setDropdownPosition("top");
      } else {
        setDropdownPosition("bottom");
      }
    }
  }, [isOpen]);

  if (!mounted) {
    return <div className="w-12 h-6" />; // placeholder pour éviter le saut au chargement
  }

  // Trouver le code pays de la langue actuellement sélectionnée
  const currentLang = languages.find((lang) => lang.code === language);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-sm font-medium text-foreground/70 hover:text-white transition-colors"
      >
        {currentLang && (
          <div className="flex items-center shrink-0 w-4 h-4 rounded-sm overflow-hidden">
            <Flag country={currentLang.countryCode} size={16} />
          </div>
        )}
        <span className="uppercase">{language}</span>
        <ChevronDown size={14} className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className={`absolute left-1/2 -translate-x-1/2 mt-2 space-y-1 w-32 bg-black/90 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden shadow-xl z-50 py-2 ${
              dropdownPosition === "top" ? "bottom-full mb-2" : "top-full mt-2"
            }`}
            style={{
              maxHeight: "min(60vh, 250px)",
              overflowY: "auto"
            }}
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code);
                  setIsOpen(false);
                }}
                className={`flex items-center gap-2 w-full text-left px-4 py-2 text-sm transition-colors ${
                  language === lang.code
                    ? "bg-primary/20 text-primary"
                    : "text-foreground/70 hover:bg-white/5 hover:text-white"
                }`}
              >
                <div className="flex items-center shrink-0 w-4 h-4 rounded-sm overflow-hidden">
                  <Flag country={lang.countryCode} size={16} />
                </div>
                <span className="truncate">{lang.label}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}