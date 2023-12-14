import Button from '../ButtonConnect/Button_connection';
import flower1 from '../../assets/images/flower1.jpg';
import EquadorMap from '../EquadorMap/EquadorMap';
import flower2 from '../../assets/images/flower2.jpg';
import flower3 from '../../assets/images/flower3.jpg';
import flower4 from '../../assets/images/Rectangle 1.png';
import Styles from './MainSlide.module.css';

interface MainPageProps {
    menuButtonState: boolean;
}

const MainPage: React.FC<MainPageProps> = ({ menuButtonState}) => {
    
    return (
        <>
        {/* <span className='w-[20%] h-[auto]
        sm:hidden'>
            <img src={flower4} alt='' className='h-full'></img>
        </span> */}

        <div className={menuButtonState ? Styles.container_hidden: Styles.container}>
            <div className='sm:py-[30px]
            laptop:py-[2%]
            desktop:py-[3%]'> 
            <div className={Styles.textarea}>
                <p className="uppercase font-medium text-[10px] tracking-[1px]
                sm:tracking-[.8px] sm:pb-[8px] sm:text-sm">Flower Fracht Karaganda</p>
                <h1 className='text-[34px] font-semibold leading-10 '>Авиаперевозка цветов</h1>
                <div className='sm:max-w-[85%]'>
                <p className='py-[12px] text-base leading-[18px] font-normal'>Занимаемся только АВИА перевозкой свеже срезанных цветов и растений из <span className='text-base font-semibold leading-[18px]'> Эквадора,
Кении, Колумбии, Чили, Голландии, Израиля </span> до конечного заказчика.</p>
                <p className='text-base font-semibold leading-[18px]'>Максимальный срок достовки товара - 7 дней от заказа</p>
                </div>
            </div>
            </div>
            
            <div className='flex justify-center items-center text-center py-[20px]'>
                <Button/>
            </div>
            
            {/* SECTION WITH FLOWERS */}
            <section className='my-5 py-[12px] relative'>
            {/* <div className="grid grid-rows-1 grid-cols-6 gap-[30px] py-[40px] overflow-hidden"> */}
            <div className='
            flex overflow-auto sm:gap-[30px] sm:w-full no-scrollbar
            laptop:gap-4 pl-[5%]
            desktop:'>
                    <div  className='flex flex-col items-center justify-center text-center sm:hidden'>
                        <div className='min-w-[90px] h-[140px]'></div>
                        <span className='text-[10px] font-medium uppercase py-2'>Equador</span>
                    </div>
                    <div className='hidden
                    sm:flex sm:flex-col sm:items-center sm:justify-center sm:text-center'>
                        <img src={flower4} alt='picture with pink flowers' className='min-w-[90px] h-[140px]'></img>
                        <span className='text-[10px] font-medium uppercase py-2'>EC</span>
                    </div>

                    <div className='right-[10%]'>
                        <EquadorMap/>
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

                    <div  className='flex flex-col items-center justify-center text-center'>
                        <div className='min-w-[90px] h-[140px]'></div>
                        <span className='text-[10px] font-medium uppercase py-2'>holl</span>
                    </div>
                    
                    <div  className='flex flex-col items-center justify-center text-center'>
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
