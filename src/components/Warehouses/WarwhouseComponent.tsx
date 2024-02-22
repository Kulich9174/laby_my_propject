import React, { useEffect } from "react";
import Style from './Warehouses.module.css';

import { useSelector, useDispatch} from "react-redux";
import { setCountryWarehouseValue } from "../../state/CountryWarehouseReducer/countryWarehouseSlice";
import { RootState } from "../../state/store";
import { useTranslation } from "react-i18next";

const WarehouseComponent = () =>{
    const langState = useSelector((state: RootState) => state.LangStateReducer.language);
    const { t, i18n } = useTranslation();

    const countryState = useSelector((state: RootState) => state.CountryWarehouseSlice.value);
    const cityState = useSelector((state:RootState)=> state.CityManagerReducer.value);
    const dispatch = useDispatch();

    const countryMassive = ['country_Kz', 'country_Russia', 'country_Belorussia', 'country_Armenia','country_Turkmenistan','country_Azer', 'country_Uzbek']
    const handleClickCountry = (key : string) => {
        dispatch(setCountryWarehouseValue(key));
    }
    useEffect(()=>{
        console.log('country with warehouses', countryState)
    },[countryState])
    return(
        <>
            <section className={Style.warehouse_section}>
                <div className={Style.warehouse__paddingContainer}>
                    <div className={Style.warehouse_border}>
                        <div className={Style.warehouse__content_container}>
                            <div className={Style.warehouse_countryContainer}>
                                <div className={Style.countryList}>
                                    <button onClick={ ()=>handleClickCountry('country_Kz')} className={Style.warehouse__button}>{t('country_Kz')}</button>
                                    <button onClick={ ()=>handleClickCountry('country_Russia')} className={Style.warehouse__button}>{t('country_Russia')}</button>
                                    <button onClick={ ()=>handleClickCountry('country_Uzbek')} className={Style.warehouse__button}>{t('country_Uzbek')}</button>
                                    <button onClick={ ()=>handleClickCountry('country_Azer')} className={Style.warehouse__button}>{t('country_Azer')}</button>
                                    <button onClick={ ()=>handleClickCountry('country_Turkmenistan')} className={Style.warehouse__button}>{t('country_Turkmenistan')}</button>
                                    <button onClick={ ()=>handleClickCountry('country_Armenia')} className={Style.warehouse__button}>{t('country_Armenia')}</button>
                                    <button onClick={ ()=>handleClickCountry('country_Belorussia')} className={Style.warehouse__button}>{t('country_Belorussia')}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WarehouseComponent;