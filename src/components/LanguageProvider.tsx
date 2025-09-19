import React from 'react';
import { useLanguageSync } from '../hooks/useLanguageSync';

interface LanguageProviderProps {
  children: React.ReactNode;
}

/**
 * Provider qui gère la synchronisation de la langue à travers toute l'application
 * Place ce composant au niveau le plus haut de l'application pour assurer
 * que la langue est synchronisée partout
 */
export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  // Utilise le hook pour synchroniser la langue
  useLanguageSync();

  // Retourne simplement les enfants - le hook fait tout le travail
  return <>{children}</>;
};