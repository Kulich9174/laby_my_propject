import React, { useState, useEffect } from 'react';
import Close from '../../assets/images/close-line.svg';
import Menu from '../../assets/images/MenuBurger.svg';
import Navigation from '../Navigation/Navigation';
import HeaderLogo from './HeaderLogo';
import {changeValue} from '../../state/HeaderMenuReducer/HeaderMenuReducer';
import { useDispatch,useSelector } from 'react-redux';
import { RootState } from '../../state/store';
import { useNavigate } from 'react-router-dom';
import  { changeLanguage as changeLangRedux }  from '../../state/Language/LangStateReducer';
import { useTranslation } from 'react-i18next';


import Style from './Header.module.css';

const Header: React.FC = () => {
    const dispatch = useDispatch();
    const headerStateValue = useSelector((state: RootState) => state.headerMenuState.value);
    const langState = useSelector((state: RootState) => state.LangStateReducer.language);
    const navigate = useNavigate();
    const { i18n } = useTranslation();
    const [arrowClass, setArrowClass] = useState(Style.arrow_up);
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    const changeLanguage = (language:string) => { //смена языка на клик
        i18n.changeLanguage(language);
        dispatch(changeLangRedux(language));
    };
    const toggleArrow = () => {
        setIsMenuVisible(!isMenuVisible);
        setArrowClass(arrowClass === Style.arrow_up ? Style.arrow_down : Style.arrow_up);
    };

    const changeMenuState = () => {
        if (!headerStateValue) {
            navigate('/MenuNav');
        } else {
            navigate('/');
        }
        dispatch(changeValue());
    };

    useEffect(() => {
        i18n.changeLanguage(langState); // Обновление языка в i18next
        console.log('язык',langState)
    }, [langState, i18n]);

    if(headerStateValue){
        return(
        <header>
            <div className='flex-grow-[0] bg-[#1A2633] flex w-full justify-between items-center sm:px-4 sm:py-3 laptop:px-[30px] laptop:py-[10px] desktop:px-[30px] desktop:py-[10px]'>
                <HeaderLogo/> 
                {/* крестик */}
                <div id='toggleID' className='pl-[1%] w-32px h-32px sm:pl-2 laptop:hidden desktop:hidden' onClick={changeMenuState}>
                    {/* <svg className={headerStateValue ? 'hidden': 'w-max h-max m-auto cursor-pointer transition-opacity delay-[0.4s]'} xmlns="http://www.w3.org/2000/svg" width="26" height="23" viewBox="0 0 26 23" fill="none">
                        <rect width="26" height="1" fill="white"/>
                        <rect x="3" y="11" width="23" height="1" fill="white"/>
                        <rect y="22" width="26" height="1" fill="white"/></svg> */}
                        <img src={Menu} alt='nav' className={headerStateValue ? 'hidden': 'w-[32px] h-[32px] m-auto cursor-pointer'}/>
                        <img src={Close} alt='close' className={headerStateValue ? 'w-[32px] h-[32px] m-auto cursor-pointer':'hidden'}/>
                </div>
            </div>
        
        <div className='flex flex-grow-0'>
            <Navigation/>
        </div>
        </header>)
    }
    else{
        return (
            <>
            <header className='bg-[#1A2633] max-w-[1600px] laptop:mx-auto desktop:mx-auto laptop:min-w-[1050px] desktop:min-w-[1300px]' >
                <div className='flex max-w-[1600px] justify-between items-center sm:px-4 sm:py-3 laptop:px-[30px] laptop:py-[16px] desktop:px-[30px] desktop:py-[20px]'>
                <HeaderLogo/>
                {/* menu bar */}
                <Navigation/>
                <div className='flex items-center gap-2 pl-[50px] sm:pr-5px laptop:float-left'>
                    <div className='border-solid border border-[#80828D]'>
                        <p className='text-[#FFFFFF] font-header not-italic font-semibold uppercase text-sm tracking-[1.2px] px-9px py-11px'>{langState==='' ? 'ru':langState}</p>
                    </div>
                    {/*language */}
                    <div className=' sm:pr-[1%]'>
                    <button id='useref' className={Style.button} onClick={toggleArrow}> 
                        <div className={arrowClass}></div>
                    </button>
                    </div>
    
                    <div className={`${Style.langMenu} ${isMenuVisible ? 'block' : Style.langMenu__hidden}`}>
                        <button className={Style.button__lang_menu_element} onClick={() => changeLanguage('ru')}>Ru</button>
                        <button className={Style.button__lang_menu_element} onClick={() => changeLanguage('en')}>En</button>
                    </div>
                    {/* menu burger */}
                    <div id='toggleID' className='pl-[1%] w-[32px] h-[32px] sm:pl-[14px] flex items-center justify-center laptop:hidden desktop:hidden'onClick={changeMenuState}>
                    {/* <svg className={headerStateValue ? 'hidden': 'w-max h-max m-auto cursor-pointer transition-opacity delay-[0.4s]'} xmlns="http://www.w3.org/2000/svg" width="26" height="23" viewBox="0 0 26 23" fill="none">
                        <rect width="26" height="1" fill="white"/>
                        <rect x="3" y="11" width="23" height="1" fill="white"/>
                        <rect y="22" width="26" height="1" fill="white"/></svg> */}
                        <img src={Menu} alt='nav' className={headerStateValue ? 'hidden': ' w-[32px] h-[32px]  m-auto cursor-pointer'}/>
                        <img src={Close} alt='close' className={headerStateValue ? 'w-[32px] h-[32px] m-auto cursor-pointer':'hidden'} />
                    </div>
                </div>
                </div>
            </header>
            </>
        )
    }
    }

    
export default Header;