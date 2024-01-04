import React, { useEffect } from 'react';
import { useSelector} from 'react-redux';
import { RootState } from '../state/store';

const Navigation: React.FC = () => {
    const headerStateValue = useSelector((state: RootState)=>state.headerMenuState.value);

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

    useEffect(()=>{
        console.log('navigation', headerStateValue)
    })

    return (
        <>
            <ul id='navID' className={headerStateValue ? ' flex text-xs m-0 p-0 w-[65%] sm:left-0 sm:top-[5rem] sm:grid sm:items-center sm:justify-center sm:gap-[24px] sm:text-gray-400 sm:text-center sm:w-[100%] sm:bg-[#1A2633] sm:overflow-auto sm:transition-top delay-[0.4s] desktop:w-[50%] justify-between text-xs not-italic font-medium uppercase list-none  sm:not-italic sm:font-medium sm:uppercase laptop:text-white desktop:text-white' : 'm-0 p-0 w-[65%] sm:hidden laptop:flex desctop:flex justify-between text-white text-xs not-italic font-medium uppercase list-none desktop:flex'}>
                <li className=' sm:pt-[24px] sm:transition-bg sm:hover:bg-[#28394c] sm:hover:text-inherit hover:text-[#227CE4]'><a href='#'>Главная</a></li>
                <li className=' sm:transition-bg sm:hover:bg-[#28394c] sm:hover:text-inherit hover:text-[#227CE4] laptop:hidden'><a href='#About_us' onClick={() => smoothScroll('target-section')}>О нас</a></li>
                <li className=' sm:transition-bg sm:hover:bg-[#28394c] sm:hover:text-inherit hover:text-[#227CE4]'><a href='#'>Наши склады</a></li>
                <li className=' sm:transition-bg sm:hover:bg-[#28394c] sm:hover:text-inherit hover:text-[#227CE4]'><a href='#'>Брокерам</a></li>
                <li className=' sm:pb-[24px] sm:transition-bg sm:hover:bg-[#28394c] sm:hover:text-inherit hover:text-[#227CE4]'><a href='#'>Контакты</a></li>
            </ul>
        </>
    )
}
export default Navigation;