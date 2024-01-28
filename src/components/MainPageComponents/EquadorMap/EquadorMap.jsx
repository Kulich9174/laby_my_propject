import React from 'react';
import Styles from './Equador.module.css';
import location_icon from '../../../assets/images/Location_icon.svg';
import { useTranslation } from 'react-i18next';
import '../../../Translation/Translation';

export default function EquadorMap (){
    const { t } = useTranslation();
    return(
        <>
        <div className={Styles.equador__map}>
            <div className={Styles.countainer}>
                <img src={location_icon} className={Styles.location_icon}alt='location_icon'/>
                <p className={`${Styles.text_bold} font-medium uppercase z-10`}>Equador</p>
                <p className={Styles.text}>{t('equador_text')} <span className={Styles.text_bold}>{t('equador_span')}</span></p>
            </div>
        
        </div>
        </>
    )
}