// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
.use(initReactI18next)
.init({
    resources: {
        en: {
        translation: {
            "contact_us": "Contact Us"
          // Ваши английские переводы
        }
    },
        ru: {
        translation: {
            "contact_us": "Связаться с нами"
          // Ваши русские переводы
        }
        }
    },
    lng: "ru", // устанавливаем начальный язык
    fallbackLng: "ru",
    interpolation: { escapeValue: false }
});

export default i18n;