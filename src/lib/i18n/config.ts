export const languages = ['en', 'fr', 'de', 'es', 'tr', 'ru', 'it'] as const;
export type Language = typeof languages[number];

export const defaultLanguage: Language = 'en';

export const languageNames: Record<Language, string> = {
  en: 'English',
  fr: 'Français',
  de: 'Deutsch',
  es: 'Español',
  tr: 'Türkçe',
  ru: 'Русский',
  it: 'Italiano',
};

export const languageFlags: Record<Language, string> = {
  en: '🇬🇧',
  fr: '🇫🇷',
  de: '🇩🇪',
  es: '🇪🇸',
  tr: '🇹🇷',
  ru: '🇷🇺',
  it: '🇮🇹',
};

// Localized slugs for "dental-implant-turkey"
export const localizedSlugs: Record<Language, string> = {
  en: 'dental-implant-turkey',
  fr: 'implant-dentaire-en-turquie',
  de: 'zahnimplantat-tuerkei',
  es: 'implante-dental-turquia',
  tr: 'dis-implanti-turkiye',
  ru: 'zubnoy-implant-turtsiya',
  it: 'impianto-dentale-in-turchia',
};

export const getSlugForLanguage = (lang: Language): string => {
  return localizedSlugs[lang];
};

export const getLanguageFromSlug = (slug: string): Language | null => {
  for (const [lang, localizedSlug] of Object.entries(localizedSlugs)) {
    if (localizedSlug === slug) {
      return lang as Language;
    }
  }
  return null;
};
