import React from "react";
import Styles from './MainPageOtherPaths.module.css';
import { useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import '../../../Translation/Translation';
import { useSelector} from 'react-redux';
import { RootState } from '../../../state/store';

const MainPageOtherPaths = () =>{
    const location = useLocation();
    const {t} = useTranslation();
    const langState = useSelector((state: RootState) => state.LangStateReducer.language);

    const headers: { [key: string]: string } = {
        '/brockers-page': t('header_brockers'),
        '/warehouses-page': t('header_warehouses'),
        '/contacts': t('header_contacts'),
    };

    const classes: { [key: string]: string } = {
        '/brockers-page': Styles.brocker__mainPage_section_brockers,
        '/warehouses-page': Styles.brocker__mainPage_section_about,
        '/contacts': Styles.brocker__mainPage_section_contacts
    };

    const currentHeader = headers[location.pathname] || t('header_others');
    const currentClass = classes[location.pathname] || Styles.brocker__mainPage_section;
    console.log('Текущий путь:', location.pathname);


    return(
        <>
        {/* Если пользователь на страницу path='/brockers-page' то выводи заголовок элемент массива Брокерам, а класс сделай ..brocker__mainPage_section_brockers и аналогично для пути '/about' и '/contacts' */}
            <section className={currentClass}>
                <div className={Styles.brocker__mainPage_container}>
                    <p className={`flowerLogo ${Styles.brocker__mainPage_logoName}`}>Flower Fracht Karaganda</p>
                    <h1 className={Styles.brocker__mainPage_header}>{currentHeader}</h1>
                </div>
            </section>
        </>
    )
}

export default MainPageOtherPaths;