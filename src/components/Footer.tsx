import React from 'react';
import Logo from '../pictures/logo_image.svg'

export default function Footer (){

    return(
        <>
        <footer className='flex bg-[#1A2633] text-[#BCC9DA] text-base font-medium'>
            <div className='logo'>
            <div className='grid grid-cols-2 justify-between items-center desktop:pr-[10%]'>
                <a href='#'><img src={Logo} alt='logo' className='min-w-[30px] max-w-56px min-h-[30px] max-h-56px pr-2'/></a> 
                <div className='text-[#FFFFFF] text-sm pb-0.5 font-bold pt-2'>
                    <p  className='pb-0.5'>Flower</p>
                    <p  className='pb-0.5'>Fracht</p>
                    <p  className='pb-0.5'>Karaganda</p>
                </div>
                </div>
                <nav>
                    <ul>
                        <li>Главная</li>
                        <li>Брокерам</li>
                        <li>Наши склады</li>
                        <li>Контакты</li>
                    </ul>
                </nav>
                <div className='phone'>
                    <img src='' alt='phone'/>
                    <p>+7 (495) 737 8585</p>
                </div>
                <div>
                    <img src='' alt='email'/>
                    <p>julia9174@mail.ru</p>
                </div>
                <a href='#'>Политика конфендициальности</a><br/>
                <small className=''>Copyright 2021 All rights reserved</small>
            </div>
        </footer>
        </>
    )
}