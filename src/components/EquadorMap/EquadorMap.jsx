import React from 'react';
import Styles from './Equador.module.css';
import location_icon from '../../assets/images/Location_icon.svg';


export default function EquadorMap (){

    return(
        <>
        <div className={Styles.equador__map}>
            <div className={Styles.countainer}>
                <img src={location_icon} className={Styles.location_icon}alt='location_icon'/>
                <p className={`${Styles.text_bold} font-medium uppercase z-10`}>Equador</p>
                <p className={Styles.text}>Стоимость доставки 1 фулбокса <span className={Styles.text_bold}>от 105 $</span></p>
            </div>
        
        </div>
        </>
    )
}