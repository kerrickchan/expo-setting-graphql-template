import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import '@react-native-async-storage/async-storage';

// Import your translation files
import en from '../locales/en.json';
import zh from '../locales/zh.json';

// Initialize i18next
i18n
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3', // For compatibility with older JSON versions
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language if the current language is not available
    resources: {
      en: { translation: en },
      zh: { translation: zh },
    },
    // Store the user's language preferences in AsyncStorage
    backend: {
      loadPath: '/locales/{{lng}}.json',
      addPath: '/locales/add/{{lng}}/{{ns}}',
      jsonIndent: 2,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
