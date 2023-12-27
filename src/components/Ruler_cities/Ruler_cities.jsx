import React from 'react';
import Styles from './Ruler_cities.module.css'


export default function Ruler_cities (){

    return(
        <>
        <div className='w-full h-fit flex justify-center'>
            <div className={Styles.ruler_container}>
                <div className={Styles.ruler__container_block}>
                    <hr className={`
                        h-[20px]
                        ${Styles.ruler_line}`}></hr>
                    <p className={Styles.ruler_text}>ECUADOR</p>
                </div>
                <div className='w-[30px] h-[30px]'>

                </div>
                <div className={Styles.ruler__container_block}>
                    
                    <hr className={`
                        h-[20px]
                        ${Styles.ruler_line}`}></hr>
                    <p className={Styles.ruler_text}>BL</p>
                </div>
                <div className={Styles.ruler__container_block}> 
                    <hr className={`
                        h-[20px]
                        ${Styles.ruler_line}`}></hr>
                    <p className={Styles.ruler_text}>KZ</p>
                </div>
                <div className={Styles.ruler__container_block}>
                    <hr className={`
                        h-[20px]
                        ${Styles.ruler_line}`}></hr>
                    <p className={Styles.ruler_text}>UK</p>
                </div>
                <div className={Styles.ruler__container_block}>
                    <hr className={`
                        h-[20px]
                        ${Styles.ruler_line}`}></hr>
                    <p className={Styles.ruler_text}>UKR</p>
                </div >
                <div className={Styles.ruler__container_block}>
                    <hr className={`
                        h-[20px]
                        ${Styles.ruler_line}`}></hr>
                    <p className={Styles.ruler_text}>ISR</p>
                </div>
            </div>
            </div>
        </>
    )
}