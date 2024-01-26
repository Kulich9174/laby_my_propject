import React from "react";
import Style from './ErrorPage.module.css';
import button_corner_left from '../../assets/images/left_button_corner.svg';
import button_corner_right from '../../assets/images/right_button_corner.svg';

const ErrorPage = () => {
    return(
        <>
            <section className={Style.error__section_bg}>
                <div className={Style.error__container_div}>
                    <div className={Style.error__border}>
                        <p className={Style.error__paragraph}>Ошибка</p>
                        <h1 className={Style.error__header}>404</h1>
                        <p className={Style.error__text}>К сожалению страница не найдена, скорее всего она была удалена.</p>
                        <span className={Style.error__text_bold}>Рекомендуем вернуться на главную.</span>
                        
                        <button className={Style.error__button_container}>
                            <div className={Style.error__button_input}>
                                <img src={button_corner_left} alt="left corner" className={Style.error__button_leftCorner}/>
                                <p className={Style.error__button_text}>Главная</p>
                                <img src={button_corner_right} alt="right corner" className={Style.error__button_rightCorner}/>
                            </div>
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}
export {ErrorPage};