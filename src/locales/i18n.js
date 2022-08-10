import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import { dataLocales, defaultLocale } from ".";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: dataLocales,
    fallbackLng: defaultLocale,
    debug: true,
    interpolation: { escapeValue: false }
  });

export default i18n;
