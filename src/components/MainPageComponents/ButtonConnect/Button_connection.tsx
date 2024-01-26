import React from 'react';
import Styles from './Button.module.css';
import button_corner_left from '../../../assets/images/left_button_corner.svg';
import button_corner_right from '../../../assets/images/right_button_corner.svg';

export default function Button (){

    return(
        <>
        <button className={Styles.button_size}>
            <div className={Styles.button_input}>
                {/* <img src={button_corner_left} alt="left corner" className={Styles.button_leftCorner}/> */}
                <p className={Styles.button_text}>Связаться с нами</p>
                {/* <img src={button_corner_right} alt="right corner" className={Styles.button_rightCorner}/> */}
            </div>
        </button>
        </>
    )
}