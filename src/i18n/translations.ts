import fr from "./locales/fr.json";
import en from "./locales/en.json";
import mg from "./locales/mg.json";
import de from "./locales/de.json";
import es from "./locales/es.json";
import ja from "./locales/ja.json";
import zh from "./locales/zh.json";
import ar from "./locales/ar.json";

export const translations = {
  fr,
  en,
  mg,
  de,
  es,
  ja,
  zh,
  ar
} as const;

export type Language = keyof typeof translations;
