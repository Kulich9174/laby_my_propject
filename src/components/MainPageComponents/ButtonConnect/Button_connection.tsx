import React from 'react';
import Styles from './Button.module.css';
import { useTranslation } from 'react-i18next';
import '../../../Translation/Translation';
import { useNavigate } from 'react-router-dom';

export default function Button (){
    const { t } = useTranslation();
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/contacts');
    };

    return(
        <>
        <button className={Styles.button_size} onClick={handleClick}>
            <div className={Styles.button_input}>
                <div className={Styles.border_top}></div>
                <p className={Styles.button_text}>{t('contact_us')}</p>
                <div className={Styles.border_bottom}></div>
            </div>
        </button>
        </>
    )
}