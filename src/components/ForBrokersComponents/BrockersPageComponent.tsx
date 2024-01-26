import React from "react";
import Styles from './BrockersPage.module.css';
import Way from '../../assets/images/BrockersPageWay.svg';

const BrockersPageComponent = () => {
    return(
        <>
            <section className={Styles.brocker__content}>
            <div className={Styles.brocker__content_bg}></div>
            <section className={Styles.brocker__content_section}>
                <div className={Styles.brocker__content_borders}>
                    <div className={Styles.brocker__content_container}>
                        <h2 className={Styles.brocker__content_header}>Помогаем брокерам из любых стан с доставкой цветов по всему СНГ</h2>
                        <div className={Styles.brocker__content_positioning}>
                            <img src={Way} alt="way for brockers" className={Styles.brocker__content_image}/>
                            <div className={Styles.brocker__content_gallery}>
                                <div className={Styles.brocker__content_gallery_element}>
                                    <div className={Styles.brocker__content_gallery_element_text}>
                                        <h3 className={Styles.brocker__content_gallery_element_header}>1 шаг</h3>
                                        <p className={Styles.brocker__content_gallery_element_paragraph}>Клиент обращается/работает с брокером</p>
                                    </div>
                                    <p className={Styles.brocker__content_gallery_element_number}>01</p>
                                </div>

                                <div className={Styles.brocker__content_gallery_element}>
                                    <div className={Styles.brocker__content_gallery_element_text}>
                                        <h3 className={Styles.brocker__content_gallery_element_header}>2 шаг</h3>
                                        <p className={Styles.brocker__content_gallery_element_paragraph}>Клиент делает заказ</p>
                                    </div>
                                    <p className={Styles.brocker__content_gallery_element_number}>02</p>
                                </div>

                                <div className={Styles.brocker__content_gallery_element}>
                                    <div className={Styles.brocker__content_gallery_element_text}>
                                        <h3 className={Styles.brocker__content_gallery_element_header}>3 шаг</h3>
                                        <p className={Styles.brocker__content_gallery_element_paragraph}>Брокер передает груз клиента в нашу компанию для поставки</p>
                                    </div>
                                    <p className={Styles.brocker__content_gallery_element_number}>03</p>
                                </div>

                                <div className={Styles.brocker__content_gallery_element}>
                                    <div className={Styles.brocker__content_gallery_element_text}>
                                        <h3 className={Styles.brocker__content_gallery_element_header}>4 шаг</h3>
                                        <p className={Styles.brocker__content_gallery_element_paragraph}>Осуществляем доставку клиенту заказа брокером до двери</p>
                                    </div>
                                    <p className={Styles.brocker__content_gallery_element_number}>04</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </section>
                <div className={Styles.brocker__content_bg_down}></div>
            </section>
        </>
    )
}
export default BrockersPageComponent;