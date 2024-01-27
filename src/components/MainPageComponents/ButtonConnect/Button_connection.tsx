import React from 'react';
import Styles from './Button.module.css';


export default function Button (){
    
    return(
        <>
        <button className={Styles.button_size}>
            <div className={Styles.button_input}>
                <div className={Styles.border_top}></div>
                <p className={Styles.button_text}>Связаться с нами</p>
                <div className={Styles.border_bottom}></div>
            </div>
        </button>
        </>
    )
}