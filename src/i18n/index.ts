import { en } from "./en";
import { es, type UI } from "./es";

export const LANGS = ["es", "en"] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = "es";

const UI_BY_LANG: Record<Lang, UI> = { es, en };

export function useTranslations(lang: Lang): UI {
  return UI_BY_LANG[lang];
}

/** Ruta del home para cada idioma ("/" o "/en/"). */
export function homePath(lang: Lang): string {
  return lang === DEFAULT_LANG ? "/" : `/${lang}/`;
}

export function otherLang(lang: Lang): Lang {
  return lang === "es" ? "en" : "es";
}
