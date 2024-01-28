// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
.use(initReactI18next)
.init({
    resources: {
        en: {
        translation: {
          //MainSlide
            "contact_us": "Contact Us",
            'aviatransport' : 'Air Freight of Flowers',
            'main-text_itallc1' : 'We specialize exclusively in air transportation of fresh cut flowers and plants from ',
            'span':'Ecuador, Kenya, Colombia, Chile, the Netherlands, Israel',
            'main-text_itallc2':' to the end customer.',
            'max_delay' : 'Maximum delivery time for goods - 7 days from order.',
          // Equador
            "equador_text":'Shipping cost for one full box starts ',
            'equador_span':' from $105',
        }
    },
        ru: {
        translation: {
          //MainSlide
            "contact_us": "Связаться с нами",
            'aviatransport' : "Авиаперевозка цветов",
            'main-text_itallc1':'Занимаемся только АВИА перевозкой свеже срезанных цветов и растений из',
            'span' : 'Эквадора, Кении, Колумбии, Чили, Голландии, Израиля',
            'main-text_itallc2': 'до конечного заказчика.',
            'max_delay' : 'Максимальный срок доставки товара - 7 дней от заказа',
          // Equador
          "equador_text":'Стоимость доставки 1 фулбокса',
          'equador_span':' от 105 $',
        }
        }
    },
    lng: "ru", // устанавливаем начальный язык
    fallbackLng: "ru",
    interpolation: { escapeValue: false }
});

export default i18n;