import Button from './ButtonConnect/Button_connection';
import flower1 from '../assets/images/flower1.jpg';
import EquadorMap from './EquadorMap/EquadorMap';
import Location_icon from '../assets/images/Location_icon.svg'


interface MainPageProps {
    menuButtonState: boolean;
}

const MainPage: React.FC<MainPageProps> = ({ menuButtonState}) => {
    
    return (
        <>
        <div className={menuButtonState ? 'hidden':"bg-plane text-white sm:bg-center sm:pl-[15px] sm:pt-[5px] laptop:bg-cover desktop:bg-cover" }>
            <div className='py-[30px]'> 
            <p className="uppercase text-white tracking-[.8px] pb-[8px] text-sm font-medium">Flower Fracht Karaganda</p>
                <h1 className='text-[34px] font-semibold leading-10 '>Авиаперевозка цветов</h1>
                <p className='py-[12px] text-base leading-[18px] font-normal'>Занимаемся только АВИА перевозкой свеже срезанных цветов и растений из <span className='text-base font-semibold leading-[18px]'> Эквадора,
Кении, Колумбии, Чили, Голландии, Израиля </span> до конечного заказчика.</p>
                <p className='text-base font-semibold leading-[18px]'>Максимальный срок достовки товара - 7 дней от заказа</p>
            </div>
            <div className='flex justify-center items-center text-center'>
                <Button/>
            </div>
                <div className="grid grid-rows-5 grid-cols-1 py-[40px]">
                    <img src={flower1} alt='picture with pink flowers' className=' sm:max-w-[90px] sm:h-[140px]'></img>
                    <div className=''>
                        <img src={Location_icon} alt='location icon' className='absolute'></img>
                        <p className='absolute m-auto z-1'>Equador</p>
                        <svg className='z-0' xmlns="http://www.w3.org/2000/svg" width="120" height="135" viewBox="0 0 120 135" fill="none">
                        <path opacity="0.32" d="M113.092 38.1662L113.105 38.2192L113.13 38.2682C114.83 41.6861 115.459 45.6556 116.044 49.3513C116.075 49.5472 116.106 49.7423 116.137 49.9366C116.442 51.8505 116.751 53.684 117.22 55.2728C117.683 56.8444 118.316 58.2292 119.301 59.2332C119.575 59.6278 119.599 60.3308 119.161 61.4553C118.726 62.5694 117.898 63.9375 116.762 65.4775C114.497 68.5511 111.085 72.2104 107.43 75.7308C103.777 79.2484 99.8975 82.6116 96.7072 85.0925C95.1111 86.3336 93.695 87.3481 92.5704 88.0497C92.0075 88.4009 91.5267 88.668 91.1386 88.8456C90.7325 89.0315 90.4873 89.0909 90.3735 89.0909C89.6812 89.0909 88.8376 89.2839 87.8973 89.607C86.9494 89.9328 85.8697 90.4027 84.6944 90.9836C82.3437 92.1453 79.579 93.7667 76.6717 95.6119C70.857 99.3024 64.4359 103.912 59.5456 107.597C57.3387 109.183 55.24 111.693 53.3393 114.529C51.4328 117.374 49.7041 120.579 48.248 123.583C46.7912 126.588 45.6033 129.399 44.7797 131.459C44.3678 132.489 44.0468 133.331 43.8285 133.917C43.752 134.122 43.6881 134.296 43.6374 134.435L16.4002 129.675L17.5969 108.028L17.6032 107.915L17.5604 107.81L9.01151 86.9468L8.93411 86.7579L8.74662 86.6771L0.519957 83.1341C1.14947 72.7268 2.98243 57.3032 7.04542 42.9372C11.1636 28.3761 17.5345 15.0433 27.1337 9.01432L27.14 9.0104L27.1461 9.0063L27.1587 8.99788C30.7248 6.60877 34.3295 4.19382 37.9355 0.629824C38.4556 0.943239 38.9902 1.26506 39.5373 1.59437C45.3802 5.11159 52.6439 9.48409 58.8003 13.6086C62.2297 15.9061 65.3028 18.1183 67.5905 20.0562C68.7347 21.0255 69.6722 21.9177 70.3572 22.7103C71.0437 23.5047 71.4365 24.1543 71.5648 24.6485C71.911 26.6904 73.2059 27.9552 75.1103 28.7289C76.9882 29.4917 79.5046 29.8002 82.4089 29.9538C84.1678 30.0469 86.078 30.0841 88.1039 30.1235C92.8339 30.2156 98.1944 30.32 103.731 31.1759L103.769 31.1818H103.807C106.167 31.1818 108.195 31.774 109.771 32.9264C111.345 34.0762 112.506 35.8108 113.092 38.1662Z" stroke="white"/>
                        </svg>
                    </div>
        
                    
                    <img></img>
                    <img></img>
                </div>
        </div>
        </>
    )
}
export default MainPage;
