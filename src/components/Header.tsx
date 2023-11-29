import React, {useRef,useEffect} from 'react';
import Logo from '../pictures/logo_image.svg'
// import HeaderStyles from './Header.module.css'
export default function Header (){
    const btnRef = useRef(null);
    useEffect(()=>{
        console.log(btnRef.current)
    },[])

    function changeLanguage (){
        // выьор языка
    }
    return(
        <>
        <header className='bg-[#1A2633]' >
            <div className='flex justify-between items-center sm:px-4 sm:py-3 laptop:px-[30px] laptop:py-[10px] desktop:px-[30px] desktop:py-[10px]'>
            <div className='grid grid-cols-2 justify-between items-center desktop:pr-[10%]'>
                <a href='#'><img src={Logo} alt='logo' className='min-w-[30px] max-w-56px min-h-[30px] max-h-56px pr-2'/></a> 
                <div className='text-[#FFFFFF] text-sm pb-0.5 font-bold pt-2'>
                    <p  className='pb-0.5'>Flower</p>
                    <p  className='pb-0.5'>Fracht</p>
                    <p  className='pb-0.5'>Karaganda</p>
                </div>
                
            </div>

            {/* menu bar */}
            <ul className='m-0 p-0 w-[65%] sm:hidden desktop:w-[50%] flex justify-between text-white text-xs not-italic font-medium uppercase list-none tracking-[1.2px]'>
                <li className=' hover:text-[#227CE4]'><a href='#'>Главная</a></li>
                <li className=' hover:text-[#227CE4] sm:hidden laptop:hidden'><a href='#'>О нас</a></li>
                <li className=' hover:text-[#227CE4]'><a href='#'>Наши склады</a></li>
                <li className=' hover:text-[#227CE4]'><a href='#'>Брокерам</a></li>
                <li className=' hover:text-[#227CE4]'><a href='#'>Контакты</a></li>      
            </ul>
            <div className='flex items-center gap-2 sm:pr-5px laptop:float-left'>
                <div className='border-solid border border-[#80828D]'>
                    <p className='text-[#FFFFFF] font-header not-italic font-semibold uppercase text-sm  tracking-[1.2px] px-9px py-11px'>RU</p>
                </div>
                {/*language */}
                <div className=' sm:pr-[1%]'>
                <button  id='useref' ref={btnRef} onClick={changeLanguage}> 
                    <svg  xmlns="http://www.w3.org/2000/svg" width="10" height="7" viewBox="0 0 10 7" fill="none">
                    <g clip-path="url(#clip0_405_7706)">
                    <path d="M4.00866 4.74995C3.94199 4.74995 3.80866 4.67667 3.74199 4.60339L0.141992 0.646134C0.00865886 0.499569 0.00865886 0.20644 0.141992 0.0598748C0.275326 -0.08669 0.541992 -0.08669 0.675326 0.0598748L4.00866 3.79728L7.40866 0.0598748C7.54199 -0.08669 7.80866 -0.08669 7.94199 0.0598748C8.07533 0.20644 8.07533 0.499569 7.94199 0.646134L4.27533 4.67667C4.20866 4.74995 4.07533 4.74995 4.00866 4.74995Z" fill="#227CE4"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_405_7706">
                    <rect width="10" height="6.5" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>
                </button>
                </div>

                {/* menu burger */}
                <div className='pl-[1%] sm:pl-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="23" viewBox="0 0 26 23" fill="none">
                    <rect width="26" height="1" fill="white"/>
                    <rect x="3" y="11" width="23" height="1" fill="white"/>
                    <rect y="22" width="26" height="1" fill="white"/>
                    </svg>
                </div>
            </div>
            </div>
        </header>
        </>
    )
}