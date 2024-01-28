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
          // NavPage
            "main":"Home",
            "about_us":"About us",
            "our_warehouses":"OUR WAREHOUSES",
            "brockers":'OUR WAREHOUSES',
            "contacts":"Contacts",
          //Footer
            "privat_policy":'Privat Policy',
          //About us 
          'about_us_header':'About Us in Numbers',
          'aboutUs_block_header1':'7 Years',
          'aboutUs_block_text1':'Successfully operating for more than seven years',
          'aboutUs_block_header2':'775 Tons',
          'aboutUs_block_text2':'We have transported almost 780 tons of cargo',
          'aboutUs_block_header3':'94%',
          'aboutUs_block_text3':'Average order fulfillment rate of 94%',
          'aboutUs_block_header4':'14 Countries',
          'aboutUs_block_text4':'Conducting transportations from 14 countries',
          'aboutUs_block_header5':'+2/8 Degrees',
          'aboutUs_block_text5':'Maintaining temperature during transportation',
          'aboutUs_block_header6':'174 Clients',
          'aboutUs_block_text6':'Working with 174 corporations and thousands of individuals worldwide',
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
          // NavPage
            "main":"Главная",
            "about_us":"О нас",
            "our_warehouses":"Наги склады",
            "brockers":'Брокерам',
            "contacts":"Контакты",
          //Footer
            "privat_policy":'Политика конфиденциальности',
          //About us 
          //About Us in Numbers
            'about_us_header':'О нас в цифрах',
            'aboutUs_block_header1':'7 лет',
            'aboutUs_block_text1':'Успешно работаем уже более семи лет',
            'aboutUs_block_header2':'775 тонн',
            'aboutUs_block_text2':'Мы перевезли почти 780 тонн груза',
            'aboutUs_block_header3':'94 %',
            'aboutUs_block_text3':'Средний процент выполнения заказа 94%',
            'aboutUs_block_header4':'14 стран',
            'aboutUs_block_text4':'Осуществляем перевозки из 14 стран',
            'aboutUs_block_header5':'+2/8 градуса',
            'aboutUs_block_text5':'Соблюдение температур при перевозке',
            'aboutUs_block_header6':'174 клиента',
            'aboutUs_block_text6':'С нами работают 174 корпорации, а также тысячи людей по всему миру',
          }
        }
    },
    lng: "ru", // устанавливаем начальный язык
    fallbackLng: "ru",
    interpolation: { escapeValue: false }
});

export default i18n;