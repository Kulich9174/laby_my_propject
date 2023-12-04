import React from 'react';
import Logo from '../pictures/logo_image.svg'

export default function Footer() {

    return (
        <>
            <footer className="bg-gray-800 text-[#BCC9DA] sm:py-[26px] sm:px-[14px] laptop:py-[47px] laptop:px-[34px] desktop:py-[40px]">
                <div className="flex flex-wrap sm:justify-between items-center desktop:justify-center">

                    <div className='flex items-center sm:pb-[22px] pr-[5%]'>
                        <a href='#' className='pr-2'><img src={Logo} alt='logo' className='min-w-[30px] max-w-56px min-h-[30px] max-h-56px ' /></a>
                        <div className='text-[#FFFFFF] text-sm pb-0.5 font-bold pt-2 '>
                            <p className='pb-0.5'>Flower</p>
                            <p className='pb-0.5'>Fracht</p>
                            <p className='pb-0.5'>Karaganda</p>
                        </div>
                    </div>


                    <nav className="text-[#BCC9DA]">
                        <ul className="flex flex-wrap justify-center -mx-2 laptop:items-center">
                            {/* Первая колонка */}
                            <li className="w-1/2 px-2">
                                <a href="#" className="inline-block py-2 hover:text-[#227CE4]">ГЛАВНАЯ</a>
                            </li>
                            <li className="w-1/2 px-2">
                                <a href="#" className="inline-block py-2 hover:text-[#227CE4]">БРОКЕРАМ</a>
                            </li>

                            {/* Вторая колонка */}
                            <li className="w-1/2 px-2">
                                <a href="#" className="inline-block py-2 hover:text-[#227CE4]">НАШИ СКЛАДЫ</a>
                            </li>
                            <li className="w-1/2 px-2">
                                <a href="#" className="inline-block py-2 hover:text-[#227CE4]">КОНТАКТЫ</a>
                            </li>
                        </ul>
                    </nav>


                    <div className="flex flex-col lg:items-end pt-[22px] pb-[7px] pr-[5%]">
                        <div className="mb-2 sm:pb-[8px]">
                            <a href="tel:+74957378585" className="text-[#BCC9DA] hover:text-[#227CE4]">+7 (495) 737 8585</a>
                        </div>
                        <div className="mb-2">
                            <a href="mailto:ffkaragandainfo@info.ru" className="text-[#BCC9DA] hover:text-[#227CE4]">ffkaragandainfo@info.ru</a>
                        </div>
                    </div>

                    <div className="flex flex-col lg:items-end pt-[15px]">
                        <div className="mb-2 sm:pb-[8px]">
                            <a href="#" className="text-[#BCC9DA] hover:text-[#227CE4]">Политика конфиденциальности</a>
                        </div>
                        <div className="mb-2">
                            <a href="#" className="text-[#BCC9DA] hover:text-[#227CE4]">Copyright © 2021 All rights reserved</a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}