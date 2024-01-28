import React from 'react';
// import { useSelector} from 'react-redux';
// import { RootState } from '../../state/store';
import { NavLink } from 'react-router-dom';
import Style from './Navigation.module.css';
import { useTranslation } from 'react-i18next';
import '../../Translation/Translation';

const Navigation: React.FC = () => {
    // const headerStateValue = useSelector((state: RootState)=>state.headerMenuState.value);
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

    // useEffect(()=>{
    //     console.log('navigation', headerStateValue)
    // })

    return (
        <>
        {/* sm:transition-bg sm:hover:bg-[#28394c] sm:hover:text-inherit hover:text-[#227CE4] laptop:hidden' */}
            {/* <ul id='navID' className={headerStateValue ? ' flex text-xs m-0 p-0 w-[65%] sm:left-0 sm:top-[5rem] sm:grid sm:items-center sm:justify-center sm:gap-[24px] sm:text-gray-400 sm:text-center sm:w-[100%] sm:bg-[#1A2633] sm:overflow-auto sm:transition-top delay-[0.4s] desktop:w-[50%] justify-between text-xs not-italic font-medium uppercase list-none  sm:not-italic sm:font-medium sm:uppercase laptop:text-white desktop:text-white' : 'm-0 p-0 w-[65%] sm:hidden laptop:flex desctop:flex justify-between text-white text-xs not-italic font-medium uppercase list-none desktop:flex'}> */}
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