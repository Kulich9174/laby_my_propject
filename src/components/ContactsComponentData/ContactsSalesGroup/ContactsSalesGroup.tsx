import React , {useState,useEffect} from "react";
import Styles from './ContactsSalesGroup.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../../state/store';
import { useTranslation } from 'react-i18next';

import { TContact } from "../../../type/contactType";
import {contactOfUserMoscow} from '../../../data/data';
import {contactOfUserTula, contactOfUserYaroslavl, contactOfUserAstana, contactOfUserAlmaty} from '../../../data/data';

import Phone from '../../../assets/images/Phone_icon.svg';
import Mail from '../../../assets/images/Mail_icon.svg';
import ArrowRight from '../../../assets/images/RightNotActive.svg';
import ArrowLeft from '../../../assets/images/LeftNotActive.svg';
import ArrowLeftActive from '../../../assets/images/Left.svg';
import ArrowRightActive from '../../../assets/images/Right.svg';
interface CountriesAndCities {
    [key: string]: string[];
}

const ContactsSalesGroup = () =>{
    const [arrowCityClass, setArrowCityClass] = useState(Styles.arrow_up);
    const [arrowCountryClass, setArrowCountryClass] = useState(Styles.arrow_up);

    const [country, setCountry] = useState('country_Russia');
    const [city, setCity] = useState('city_Moscow');

    const contactsByCity: Record<string, TContact[]> = {
        city_Moscow: contactOfUserMoscow,
        city_Tula: contactOfUserTula,
        city_Yaroslavl : contactOfUserYaroslavl,
        city_Astana : contactOfUserAstana,
        city_Almaty : contactOfUserAlmaty
        // Добавьте другие города и их контакты здесь
    };
    const selectedContacts = contactsByCity[city] || [];

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
        setCurrentIndex(0);
    };
    const handleSetCity= (key : string) => {
        setCity(key);
        setIsMenuCityVisible(!isMenuCityVisible);
        setCurrentIndex(0);
    };
    const cityButtons = countriesAndCities[country].map((cityKey) => (
        <button key={cityKey} className={Styles.button__country_menu_element} onClick={() => handleSetCity(cityKey)}>{t(cityKey)}</button>
    ));

    //стрелки и сколл
    const [isLeftActive, setIsLeftActive] = useState(false);
    const [isRightActive, setIsRightActive] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const handleNext = () => {
        // Убедимся, что индекс не выйдет за пределы массива
        if (currentIndex + 2 < selectedContacts.length) {
            setCurrentIndex(currentIndex + 2);
        }
    };
    const handlePrev = () => {
        if (currentIndex - 2 >= 0) {
            setCurrentIndex(currentIndex - 2);
        }
    };
    // let i=0;

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
                                    <div className={`${isMenuCountryVisible ? `block ${Styles.countryMenu}` : `hidden invisible ${Styles.countryMenu__hidden}`}`}>
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
                                    <div className={`${isMenuCityVisible ? `block ${Styles.countryMenu}` : `hidden invisible ${Styles.countryMenu__hidden}`}`}>
                                            {cityButtons}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </section>
                <section className={Styles.contacts__content_section2}>
                    <div className={Styles.contacts__content_borders2}>
                        <div className={Styles.contacts__content_container}>
                            <div className={`no-scrollbar ${Styles.contacts__list}`}>
                                {selectedContacts.slice(currentIndex, currentIndex + 2).map(contact => (
                                    <div  key={contact.id} className={Styles.contacts__list_container}>
                                        <div className={Styles.contacts__list_element}>
                                            <div className="flex items-center justify-center">
                                                <img src={contact.photo} alt={contact.name} className={Styles.contacts__photo}/>
                                            </div>
                                            
                                            <div className={Styles.contacts__list_container_info}>
                                                <h2 className={Styles.contacts__name}>{contact.name}</h2>
                                                <p className={Styles.contacts__description}>{contact.post}</p>
                                                <div className={Styles.contacts__list_container_text}>
                                                    <div className={Styles.contacts__phone}>
                                                        <div className="flex gap-2">
                                                            <img src={Phone}/>
                                                            <p className={Styles.contacts__phone_text}>{contact.phoneNumber}</p>
                                                        </div>
                                                        {/* <div className="flex gap-2">
                                                            <img src={Phone} className={Styles.contacts__phone_icon}/>
                                                            <p className={Styles.contacts__phone_text}>+7 (495) 737 8282</p>
                                                        </div> */}
                                                    </div>
                                                    
                                                    <div className="flex gap-2">
                                                        <img src={Mail}/>
                                                        <p className={Styles.contacts__mail_text}>{contact.mail}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                             <div className={Styles.arrowsBottom_container}>  
                                <button
                                onMouseEnter={() => setIsLeftActive(true)}
                                onMouseLeave={() => setIsLeftActive(false)}
                                onMouseDown={() => setIsLeftActive(true)}
                                onMouseUp={() => setIsLeftActive(false)}
                                onClick={handlePrev}
                                >
                                    <img src={isLeftActive ? ArrowLeftActive : ArrowLeft} alt="Left Arrow"/>
                                </button>
                                    <div className={Styles.contact__container_pages}>
                                    {
                                        // Создаем массив с нужным количеством элементов и итерируем его для отрисовки иконок
                                        [...Array(Math.ceil(selectedContacts.length / 2)).keys()].map((el) => (
                                            <div key={el}>
                                                {/* Здесь можно отрисовать иконку */}
                                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect opacity="0.12" width="14" height="14" fill="#227CE4"/>
                                                </svg>
                                            </div>
                                        ))
                                    }
                                    </div>
                                <button
                                    onMouseEnter={() => setIsRightActive(true)}
                                    onMouseLeave={() => setIsRightActive(false)}
                                    onMouseDown={() => setIsRightActive(true)}
                                    onMouseUp={() => setIsRightActive(false)}
                                    onClick={handleNext}
                                >
                                    <img src={isRightActive ? ArrowRightActive : ArrowRight} alt="Right Arrow"/>
                                </button>
                            </div> 
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}
export default ContactsSalesGroup;