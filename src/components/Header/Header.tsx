import React, { useEffect } from 'react';
import Close from '../../assets/images/close-line.svg';
import Navigation from '../Navigation/Navigation';
import HeaderLogo from './HeaderLogo';
import {changeValue} from '../../state/HeaderMenuReducer/HeaderMenuReducer';
import { useDispatch,useSelector } from 'react-redux';
import { RootState } from '../../state/store';
// interface HeaderProps {
//     headerStateValue: boolean;
//     // setheaderStateValue: (state: boolean) => void;
// }

const Header: React.FC = () => {
    const dispatch = useDispatch();
    const headerStateValue = useSelector((state: RootState)=>state.headerMenuState.value);
    // const changeMenuState = () => {
    //     setheaderStateValue(!headerStateValue);
    // };

    const changeMenuState = () => {
        dispatch(changeValue())}
useEffect(()=>{
    console.log('header',headerStateValue)
})

    if(headerStateValue){
        return(
        <header>
            <div className='flex-grow-[0] bg-[#1A2633] flex w-full justify-between items-center sm:px-4 sm:py-3 laptop:px-[30px] laptop:py-[10px] desktop:px-[30px] desktop:py-[10px]'>
                <HeaderLogo/> 
                {/* крестик */}
                <div id='toggleID' className='pl-[1%] w-32px h-32px sm:pl-2 laptop:hidden desktop:hidden'onClick={changeMenuState}>
                    <svg className={headerStateValue ? 'hidden': 'w-max h-max m-auto cursor-pointer transition-opacity delay-[0.4s]'} xmlns="http://www.w3.org/2000/svg" width="26" height="23" viewBox="0 0 26 23" fill="none">
                        <rect width="26" height="1" fill="white"/>
                        <rect x="3" y="11" width="23" height="1" fill="white"/>
                        <rect y="22" width="26" height="1" fill="white"/></svg>
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
            <header className='bg-[#1A2633]' >
                <div className='flex w-full justify-between items-center sm:px-4 sm:py-3 laptop:px-[30px] laptop:py-[10px] desktop:px-[30px] desktop:py-[10px]'>
                <HeaderLogo/>
                {/* menu bar */}
                <Navigation/>
                <div className='flex items-center gap-2 sm:pr-5px laptop:float-left'>
                    <div className='border-solid border border-[#80828D]'>
                        <p className='text-[#FFFFFF] font-header not-italic font-semibold uppercase text-sm tracking-[1.2px] px-9px py-11px'>RU</p>
                    </div>
                    {/*language */}
                    <div className=' sm:pr-[1%]'>
                    <button  id='useref' onClick={()=>{console.log('')}}> 
                        <svg  xmlns="http://www.w3.org/2000/svg" width="10" height="7" viewBox="0 0 10 7" fill="none">
                        {/* <g clip-Path="url(#clip0_405_7706)"> */}
                        <path d="M4.00866 4.74995C3.94199 4.74995 3.80866 4.67667 3.74199 4.60339L0.141992 0.646134C0.00865886 0.499569 0.00865886 0.20644 0.141992 0.0598748C0.275326 -0.08669 0.541992 -0.08669 0.675326 0.0598748L4.00866 3.79728L7.40866 0.0598748C7.54199 -0.08669 7.80866 -0.08669 7.94199 0.0598748C8.07533 0.20644 8.07533 0.499569 7.94199 0.646134L4.27533 4.67667C4.20866 4.74995 4.07533 4.74995 4.00866 4.74995Z" fill="#227CE4"/>
                        {/* </g> */}
                        <defs>
                        <clipPath id="clip0_405_7706">
                        <rect width="10" height="6.5" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>
                    </button>
                    </div>
    
                    {/* menu burger */}
                    <div id='toggleID' className='pl-[1%] w-32px h-32px sm:pl-2 laptop:hidden desktop:hidden'onClick={changeMenuState}>
                    <svg className={headerStateValue ? 'hidden': 'w-max h-max m-auto cursor-pointer transition-opacity delay-[0.4s]'} xmlns="http://www.w3.org/2000/svg" width="26" height="23" viewBox="0 0 26 23" fill="none">
                        <rect width="26" height="1" fill="white"/>
                        <rect x="3" y="11" width="23" height="1" fill="white"/>
                        <rect y="22" width="26" height="1" fill="white"/></svg>
                        <img src={Close} alt='close' className={headerStateValue ? 'w-[32px] h-[32px] m-auto cursor-pointer':'hidden'}/>
                    </div>
                </div>
                </div>
            </header>
            </>
        )
    }
    }

    
export default Header;