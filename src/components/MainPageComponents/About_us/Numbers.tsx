import React from "react";
import calendar from '../../../assets/images/Calendar.svg';
import weight from '../../../assets/images/Weight.svg';
import paper from '../../../assets/images/Paper.svg';
import airplane from '../../../assets/images/Airplane.svg';
import temperature from '../../../assets/images/Temperature.svg';
import smile from '../../../assets/images/Smile.svg';
import Styles from './Number.module.css';
import { useTranslation } from 'react-i18next';
import '../../../Translation/Translation';

const Numbers: React.FC = () => {
    const { t } = useTranslation();

    return (
        <>
            <section id='About_us' className={Styles.main__section}>
                <div className={Styles.border__container}>
                    <picture className={Styles.section__info_bg}>
                        {/* <source media="(max-width: 650px)" srcSet={BGMobile}/>
                        <source media="(min-width: 650px) and (max-width: 1300px)" srcSet={BGLaptop}/>
                        <source media="(min-width: 1301px)" srcSet={BGDesktop}/> */}
                        {/* <img src={BGLaptop} alt="map on background"/> */}
                    </picture>
                <div className={Styles.container_numberSection}>
                <div className={Styles.section__info}>
                    <div className={Styles.section__info_textContainer}>
                        <p className="flowerLogo">Flower Fracht Karaganda</p>
                        <h1 className={Styles.header__section_name}>{t('about_us_header')}</h1>
                    </div>
                    
                    <div className={Styles.container__section}>
                        {/* CALENDAR */}
                        <div className={Styles.one_section}>
                            <img src={calendar} alt="calendar_icon" className="" />
                            <div className={Styles.section__info_container}>
                                <h2 className={Styles.section__info_name}>{t('aboutUs_block_header1')}</h2>
                                <p className={Styles.section__info_text}>{t('aboutUs_block_text1')}</p>
                            </div>
                        </div>
                        {/* WEIGHT */}
                        <div className={Styles.one_section}>
                            <img src={weight} alt="calendar_icon" className="" />
                            <div className="section__info_container">
                                <h2 className={Styles.section__info_name}>{t('aboutUs_block_header2')}</h2>
                                <p className={Styles.section__info_text}>{t('aboutUs_block_text2')}</p>
                            </div>
                        </div>
                        {/* PERSENT */}
                        <div className={Styles.one_section}>
                            <img src={paper} alt="calendar_icon" className="" />
                            <div className="section__info_container">
                                <h2 className={Styles.section__info_name}>{t('aboutUs_block_header3')}</h2>
                                <p className={Styles.section__info_text}>{t('aboutUs_block_text3')}</p>
                            </div>
                        </div>
                        {/* PLANE */}
                        <div className={Styles.one_section}>
                            <img src={airplane} alt="calendar_icon" className="" />
                            <div className="section__info_container">
                                <h2 className={Styles.section__info_name}>{t('aboutUs_block_header4')}</h2>
                                <p className={Styles.section__info_text}>{t('aboutUs_block_text4')}</p>
                            </div>
                        </div>
                        {/* TEMPERATURE */}
                        <div className={Styles.one_section}>
                            <img src={temperature} alt="calendar_icon" className="" />
                            <div className="section__info_container">
                                <h2 className={Styles.section__info_name}>{t('aboutUs_block_header5')}</h2>
                                <p className={Styles.section__info_text}>{t('aboutUs_block_text5')}</p>
                            </div>
                        </div>
                        {/* CLIENTS */}
                        <div className={Styles.one_section}>
                            <img src={smile} alt="calendar_icon" className="" />
                            <div className="section__info_container">
                                <h2 className={Styles.section__info_name}>{t('aboutUs_block_header5')}</h2>
                                <p className={Styles.section__info_text}>{t('aboutUs_block_text5')}</p>
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