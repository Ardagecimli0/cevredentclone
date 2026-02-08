import { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getLanguageFromSlug, defaultLanguage, type Language } from '@/lib/i18n/config';
import DentalImplantPage from './DentalImplantPage';

const LocalizedDentalPage = () => {
  const { lang, slug } = useParams<{ lang?: string; slug?: string }>();
  const { i18n } = useTranslation();

  useEffect(() => {
    // If we have a language param, use it
    if (lang && ['en', 'fr', 'de', 'es', 'tr', 'ru', 'it'].includes(lang)) {
      i18n.changeLanguage(lang);
    } else if (slug) {
      // Try to detect language from slug
      const detectedLang = getLanguageFromSlug(slug);
      if (detectedLang) {
        i18n.changeLanguage(detectedLang);
      }
    }
  }, [lang, slug, i18n]);

  // Validate the route
  if (lang && !['en', 'fr', 'de', 'es', 'tr', 'ru', 'it'].includes(lang)) {
    return <Navigate to={`/${defaultLanguage}/dental-implant-turkey`} replace />;
  }

  return <DentalImplantPage />;
};

export default LocalizedDentalPage;
