import React from "react";
import Styles from './OrderForm.module.css';

const OrderForm = () => {
    return(
        <>
            <section className={Styles.form__container_section}>
                <div className={Styles.borders}>
                    <div className={Styles.form__container}>
                        <form>
                            <div className={Styles.form__container_bg}>
                                <div className={Styles.form__container_paddings}>
                                    <div className={Styles.form__borders}>
                                        <div className={Styles.form__text_container}>
                                            <p className={`${Styles.flowerLogoWhite} flowerLogo`}>Flower Fraught Karaganda</p>
                                            <h1 className={Styles.form__text_header}>Заказать звонок</h1>
                                            <p className={`${Styles.form_textWhite} text_normal_itallic`}>Закажите звонок и наш менеджер свяжется с вами в близжайшее время</p>
                                        </div>
                                        <div className={Styles.form__container_inputs}>
                                            <input type="text" placeholder="Имя"></input>
                                        </div>
                                        <div>
                                            <input type="phone" placeholder="Номер телефона"/>
                                        </div>

                                        <div>
                                            <input type="checkbox"/>
                                            <label className="text_normal_itallic">Даю согласие на обработку <span>персональных данных</span></label>
                                        </div>
                                        <div className={Styles.form__container_button}>
                                            <button className="text_button">Заказать звонок</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div className={Styles.form__pict_container}>
                            <div className={Styles.pict1}></div>
                            <div className={Styles.pict2}></div>
                        </div> 
                    </div>
                </div>
            </section>
        </>
    )
}
export default OrderForm;