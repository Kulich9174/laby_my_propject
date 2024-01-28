import React from 'react';
import { NavLink } from 'react-router-dom';
import Style from '../Navigation/Navigation.module.css';
import { useDispatch } from 'react-redux';
import { changeValue } from '../../state/HeaderMenuReducer/HeaderMenuReducer';
import { useTranslation } from 'react-i18next';
import '../../Translation/Translation';

const MenuNav: React.FC = () => {
    const {t} = useTranslation(); 
    const dispatch = useDispatch();
    
    function changeMenuState (){
        dispatch(changeValue())
    }

    return (
        <>
        {/* sm:transition-bg sm:hover:bg-[#28394c] sm:hover:text-inherit hover:text-[#227CE4] laptop:hidden' */}
            <ul id='navID' className='sm:left-0 sm:top-[5rem] sm:grid sm:items-center sm:justify-center sm:gap-[24px] sm:text-gray-400 sm:text-center sm:w-[100%] sm:bg-[#1A2633] sm:overflow-auto sm:transition-top delay-[0.4s] desktop:w-[50%] justify-between text-xs not-italic font-medium uppercase list-none  sm:not-italic sm:font-medium sm:uppercase laptop:text-white desktop:text-white'>
                <NavLink to='/' className={Style.nav__link} onClick={changeMenuState}>{t('main')}</NavLink>
                <NavLink to='/about' className={Style.nav__link} onClick={changeMenuState}>{t('about_us')}</NavLink>
                <li><NavLink to='/warehouses-page' className={Style.nav__link} onClick={changeMenuState}>{t('our_warehouses')}</NavLink></li>
                <li><NavLink to='/brockers-page' className={Style.nav__link} onClick={changeMenuState}>{t('brockers')}</NavLink></li>
                <li><NavLink to='/contacts'  className={Style.nav__link} onClick={changeMenuState}>{t('contacts')}</NavLink></li>
            </ul>
        </>
    )
}
export default MenuNav;