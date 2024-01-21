import React from "react";
import calendar from '../../assets/images/Calendar.svg';
import weight from '../../assets/images/Weight.svg';
import paper from '../../assets/images/Paper.svg';
import airplane from '../../assets/images/Airplane.svg';
import temperature from '../../assets/images/Temperature.svg';
import smile from '../../assets/images/Smile.svg';
import Styles from './Number.module.css';
import BGDesktop from '../../assets/images/NumberSectionBG_desktop.svg';
import BGLaptop  from '../../assets/images/NumberSectionBG_laptop.svg';
import BGMobile from '../../assets/images/NumberSectionBG_mobile.svg';
// import { useSelector} from 'react-redux';
// import { RootState } from '../../state/store';

const Numbers: React.FC = () => {
    // const headerStateValue = useSelector((state: RootState)=>state.headerMenuState.value);

    return (
        <>
            {/* <section id='About_us' className={headerStateValue ? `sm:hidden min-h-screen ${Styles.section_hidden}` : Styles.main__section} > */}
            <section id='About_us' className={Styles.main__section}>
                <div className={Styles.border__container}>
                    <picture className={Styles.section__info_bg}>
                        {/* <source media="(max-width: 650px)" srcSet={BGMobile}/>
                        <source media="(min-width: 650px) and (max-width: 1300px)" srcSet={BGLaptop}/>
                        <source media="(min-width: 1301px)" srcSet={BGDesktop}/> */}
                        {/* <img src={BGLaptop} alt="map on background"/> */}
                    </picture>
                {/* "flex items-center justify-center flex-col py-[60px]" */}
                <div className={Styles.container_numberSection}>
                <div className={Styles.section__info}>
                    <div className={Styles.section__info_textContainer}>
                        <p className="flowerLogo">Flower Fracht Karaganda</p>
                        <h1 className={Styles.header__section_name}>О нас в цифрах</h1>
                    </div>
                    
                    <div className={Styles.container__section}>
                        {/* CALENDAR */}
                        <div className={Styles.one_section}>
                            <img src={calendar} alt="calendar_icon" className="" />
                            <div className={Styles.section__info_container}>
                                <h2 className={Styles.section__info_name}>7 лет</h2>
                                <p className={Styles.section__info_text}>Успешно работаем уже более семи лет</p>
                            </div>
                        </div>
                        {/* WEIGHT */}
                        <div className={Styles.one_section}>
                            <img src={weight} alt="calendar_icon" className="" />
                            <div className="section__info_container">
                                <h2 className={Styles.section__info_name}>775 тонн</h2>
                                <p className={Styles.section__info_text}>Мы перевезли почти 780 тонн груза</p>
                            </div>
                        </div>
                        {/* PERSENT */}
                        <div className={Styles.one_section}>
                            <img src={paper} alt="calendar_icon" className="" />
                            <div className="section__info_container">
                                <h2 className={Styles.section__info_name}>94 %</h2>
                                <p className={Styles.section__info_text}>Средний процент выполнения заказа 94%</p>
                            </div>
                        </div>
                        {/* PLANE */}
                        <div className={Styles.one_section}>
                            <img src={airplane} alt="calendar_icon" className="" />
                            <div className="section__info_container">
                                <h2 className={Styles.section__info_name}>14 стран</h2>
                                <p className={Styles.section__info_text}>Осуществляем перевозки из 14 стран</p>
                            </div>
                        </div>
                        {/* TEMPERATURE */}
                        <div className={Styles.one_section}>
                            <img src={temperature} alt="calendar_icon" className="" />
                            <div className="section__info_container">
                                <h2 className={Styles.section__info_name}>+2/8 градуса</h2>
                                <p className={Styles.section__info_text}>Соблюдение температур при перевозке</p>
                            </div>
                        </div>
                        {/* CLIENTS */}
                        <div className={Styles.one_section}>
                            <img src={smile} alt="calendar_icon" className="" />
                            <div className="section__info_container">
                                <h2 className={Styles.section__info_name}>174 клиента</h2>
                                <p className={Styles.section__info_text}>С нами работают 174 корпорации, а также тысячи людей по всему миру</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                </div>
            </section>
        </>
    )
}
export default Numbers;