import React from "react";
import Styles from './Tariff.module.css';
import Airplane from '../../assets/images/Airplane.svg'

const Tariff = () =>{
    return(
        <>
        <div className={Styles.separate_line}></div>
            <section className={Styles.tariff__container_section}>
                <div className={Styles.tariff__container}>
                    <p className={Styles.tariff__name}>flower fraught karaganda</p>
                    <h1 className={Styles.tariff__header_name}>Основные тарифы</h1>
                    <div className={Styles.tariff__gallery}>
                        <div className={Styles.tariff__gallery_element}>
                            <div className={Styles.tariff__gallery_elementInfo}>
                                <img  className={Styles.tariff__gallery_icon} src={Airplane} alt="first tariff"/>
                                <div className={Styles.tariff__gallery_text_section}>
                                    <h3 className={Styles.tariff__gallery_header}>от <span className={Styles.tariff__gallery_header_bold}>5.7$/1кг</span></h3>
                                    <p className={Styles.tariff__gallery_text}>Эквадор, Кения, Колумбия</p>
                                    <small className={Styles.tariff__small_text}>Доставка заказа осуществляется до двери</small>
                                </div>
                            </div>
                        </div>
                        <div className={Styles.tariff__makePrice}>
                            <div className={Styles.tariff__button_container}>
                                <button className={Styles.tariff__dowland_button}>Скачать прайс</button>
                            </div>
                        </div>
                        
                        <div className={Styles.tariff__gallery_element}>
                            <div className={Styles.tariff__gallery_elementInfo}>
                                <img  className={Styles.tariff__gallery_icon} src={Airplane} alt="first tariff"/>
                                <div className={Styles.tariff__gallery_text_section}>
                                    <h3 className={Styles.tariff__gallery_header}>от <span className={Styles.tariff__gallery_header_bold}>3.6$/1кг</span></h3>
                                    <p className={Styles.tariff__gallery_text}>Голландия</p>
                                    <small className={Styles.tariff__small_text}>Доставка заказа осуществляется до двери</small>
                                </div>
                            </div>
                        </div>

                        <div className={Styles.tariff__gallery_element}>
                            <div className={Styles.tariff__gallery_elementInfo}>
                                <img  className={Styles.tariff__gallery_icon} src={Airplane} alt="first tariff"/>
                                <div className={Styles.tariff__gallery_text_section}>
                                    <h3 className={Styles.tariff__gallery_header}>от <span className={Styles.tariff__gallery_header_bold}>4.8$/1кг</span></h3>
                                    <p className={Styles.tariff__gallery_text}>Испания, Чили</p>
                                    <small className={Styles.tariff__small_text}>Доставка заказа осуществляется до двери</small>
                                </div>
                            </div>
                        </div>

                        <div className={Styles.tariff__gallery_element}>
                            <div className={Styles.tariff__gallery_elementInfo}>
                                <img  className={Styles.tariff__gallery_icon} src={Airplane} alt="first tariff"/>
                                <div className={Styles.tariff__gallery_text_section}>
                                    <h3 className={Styles.tariff__gallery_header}>от <span className={Styles.tariff__gallery_header_bold}>6.3$/1кг</span></h3>
                                    <p className={Styles.tariff__gallery_text}>Израиль</p>
                                    <small className={Styles.tariff__small_text}>Доставка заказа осуществляется до двери</small>
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