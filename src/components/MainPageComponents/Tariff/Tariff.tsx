import React from "react";
import Styles from './Tariff.module.css';
import Airplane from '../../../assets/images/Airplane.svg';
import { useTranslation } from 'react-i18next';
import '../../../Translation/Translation';

const Tariff = () =>{
    const { t } = useTranslation();
    return(
        <>
        <div className={Styles.separate_line}></div>
            <section className={Styles.tariff__container_section}>
                <div className={Styles.tariff__container}>
                    <p className={`${Styles.tariff__name} flowerLogo`}>flower fraught karaganda</p>
                    <h1 className={Styles.tariff__header_name}>{t('tariff_header')}</h1>
                    <div className={Styles.tariff__gallery}>
                        <div className={Styles.tariff__gallery_element}>
                            <div className={Styles.tariff__gallery_elementInfo}>
                                <img  className={Styles.tariff__gallery_icon} src={Airplane} alt="first tariff"/>
                                <div className={Styles.tariff__gallery_text_section}>
                                    <h3 className={Styles.tariff__gallery_header}>{t('tariff_from')} <span className={Styles.tariff__gallery_header_bold}>{t('tariff_block_header1')}</span></h3>
                                    <p className={Styles.tariff__gallery_text}>{t('tariff_block_text1')}</p>
                                    <small className={Styles.tariff__small_text}>{t('tariff_delivery_home')}</small>
                                </div>
                            </div>
                        </div>
                        <div className={Styles.tariff__makePrice}>
                            <div className={Styles.tariff__button_container}>
                                {/* <button className={Styles.tariff__dowland_button}>Скачать прайс</button> */}
                                <button className={Styles.button_size}>
                                    <div className={Styles.button_input}>
                                        <div className={Styles.border_top}></div>
                                        <p className={Styles.button_text}>{t('tariff_button')}</p>
                                        <div className={Styles.border_bottom}></div>
                                    </div>
                                </button>
                            </div>
                        </div>
                        
                        <div className={Styles.tariff__gallery_element}>
                            <div className={Styles.tariff__gallery_elementInfo}>
                                <img  className={Styles.tariff__gallery_icon} src={Airplane} alt="first tariff"/>
                                <div className={Styles.tariff__gallery_text_section}>
                                    <h3 className={Styles.tariff__gallery_header}>{t('tariff_from')} <span className={Styles.tariff__gallery_header_bold}>{t('tariff_block_header2')}</span></h3>
                                    <p className={Styles.tariff__gallery_text}>{t('tariff_block_text2')}</p>
                                    <small className={Styles.tariff__small_text}>{t('tariff_delivery_home')}</small>
                                </div>
                            </div>
                        </div>

                        <div className={Styles.tariff__gallery_element}>
                            <div className={Styles.tariff__gallery_elementInfo}>
                                <img  className={Styles.tariff__gallery_icon} src={Airplane} alt="first tariff"/>
                                <div className={Styles.tariff__gallery_text_section}>
                                    <h3 className={Styles.tariff__gallery_header}>{t('tariff_from')} <span className={Styles.tariff__gallery_header_bold}>{t('tariff_block_header3')}</span></h3>
                                    <p className={Styles.tariff__gallery_text}>{t('tariff_block_text3')}</p>
                                    <small className={Styles.tariff__small_text}>{t('tariff_delivery_home')}</small>
                                </div>
                            </div>
                        </div>

                        <div className={Styles.tariff__gallery_element}>
                            <div className={Styles.tariff__gallery_elementInfo}>
                                <img  className={Styles.tariff__gallery_icon} src={Airplane} alt="first tariff"/>
                                <div className={Styles.tariff__gallery_text_section}>
                                    <h3 className={Styles.tariff__gallery_header}>{t('tariff_from')} <span className={Styles.tariff__gallery_header_bold}>{t('tariff_block_header4')}</span></h3>
                                    <p className={Styles.tariff__gallery_text}>{t('tariff_block_text4')}</p>
                                    <small className={Styles.tariff__small_text}>{t('tariff_delivery_home')}</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Tariff;