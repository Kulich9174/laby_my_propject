import React from 'react';
import Styles from './Button.module.css';
import { useTranslation } from 'react-i18next';
import '../../../Translation/Translation';

export default function Button (){
    const { t } = useTranslation();

    return(
        <>
        <button className={Styles.button_size}>
            <div className={Styles.button_input}>
                <div className={Styles.border_top}></div>
                <p className={Styles.button_text}>{t('contact_us')}</p>
                <div className={Styles.border_bottom}></div>
            </div>
        </button>
        </>
    )
}