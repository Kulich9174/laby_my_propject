import React from "react";
import Style from './ErrorPage.module.css';
// import button_corner_left from '../../assets/images/left_button_corner.svg';
// import button_corner_right from '../../assets/images/right_button_corner.svg';
import { useNavigate } from 'react-router-dom';
import '../../Translation/Translation';
import { useTranslation } from 'react-i18next';

const ErrorPage = () => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate('/'); // Функция перенаправления на главную страницу
    };
    const { t } = useTranslation();
    return(
        <>
            <section className={Style.error__section_bg}>
                <div className={Style.error__container_div}>
                    <div className={Style.error__border}>
                        <p className={Style.error__paragraph}>{t('error_header')}</p>
                        <h1 className={Style.error__header}>404</h1>
                        <p className={Style.error__text}>{t('error_text')}.</p>
                        <span className={Style.error__text_bold}>{t('error_bold')}</span>
                        
                        <button className={Style.button_size} onClick={handleNavigate}>
                            <div className={Style.button_input}>
                                <div className={Style.border_top}></div>
                                    <p className={Style.error__button_text}>{t('main')}</p>
                                <div className={Style.border_bottom}></div>
                            </div>
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}
export {ErrorPage};