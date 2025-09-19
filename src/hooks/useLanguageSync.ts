import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams, useLocation } from 'react-router-dom';

/**
 * Hook personnalisé pour synchroniser la langue à travers l'application
 * - Détecte la langue depuis les paramètres URL (pour compatibilité)
 * - Persiste la langue dans localStorage automatiquement
 * - Applique la langue sur toutes les pages
 */
export const useLanguageSync = () => {
  const { i18n } = useTranslation();
  const [searchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    // Vérifier d'abord si un paramètre lang est présent dans l'URL (pour compatibilité)
    const urlLang = searchParams.get('lang');

    if (urlLang && urlLang !== i18n.language) {
      // Si une langue est spécifiée dans l'URL, l'utiliser
      i18n.changeLanguage(urlLang);
      // La sauvegarde dans localStorage est automatique grâce à la config i18n
    } else {
      // Sinon, récupérer la langue depuis localStorage (géré automatiquement par i18n)
      const savedLanguage = localStorage.getItem('language');
      if (savedLanguage && savedLanguage !== i18n.language) {
        i18n.changeLanguage(savedLanguage);
      }
    }
  }, [searchParams, i18n, location.pathname]);

  // Fonction utilitaire pour changer la langue
  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    // localStorage est mis à jour automatiquement par i18n
  };

  return {
    currentLanguage: i18n.language,
    changeLanguage,
  };
};