import React from 'react';
// import { useSelector} from 'react-redux';
// import { RootState } from '../../state/store';
import { NavLink } from 'react-router-dom';
import Style from '../Navigation/Navigation.module.css';
import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';
// import { RootState } from '../../state/store';
import { changeValue } from '../../state/HeaderMenuReducer/HeaderMenuReducer';

const MenuNav: React.FC = () => {
    // const headerStateValue = useSelector((state: RootState)=>state.headerMenuState.value);
    const dispatch = useDispatch();

    // useEffect(()=>{
    //     console.log('MenuNavigation', headerStateValue)
    // })

    function changeMenuState (){
        dispatch(changeValue())
    }

    return (
        <>
        {/* sm:transition-bg sm:hover:bg-[#28394c] sm:hover:text-inherit hover:text-[#227CE4] laptop:hidden' */}
            <ul id='navID' className='sm:left-0 sm:top-[5rem] sm:grid sm:items-center sm:justify-center sm:gap-[24px] sm:text-gray-400 sm:text-center sm:w-[100%] sm:bg-[#1A2633] sm:overflow-auto sm:transition-top delay-[0.4s] desktop:w-[50%] justify-between text-xs not-italic font-medium uppercase list-none  sm:not-italic sm:font-medium sm:uppercase laptop:text-white desktop:text-white'>
                <NavLink to='/' className={Style.nav__link} onClick={changeMenuState}>Главная</NavLink>
                <NavLink to='/about' className={Style.nav__link} onClick={changeMenuState}>О нас</NavLink>
                <li><NavLink to='/warehouses-page' className={Style.nav__link} onClick={changeMenuState}>Наши склады</NavLink></li>
                <li><NavLink to='/brockers-page' className={Style.nav__link} onClick={changeMenuState}>Брокерам</NavLink></li>
                <li><NavLink to='/contacts'  className={Style.nav__link} onClick={changeMenuState}>Контакты</NavLink></li>
            </ul>
        </>
    )
}
export default MenuNav;