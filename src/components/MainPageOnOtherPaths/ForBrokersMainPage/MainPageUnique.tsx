import React from "react";
import Styles from './MainPageOtherPaths.module.css';
import { useLocation } from "react-router-dom";

const MainPageOtherPaths = () =>{
    const location = useLocation();

    const headers: { [key: string]: string } = {
        '/brokers-page': 'Брокерам',
        '/about': 'Наши склады',
        '/contacts': 'Контакты'
    };

    const classes: { [key: string]: string } = {
        '/brokers-page': Styles.brocker__mainPage_section_brockers,
        '/about': Styles.brocker__mainPage_section_about,
        '/contacts': Styles.brocker__mainPage_section_contacts
    };

    const currentHeader = headers[location.pathname] || 'Стандартный заголовок';
    const currentClass = classes[location.pathname] || Styles.brocker__mainPage_section;



    return(
        <>
        {/* Если пользователь на страницу path='/brockers-page' то выводи заголовок элемент массива Брокерам, а класс сделай ..brocker__mainPage_section_brockers и аналогично для пути '/about' и '/contacts' */}
            <section className={currentClass}>
                <div className={Styles.brocker__mainPage_container}>
                    <p className={Styles.brocker__mainPage_logoName}>Flower Fracht Karaganda</p>
                    <h2 className={Styles.brocker__mainPage_header}>{currentHeader}</h2>
                </div>
            </section>
        </>
    )
}

export default MainPageOtherPaths;