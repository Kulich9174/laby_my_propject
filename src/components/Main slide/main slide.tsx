import Button from '../ButtonConnect/Button_connection';
import flower1 from '../../assets/images/flower1.jpg';
import EquadorMap from '../EquadorMap/EquadorMap';
import flower2 from '../../assets/images/flower2.jpg';
import flower3 from '../../assets/images/flower3.jpg';
import flower4 from '../../assets/images/Rectangle 1.png';
import Phone_icon from '../../assets/images/Phone_icon.svg';
import Mail_icon from '../../assets/images/Mail_icon.svg';
import Styles from './MainSlide.module.css';

interface MainPageProps {
    menuButtonState: boolean;
}

const MainPage: React.FC<MainPageProps> = ({ menuButtonState }) => {

    return (
        <>

            <div className={menuButtonState ? Styles.container_hidden : Styles.container}>
                <div className='sm:block flex'>
                    <div className='sm:py-[30px]
                        laptop:py-[2%]
                        desktop:py-[3%]'>
                        {/* <div className='border-r h-[100hv] border-white'> */}
                        <div className={Styles.textarea}>
                            <p className="uppercase font-medium text-[10px] tracking-[1px]
                                sm:tracking-[.8px] sm:pb-[8px] sm:text-sm">Flower Fracht Karaganda</p>
                            <h1 className='max-w-[40%] sm:max-w-full text-[34px] font-semibold leading-10 pr-[15px] sm:whitespace-normal'>Авиаперевозка цветов</h1>
                            <div className='sm:max-w-[85%]'>
                                <p className='py-[12px] text-base leading-[18px] font-normal'>Занимаемся только АВИА перевозкой свеже срезанных цветов и растений из <span className='text-base font-semibold leading-[18px]'> Эквадора,
                                    Кении, Колумбии, Чили, Голландии, Израиля </span> до конечного заказчика.</p>
                                <p className='text-base font-semibold leading-[18px]'>Максимальный срок достовки товара - 7 дней от заказа</p>
                            </div>
                        {/* </div> */}
                        </div>
                    </div>

                    <div className='flex justify:between sm:justify-center sm:items-center sm:text-center py-[20px] px-[5%] '>
                        <ul className=' list-none font-normal text-[13px] leading-[24px] py-8 '>
                            <div className='flex items-center'>
                                <div className='sm:hidden border-solid border-white border-[1px] h-10'>
                                    {/**линия разделяющая блоки */}
                                </div>
                                <div className='sm:hidden flex flex-col justify-between'>
                                    <li className='flex pb-[6%]'>
                                        <img src={Phone_icon} alt='phone icon' className='pr-2 pl-[14px]'></img>
                                        <a href='tel:+74957378585'>+7 (495) 737 8585</a>
                                    </li>
                                    <li className='flex '>
                                        <img src={Mail_icon} alt='mail icon' className='pr-2 pl-[14px]'></img>
                                        <a href='mailto:ffkaragandainfo@info.ru'>ffkaragandainfo@info.ru</a>
                                    </li>
                                </div>
                            </div>
                            <div className='pt-8'>
                                <Button />
                            </div>
                        </ul>
                    </div>
                </div>
                {/* SECTION WITH FLOWERS */}
                <section className='my-5 py-[12px] relative'>
                    <div className='
            flex overflow-auto sm:gap-[30px] sm:w-full no-scrollbar
            laptop:gap-4 pl-[5%]
            desktop:'>
                        <div className='flex flex-col items-center justify-center text-center sm:hidden'>
                            <div className='min-w-[90px] h-[140px]'></div>
                            <span className='text-[10px] font-medium uppercase py-2'>Equador</span>
                        </div>
                        <div className='hidden
                    sm:flex sm:flex-col sm:items-center sm:justify-center sm:text-center'>
                            <img src={flower4} alt='picture with pink flowers' className='min-w-[90px] h-[140px]'></img>
                            <span className='text-[10px] font-medium uppercase py-2'>EC</span>
                        </div>

                        <div className='right-[10%]'>
                            <EquadorMap />
                        </div>

                        <div className='flex flex-col items-center justify-center text-center'>
                            <img src={flower1} alt='picture with pink flowers' className='min-w-[90px] h-[140px]'></img>
                            <span className='text-[10px] font-medium uppercase py-2'>EC</span>
                        </div>

                        <div className='flex flex-col items-center justify-center text-center'>
                            <img src={flower2} alt='picture with pink flowers' className='min-w-[90px] h-[140px]'></img>
                            <span className='text-[10px] font-medium uppercase py-2'>CO</span>
                        </div>

                        <div className='flex flex-col items-center justify-center text-center'>
                            <img src={flower3} alt='picture with pink flowers' className='min-w-[90px] h-[140px]'></img>
                            <span className='text-[10px] font-medium uppercase py-2'>CL</span>
                        </div>

                        <div className='flex flex-col items-center justify-center text-center'>
                            <div className='min-w-[90px] h-[140px]'></div>
                            <span className='text-[10px] font-medium uppercase py-2'>holl</span>
                        </div>

                        <div className='flex flex-col items-center justify-center text-center'>
                            <div className='min-w-[90px] h-[140px]'></div>
                            <span className='text-[10px] font-medium uppercase py-2'>isr</span>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
export default MainPage;
