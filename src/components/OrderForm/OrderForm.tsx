import React from "react";
import Styles from './OrderForm.module.css';

const OrderForm = () => {
    return(
        <>
            <section className={Styles.form__conteiner_section}>
                <div className={Styles.form__borders}>
                    <form>
                        <div>
                            <p className={`${Styles.flowerLogoWhite} flowerLogo`}>Flower Fraught Karaganda</p>
                            <h1>Заказать звонок</h1>
                            <p>Закажите звонок и наш менеджер свяжется с вами в близжайшее время</p>
                        </div>
                        <div>
                            <input type="text" placeholder="Имя"></input>
                        </div>
                        <div>
                            <input type="phone" placeholder="Номер телефона"/>
                        </div>

                        <div>
                            <input type="checkbox"/>
                            <label>Даю согласие на обработку <span>персональных данных</span></label>
                        </div>
                        <div>
                            <button>Заказать звонок</button>
                        </div>
                    </form>
                    <div className={Styles.form__pict_container}>
                        <picture>

                        </picture>

                        <picture>
                            
                        </picture>
                    </div>
                </div>
            </section>
        </>
    )
}
export default OrderForm;