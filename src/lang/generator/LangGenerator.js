import { en, uz } from "../languages";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
const lang = localStorage.getItem("lang");

i18n.use(initReactI18next).init({
  fallbackLng: lang || "en",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: { translation: en },
    uz: { translation: uz },
  },
});
