// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translations from "./translation.json";

const changeLanguage = (language) => {
  i18n.changeLanguage(language);
};

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: translations.en, // Use direct translations
    },
    th: {
      translation: translations.th, // Use direct translations
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export { i18n, changeLanguage };
