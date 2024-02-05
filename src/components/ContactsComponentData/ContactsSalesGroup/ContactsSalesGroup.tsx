import React , {useState,useEffect} from "react";
import Styles from './ContactsSalesGroup.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../../state/store';
import { useTranslation } from 'react-i18next';

import Phone from '../../../assets/images/Phone_icon.svg';
import Mail from '../../../assets/images/Mail_icon.svg';
import Oleg from '../../../assets/images/OlegPhoto.png';

interface CountriesAndCities {
    [key: string]: string[];
  }
  
const ContactsSalesGroup = () =>{
    const [arrowCityClass, setArrowCityClass] = useState(Styles.arrow_up);
    const [arrowCountryClass, setArrowCountryClass] = useState(Styles.arrow_up);

    const [country, setCountry] = useState('country_Russia');
    const [city, setCity] = useState('city_Moscow');

    const [isMenuCountryVisible, setIsMenuCountryVisible] = useState(false);
    const [isMenuCityVisible, setIsMenuCityVisible] = useState(false);
   
    const countriesAndCities: CountriesAndCities = {
        'country_Russia': ['city_Moscow', 'city_Yaroslavl', 'city_Tula'],
        'country_Kz': ['city_Astana', 'city_Almaty']
    };

    const { t, i18n } = useTranslation();
    const langState = useSelector((state: RootState) => state.LangStateReducer.language);

    useEffect(() => {
        console.log(city, country);
        i18n.changeLanguage(langState);
        // Сбросить выбранный город при смене страны
        setCity(countriesAndCities[country][0]);
    }, [langState, i18n, country]);

    const toggleCountryArrow = () => {
        setIsMenuCountryVisible(!isMenuCountryVisible);
        setArrowCountryClass(arrowCountryClass === Styles.arrow_up ? Styles.arrow_down : Styles.arrow_up);
    };
    const toggleCityArrow = () => {
        setIsMenuCityVisible(!isMenuCityVisible);
        setArrowCityClass(arrowCityClass === Styles.arrow_up ? Styles.arrow_down : Styles.arrow_up);
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
                                                <div className={arrowCountryClass}></div>
                                            </button>
                                        </div>
                                    </div>
                                    <div className={`${Styles.countryMenu} ${isMenuCountryVisible ? 'block' : `hidden invisible ${Styles.countryMenu__hidden}`}`}>
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
                                                <div className={arrowCityClass}></div>
                                            </button>
                                        </div>
                                    </div>
                                    <div className={`${Styles.countryMenu} ${isMenuCityVisible ? 'block' : `hidden invisible ${Styles.countryMenu__hidden}`}`}>
                                            {cityButtons}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={Styles.contacts__list}>
                            <div className={Styles.contacts__list_container}>
                                <div className="flex items-center justify-center px-[2%]">
                                    <img src={Oleg} alt="Oleg's photo" className={Styles.contacts__photo}/>
                                </div>
                                
                                <div className={Styles.contacts__list_container_info}>
                                    <h2 className={Styles.contacts__name}>Милич Олег</h2>
                                    <p className={Styles.contacts__description}>Руководитель направления продаж в Москве и Моской области</p>
                                    <div className={Styles.contacts__list_container_text}>
                                        <div>
                                            <div className="flex gap-2">
                                                <img src={Phone}/>
                                                <p className={Styles.contacts__phone_text}>+7 (495) 737 8585</p>
                                            </div>
                                            <div className="flex gap-2">
                                                <img src={Phone}/>
                                                <p className={Styles.contacts__phone_text}>+7 (495) 737 8282</p>
                                            </div>
                                        </div>
                                        
                                        <div className="flex gap-2">
                                            <img src={Mail}/>
                                            <p className={Styles.contacts__mail_text}>ffkaragandainfo@info.ru</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </section>
            </section>
        </>
    )
}
export default ContactsSalesGroup;