import React from 'react';
// import { useSelector} from 'react-redux';
// import { RootState } from '../../state/store';
import { NavLink } from 'react-router-dom';
import Style from './Navigation.module.css';
import { useTranslation } from 'react-i18next';
import '../../Translation/Translation';

const Navigation: React.FC = () => {
    const { t } = useTranslation();
    const smoothScroll = (id: string) => {
        console.log("Attempting to scroll to:", id);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    return (
        <>
            <ul id='navID' className={Style.container}>
                <NavLink to='/' className={({isActive})=>isActive ? Style.active:Style.nav__link}>{t('main')}</NavLink>
                <NavLink to='/about' className={({isActive})=>isActive ? Style.active:Style.nav__link} onClick={() => smoothScroll('target-section')}>{t('about_us')}</NavLink>
                <li><NavLink to='/warehouses-page' className={({isActive})=>isActive ? Style.active:Style.nav__link}>{t('our_warehouses')}</NavLink></li>
                <li><NavLink to='/brockers-page' className={({isActive})=>isActive ? Style.active:Style.nav__link}>{t('brockers')}</NavLink></li>
                <li className={Style.nav__link}><NavLink to='/contacts'  className={({isActive})=>isActive ? Style.active:Style.nav__link}>{t('contacts')}</NavLink></li>
            </ul>
        </>
    )
}
export default Navigation;