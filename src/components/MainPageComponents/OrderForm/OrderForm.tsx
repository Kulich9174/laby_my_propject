import React, { useEffect } from "react";
import Styles from './OrderForm.module.css';
import { useDispatch } from 'react-redux';
import {changeValue} from '../../../state/AgreementReducer/AgreementReducer';
import { useSelector } from 'react-redux';
import { RootState } from '../../../state/store';
import { addName, addPhone } from "../../../state/FormDataReducer/FormDataReducer";
import { useTranslation } from 'react-i18next';
import '../../../Translation/Translation';

const OrderForm = () => {
    const { t } = useTranslation();
    const chackboxAgreementState = useSelector((state: RootState)=>state.agreementState.value);
    const nameState = useSelector((state: RootState)=>state.formDataStateReducer.name);
    const phoneState = useSelector((state: RootState)=>state.formDataStateReducer.phone);
    const langState = useSelector((state: RootState) => state.LangStateReducer.language);
    const dispatch = useDispatch();

    function changeMenuState (){
        dispatch(changeValue())
    }
    function handleAddName(name: string) {
        dispatch(addName(name));
    }
    function handleAddPhone(phone:string|number){
        dispatch(addPhone(phone));
    }

    useEffect(()=>{
        console.log('Имя', nameState);
        console.log('Телефон', phoneState);
        console.log('язык', langState)
        console.log('Согласие на пользовательсое соглашение',chackboxAgreementState);
    },[chackboxAgreementState,nameState,phoneState])
    return(
        <>
            <section className={Styles.form__container_section}>
                <div className={Styles.borders}>
                    <div className={Styles.form__coneiner_maxwidth}>

                    
                    <div className={Styles.form__container}>
                        <form>
                            <div className={Styles.form__container_bg}>
                                <div className={Styles.form__container_paddings}>
                                    <div className={Styles.form__borders}>
                                        <div className={`sm:pb-[35px] sm:text-center laptop:pb-[50px] laptop:text-center desktop:pb-[60px] ${Styles.form__text_container}`}>
                                            <p className={`${Styles.flowerLogoWhite} flowerLogo`}>Flower Fraught Karaganda</p>
                                            <h1 className={Styles.form__text_header}>{t('form_header')}</h1>
                                            <p className={`${Styles.form_textWhite} text_normal_itallic`}>{t('form_text')}</p>
                                        </div>
                                        <div className={Styles.form__container_inputs}>
                                            <div className={Styles.text_field}>
                                                <input type="text" className={Styles.text_field__input} placeholder={t('form_name')} onChange={e=>{handleAddName(e.target.value)}}></input>
                                            </div>
                                            <div className={Styles.text_field}>
                                                <input type="phone" className={Styles.text_field__input} placeholder={t('form_phone')} onChange={e=>{handleAddPhone(e.target.value)}}/>
                                            </div>
                                        </div>
                                        
                                        <div className={Styles.form__checkboxButton_container}>
                                            <div className={Styles.form__checkbox}>
                                                <input type="checkbox" onChange={changeMenuState} value="yes" id="agreement" name="agreement" className={Styles.custom_checkbox}/>
                                                <label htmlFor="agreement" className={`text_normal_itallic ${Styles.form__checkbox_lable}`}>{t('form_label')}</label>
                                            </div>
                                            <div className={Styles.form__container_button}>
                                                {/* <button className={`text_button ${Styles.form__button}`}>Заказать звонок</button> */}
                                                <button className={Styles.button_size}>
                                                    <div className={Styles.button_input}>
                                                        <div className={Styles.border_top}></div>
                                                        <p className={Styles.button_text}>{t('form_header')}</p>
                                                        <div className={Styles.border_bottom}></div>
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div className={Styles.form__pict_container}>
                            <div className={Styles.pict1}></div>
                            <div className={Styles.pict2}></div>
                        </div> 
                    </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default OrderForm;