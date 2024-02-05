import React , {useState,useEffect} from "react";
import Styles from './ContactsSalesGroup.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../../state/store';
import { useTranslation } from 'react-i18next';
interface CountriesAndCities {
    [key: string]: string[];
  }
  
const ContactsSalesGroup = () =>{
    const [arrowClass, setArrowClass] = useState(Styles.arrow_up);
    const [country, setCountry] = useState('country_Russia');
    const [isMenuCountryVisible, setIsMenuCountryVisible] = useState(false);
    const [isMenuCityVisible, setIsMenuCityVisible] = useState(false);
    const [city, setCity] = useState('city_Moscow');
    const countriesAndCities: CountriesAndCities = {
        'country_Russia': ['city_Moscow', 'city_Yaroslavl', 'city_Tula'],
        'country_Kz': ['city_Astana', 'city_Almaty']
    };

    const { t, i18n } = useTranslation();
    const langState = useSelector((state: RootState) => state.LangStateReducer.language);

    useEffect(() => {
        i18n.changeLanguage(langState);
        // Сбросить выбранный город при смене страны
        setCity(countriesAndCities[country][0]);
    }, [langState, i18n, country]);

    const toggleCountryArrow = () => {
        setIsMenuCountryVisible(!isMenuCountryVisible);
        setArrowClass(arrowClass === Styles.arrow_up ? Styles.arrow_down : Styles.arrow_up);
    };
    const toggleCityArrow = () => {
        setIsMenuCityVisible(!isMenuCityVisible);
        setArrowClass(arrowClass === Styles.arrow_up ? Styles.arrow_down : Styles.arrow_up);
    };

    // Обработчики для выбора страны, сохраняем ключи перевода в состояние
    const handleSetCountry = (key : string) => {
        setCountry(key);
        setIsMenuCountryVisible(!isMenuCountryVisible);
    };
    const handleSetCity= (key : string) => {
        setCity(key);
        setIsMenuCityVisible(!isMenuCityVisible);
    };
    const cityButtons = countriesAndCities[country].map((cityKey) => (
        <button key={cityKey} className={Styles.button__country_menu_element} onClick={() => handleSetCity(cityKey)}>{t(cityKey)}</button>
    ));
    return(
        <>
        <section className={Styles.contacts__content}>
            <div className={Styles.contacts__content_bg}></div>
            <section className={Styles.contacts__content_section}>
                <div className={Styles.contacts__content_borders}>
                    <div className={Styles.contacts__content_container}>
                        <div className={Styles.contact_header}>
                            <p className={`flowerLogo ${Styles.contactsGroup__text}`}>Flower Fracht Karaganda</p>
                            <h1 className={Styles.contactsGroup__header}>Группы продаж</h1>
                        </div>
                        <div className={Styles.contacts_container_inputs}>
                            <div className={Styles.contacts__container_element}>
                                <p className={Styles.contacts__inputs_paragraph}>Страна:</p>
                                <div className="relative">
                                    <div className="flex gap-[10px]">
                                        <p className="">{t(country)}</p>
                                        <div className=' sm:pr-[1%]'>
                                            <button id='useref' className={Styles.button} onClick={toggleCountryArrow}> 
                                                <div className={arrowClass}></div>
                                            </button>
                                        </div>
                                    </div>
                                    <div className={`${Styles.countryMenu} ${isMenuCountryVisible ? 'block' : Styles.countryMenu__hidden}`}>
                                        <button className={Styles.button__country_menu_element} onClick={() => handleSetCountry('country_Russia')}>{t('country_Russia')}</button>
                                        <button className={Styles.button__country_menu_element} onClick={() => handleSetCountry('country_Kz')}>{t('country_Kz')}</button>
                                    </div>
                                </div>
                            </div>
                            <div className={Styles.contacts__container_element}>
                                <p className={Styles.contacts__inputs_paragraph}>Менеджер по:</p>
                                <div className="relative">
                                    <div className="flex gap-[10px]">
                                        <p className="">{t(city)}</p>
                                        <div className=' sm:pr-[1%]'>
                                            <button id='useref' className={Styles.button} onClick={toggleCityArrow}> 
                                                <div className={arrowClass}></div>
                                            </button>
                                        </div>
                                    </div>
                                    <div className={`${Styles.countryMenu} ${isMenuCityVisible ? 'block' : Styles.countryMenu__hidden}`}>
                                            {cityButtons}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={Styles.contacts__list}>

                        </div>
                    </div>
                </div>
                </section>
            </section>
        </>
    )
}
export default ContactsSalesGroup;