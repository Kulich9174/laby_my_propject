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
            "brockers":'for Brokers',
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
        //Our warehouses
          'warehouses_header':'Where We Source Our Flowers From',
          'warehouses_textBold1':"Our flowers are not just creations of nature, but also embodiments of the world's diversity, delivered directly from the picturesque corners of the planet.",
          'warehouses_text_1par':'Beautiful flowers carry magnificence and freshness, brought directly from the most nurturing corners of nature. Our company, Flower Fracht Karaganda, takes pride in carefully selecting each type of flower.',
          'warehouses_text_2par':'We bring flowers and potted plants from ',
          'warehouses_text_2par.2':'delivering them fresh to all regions of the CIS.',
          'warehouses_shipment':'Delivery to Moscow takes from ',
          "to":"to",
          "days":"days",
        //Calc
        'calc_header': 'Delivery Calculator',
        'calc_step1_header': 'Choose a country to find out the delivery time',
        'calc_countyName_equador': 'Ecuador',
        'calc_countyName_kenia': 'Kenya',
        'calc_countyName_columbia': 'Colombia',
        'calc_countyName_chilli': 'Chile',
        'calc_countyName_israel': 'Israel',
        'calc_countyName_netherland': 'Netherlands',
        'calc_countyName_spain': 'Spain',
        'calc_step2_header': 'To calculate the delivery date, select the day you plan to make an order',
        'calc_orderDate': 'Order Date',
        'calc_endOfOrdering': 'End of Order Collection',
        'calc_shipment': 'Delivery',
        'calc_shipment_last': '7 days',
        'calc_day_shipment': 'Delivery Day',
        //Tariff
          'tariff_header':'Main Rates',
          'tariff_from':'from ',
          'tariff_block_header1':'$5.7 per 1kg',
          'tariff_block_text1':'Ecuador, Kenya, Colombia',
          'tariff_delivery_home':'Order delivery is made to your door',
          'tariff_block_header2':'$3.6 per 1kg',
          'tariff_block_text2':'Netherlands',
          'tariff_block_header3':' $4.8 per 1kg',
          'tariff_block_text3':'Spain, Chile',
          'tariff_block_header4':'$6.3 per 1kg',
          'tariff_block_text4':'Israel',
          'tariff_button':'DOWNLOAD PRICE LIST',
        //Form
          'form_header':'Order a Call',
          'form_text':'Order a call and our manager will contact you shortly',
          'form_name':'Name',
          'form_phone':'Phone Number',
          'form_label':'I consent to the processing of personal data',
        //MainPageHeadersOthers
          'header_brockers': 'For Brokers',
          'header_warehouses': 'Our Warehouses',
          'header_contacts': 'Contacts',
          'header_others': 'Standard Header',
        //Brockers
          'broc_header': 'Helping Brokers from Any Country with Flower Delivery Across the CIS',
          'broc_block_header1': 'Step 1',
          'broc_block_text1': 'The client contacts/works with a broker',
          'broc_block_header2': 'Step 2',
          'broc_block_text2': 'The client places an order',
          'broc_block_header3': 'Step 3',
          'broc_block_text3': 'The broker hands over the client’s cargo to our company for delivery',
          'broc_block_header4': 'Step 4',
          'broc_block_text4': 'We perform the delivery of the broker’s order to the client’s door',
        //Error
          'error_header': 'Error',
          'error_text': 'Unfortunately, the page was not found, it has most likely been deleted.',
          'error_bold': 'We recommend returning to the main page.',
        //Contacts
          'contact_block_header1': 'Phone Number',
          'contact_block_text1': '+7(495)7378585',
          'contact_block_text1.1':'+7(495)7378282',
          'contact_block_header2': 'E-mail',
          'contact_block_text2': 'ffkaragandainfo@info.ru',
          'contact_block_header3': 'Аdress',
          'contact_block_text3': 'Kazakhstan, Karaganda, Bukhar-Zhyrau Ave 59/2, Office 214',

          'country_Russia':'Russia',
          'country_Kz':'Kazahstan',
          'country_Belorussia' : 'Belorussia',
          'country_Armenia': 'Armenia',
          'country_Turkmenistan' : 'Turkmenistan',
          'country_Azer' : 'Azerbaijan',
          'country_Uzbek' : 'Uzbekistan',

          'city_Moscow':'Moscow',
          'city_Yaroslavl':'Yaroslavl',
          'city_Tula': 'Tula',
          'city_Astana':'Astana',
          'city_Almaty':'Almaty',

          'karaganda':'Karaganda',
          'map_name':'Karaganda — Yandex Maps',
        //Contact galllery component 
          'contactGallery_header':'Sales Group',
          'country':'Country: ',
          'menager':'Manager for: ',
        }
    },
        ru: {
        translation: {
          //MainSlide
            "contact_us": "Связаться с нами",
            'aviatransport' : "Авиаперевозка цветов",
            'main-text_itallc1':'Занимаемся только АВИА перевозкой свеже срезанных цветов и растений из ',
            'span' : 'Эквадора, Кении, Колумбии, Чили, Голландии, Израиля',
            'main-text_itallc2': 'до конечного заказчика.',
            'max_delay' : 'Максимальный срок доставки товара - 7 дней от заказа',
          // Equador
            "equador_text":'Стоимость доставки 1 фулбокса',
            'equador_span':' от 105 $',
          // NavPage
            "main":"Главная",
            "about_us":"О нас",
            "our_warehouses":"Наши склады",
            "brockers":'Брокерам',
            "contacts":"Контакты",
          //Footer
            "privat_policy":'Политика конфиденциальности',
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
          //Our warehouses
            'warehouses_header':'Откуда мы везем наши цветы',
            'warehouses_textBold1':"Наши цветы — не только произведения природы, но и воплощение мирового многообразия, доставляемого нам прямо из живописных уголков планеты.",
            'warehouses_text_1par':'Прекрасные цветы, несут в себе великолепие и свежесть, привезенные непосредственно из самых питательных уголков природы. Наша компания Flower Fracht Karaganda гордится тем, что мы тщательно подбираем каждый вид цветов.',
            'warehouses_text_2par':'Мы привозим цветы и растения в горшках из ',
            'warehouses_text_2par.2':'и доставляем их свежими во все регионы СНГ.',
            'warehouses_shipment':'Доставка в Москву занимает от ',
            "to":"до",
            "days":"дней",
          //Calc
            'calc_header':'Калькулятор доставки',
            'calc_step1_header':'Выберите страну по которой хотите узнать время достатвки',
            'calc_countyName_equador':'Эквадор',
            'calc_countyName_kenia':'Кениа',
            'calc_countyName_columbia':'Колумбия',
            'calc_countyName_chilli':'Чили',
            'calc_countyName_israel':'Израиль',
            'calc_countyName_netherland':'Голландия',
            'calc_countyName_spain':'Испания',
            'calc_step2_header':'Что бы рассчитать дату доставки выберите день когда планируете сделать заказ',
            'calc_orderDate':'Дата заказа',
            'calc_endOfOrdering':'Конец сбора заказов',
            'calc_shipment':'Доставка',
            'calc_shipment_last':'7 дней',
            'calc_day_shipment':'День поставки',

          //Teriff
            'tariff_header':'Основные тарифы',
            'tariff_from':'от',
            'tariff_block_header1':'5.7$/1кг',
            'tariff_block_text1':'Эквадор, Кения, Колумбия',
            'tariff_delivery_home':'Доставка заказа осуществляется до двери',
            'tariff_block_header2':'3.6$/1кг',
            'tariff_block_text2':'Голландия',
            'tariff_block_header3':'4.8$/1кг',
            'tariff_block_text3':'Испания, Чили',
            'tariff_block_header4':'6.3$/1кг',
            'tariff_block_text4':'Израиль',
            'tariff_button':'Скачать прайс',
          //Form
            'form_header':'Заказать звонок',
            'form_text':'Закажите звонок и наш менеджер свяжется с вами в близжайшее время',
            'form_name':'Имя',
            'form_phone':'Номер телефона',
            'form_label':'Даю согласие на обработку персональных данных',
          //MainPageHeadersOthers
            'header_brockers': 'Брокерам',
            'header_warehouses': 'Наши склады',
            'header_contacts':  'Контакты',
            'header_others': 'Стандартный заголовок',
          //Brockers
            'broc_header':'Помогаем брокерам из любых стан с доставкой цветов по всему СН',
            'broc_block_header1':'1 шаг',
            'broc_block_text1':'Клиент обращается/работает с брокером',
            'broc_block_header2':'2 шаг',
            'broc_block_text2':'Клиент делает заказ',
            'broc_block_header3':'3 шаг',
            'broc_block_text3':'Брокер передает груз клиента в нашу компанию для поставки',
            'broc_block_header4':'4 шаг',
            'broc_block_text4':'Осуществляем доставку клиенту заказа брокером до двери',
          //Error
            'error_header':'Ошибка',
            'error_text':'К сожалению страница не найдена, скорее всего она была удалена.',
            'error_bold':'Рекомендуем вернуться на главную.',
          //Contacts
            'contact_block_header1': 'Телефон',
            'contact_block_text1': '+7(495)7378585',
            'contact_block_text1.1':'+7(495)7378282',
            'contact_block_header2': 'E-mail',
            'contact_block_text2': 'ffkaragandainfo@info.ru',
            'contact_block_header3': 'Адрес',
            'contact_block_text3': 'Казахстан, г. Караганда, Просп. Бухар-Жырау 59/2, офис 214',

            "country_Russia": "Россия",
            "country_Kz": "Казахстан",
            'country_Belorussia' : 'Белорусь',
            'country_Armenia': 'Армения',
            'country_Turkmenistan' : 'Туркменистан',
            'country_Azer' : 'Азербайджан',
            'country_Uzbek' : 'Узбекистан',

            'city_Moscow':'Москва',
            'city_Yaroslavl':'Ярославль',
            'city_Tula': 'Тула',
            
            'city_Astana':'Астана',
            'city_Almaty':'Алматы',

            'karaganda':'Караганда',
            'map_name':'Караганда — Яндекс Карты',
              //Contact galllery component 
              'contactGallery_header':'Группа продаж',
              'country':'Страна: ',
              'menager':'Менеджер по: ',
          }
        }
    },
    lng: "ru", // устанавливаем начальный язык
    fallbackLng: "ru",
    interpolation: { escapeValue: false }
});

export default i18n;