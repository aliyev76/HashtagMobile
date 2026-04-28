import { useState, useEffect } from 'react';
import { translations } from '../lib/i18n/translations';
import type { Language } from '../lib/i18n/translations';

export const useTranslation = () => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'tr';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (path: string, params?: Record<string, string>) => {
    const keys = path.split('.');
    let current: any = translations[language];

    for (const key of keys) {
      if (current[key] === undefined) {
        return path;
      }
      current = current[key];
    }

    if (typeof current !== 'string') return path;

    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        current = current.replace(`{${key}}`, value);
      });
    }

    return current;
  };

  return { t, language, setLanguage };
};
