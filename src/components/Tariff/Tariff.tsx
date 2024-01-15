import React from "react";
import Styles from './Tariff.module.css';
import Airplane from '../../assets/images/Airplane.svg'

const Tariff = () =>{
    return(
        <>
            <section className={Styles.tariff__container_section}>
                <div className={Styles.tariff__container}>
                    <p className={Styles.tariff__name}>flower fraught karaganda</p>
                    <h1 className={Styles.tariff__header_name}>Основные тарифы</h1>
                    <div className={Styles.tariff__gallery}>
                        <div className={Styles.tariff__gallery_element}>
                            <div className={Styles.tariff__gallery_elementInfo}>
                                <img  className={Styles.tariff__gallery_icon} src={Airplane} alt="first tariff"/>
                                <div className={Styles.tariff__gallery_text_section}>
                                    <h3 className={Styles.tariff__gallery_header}>от 5.7$/1кг</h3>
                                    <p className={Styles.tariff__gallery_text}>Колумбия,Эквадор,Кения</p>
                                </div>
                            </div>
                            <small>Доставка заказа осуществляется до двери</small>
                        </div>
                        <div className={Styles.tariff__makePrice}>
                            <button>Скачать прайс</button>
                        </div>
                        
                    </div>
                </div>
            </section>
        </>
    )
}

export default Tariff;