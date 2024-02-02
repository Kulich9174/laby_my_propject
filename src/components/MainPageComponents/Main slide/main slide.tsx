import Button from '../ButtonConnect/Button_connection';
import React from 'react';
import flower1 from '../../../assets/images/flower1.png';
import EquadorMap from '../EquadorMap/EquadorMap';
import flower2 from '../../../assets/images/flower2.png';
import flower3 from '../../../assets/images/flower3.png';
import flower4 from '../../../assets/images/Rectangle 1.png';
import Phone_icon from '../../../assets/images/Phone_icon.svg';
import Mail_icon from '../../../assets/images/Mail_icon.svg';
import Styles from './MainSlide.module.css';
import { useTranslation } from 'react-i18next';
import '../../../Translation/Translation';
// import { useSelector} from 'react-redux';
// import { RootState } from '../../../state/store';


const MainPage: React.FC = () => {
    // const headerStateValue = useSelector((state: RootState)=>state.headerMenuState.value);
    const { t } = useTranslation();
    return (
        <>
            {/* <div className={headerStateValue ? `sm:hidden min-h-screen ${Styles.container_hidden}` : Styles.container}> */}
                <section className={Styles.section__main_bg}>
                    <div className={Styles.container}>
                    <div className='sm:block flex px-[5%]'>
                        <div className='sm:py-[30px]
                            laptop:py-[2%]
                            desktop:py-[3%]'>
                            <div className={Styles.textarea}>
                                <p className={`${Styles.flowerLogoWhite} flowerLogo`}>Flower Fracht Karaganda</p>
                                <h1 className='font-semibold leading-10 pr-[15px]
                                sm:max-w-full sm:text-[38px] sm:whitespace-normal
                                laptop:text-[44px] laptop:leading-[46px]
                                desktop:text-[60px] desktop:leading-[65px]'>{t('aviatransport')}</h1>
                                <div className='sm:max-w-[85%]'>
                                    <p className={`${Styles.mainSlide__text_norm} text_normal_itallic`}>{t('main-text_itallc1')}<span className={`${Styles.mainSlide__text_bold} text_normal_bold`}>
                                        {t('span')} </span> {t('main-text_itallc2')}</p>
                                    <p className={`${Styles.mainSlide__text_bold} sm:leading-[18px] leading-[26px]`}></p>
                                </div>
                            </div>
                        </div>

                        <div className='flex justify:between sm:justify-center sm:items-center sm:text-center py-[20px] px-[5%] '>
                            <ul className=' list-none font-normal text-[13px] leading-[24px] py-8 '>
                                <div className='flex items-center justify-center'>
                                    <div className='sm:hidden border-solid border-white border-[1px] h-10'>
                                        {/**линия разделяющая блоки */}
                                    </div>
                                    <div className={`${Styles.mainSlide__text_bold} sm:hidden flex flex-col justify-between` }>
                                        <li className={`flex  items-center pb-[6%]`}>
                                            <img src={Phone_icon} alt='phone icon' className='pr-2 pl-[14px]'></img>
                                            <a href='tel:+74957378585'>+7 (495) 737 8585</a>
                                        </li>
                                        <li className={`flex items-center`}>
                                            <img src={Mail_icon} alt='mail icon' className='pr-2 pl-[14px]'></img>
                                            <a href='mailto:ffkaragandainfo@info.ru'>ffkaragandainfo@info.ru</a>
                                        </li>
                                    </div>
                                </div>
                                <div className='pt-8 relative'>
                                    <Button />
                                </div>
                            </ul>
                        </div>
                    </div>
                    {/* SECTION WITH FLOWERS */}
                    <section className='my-5 py-[12px] pl-[5%] relative'>
                        <div className='
                            flex overflow-auto sm:gap-[30px] sm:w-full no-scrollbar
                            laptop:gap-4
                            desktop: gap-[30px] '>
                            <div className='flex flex-col items-center justify-center text-center sm:hidden'>
                                <div className={Styles.img}></div>
                                <span className={Styles.countries}>Equador</span>
                            </div>
                            <div className='hidden
                                sm:flex sm:flex-col sm:items-center sm:justify-center sm:text-center'>
                                <img src={flower4} alt='picture with pink flowers' className={Styles.img}></img>
                                <span className={Styles.countries}>EC</span>
                            </div>

                            <div className='right-[10%]'>
                                <EquadorMap />
                            </div>

                            <div className='flex flex-col items-center justify-center text-center'>
                                <img src={flower1} alt='picture with pink flowers' className={Styles.img}></img>
                                <span className={Styles.countries}></span>
                            </div>

                            <div className='flex flex-col items-center justify-center text-center'>
                                <img src={flower2} alt='picture with pink flowers' className={Styles.img}></img>
                                <span className={Styles.countries}>CO</span>
                            </div>

                            <div className='flex flex-col items-center justify-center text-center'>
                                <img src={flower3} alt='picture with pink flowers' className={Styles.img}></img>
                                <span className={Styles.countries}>CL</span>
                            </div>

                            <div className='flex flex-col items-center justify-center text-center'>
                                <div className={Styles.img}></div>
                                <span className={Styles.countries}>holl</span>
                            </div>

                            <div className='flex flex-col items-center justify-center text-center'>
                                <div className={Styles.img}></div>
                                <span className={Styles.countries}>isr</span>
                            </div>
                        </div>
                    </section>
                </div>
                </section>
                
        </>
    )
}
export default MainPage;
