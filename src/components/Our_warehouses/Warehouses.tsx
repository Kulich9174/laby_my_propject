import React from "react";
import Styles from './Warehouses.module.css';
import Button from "../ButtonConnect/Button_connection";
import Map from '../../assets/images/MAPS2.svg';
import Ruler from '../Ruler_cities/Ruler_cities';
import Countries from '../../assets/images/Country.svg';

interface WarehousesProps {
    menuButtonState: boolean;
}

const Warehouses: React.FC<WarehousesProps> = ({ menuButtonState }) => {

    return (
        <>
            <section className={menuButtonState ? `sm:hidden min-h-screen ${Styles.section_hidden}` : Styles.warehouses__section} >
                {/* CONTAINER GLOBAL*/}
                <div className='flex px-[15px] relative
                sm: 
                laptop:
                desktop:'>
                {/* CONTAINER */}
                    <div className="flex relative
                    sm:flex-col sm:justify-center sm:items-center sm:pt-[60px] з
                    laptop:
                    desktop:">
                        <p className={`
                        sm:pb-[10px]
                        laptop:pb-3
                        desktop:pb-[20px] 
                        ${Styles.logo__text_name}`}> Flower fracht Karaganda</p>
                        <h1 className={`
                        sm:pb-[30px]
                        laptop:pb-3
                        desktop:pb-[20px] 
                        ${Styles.header_text}`}>Откуда мы везем наши цветы</h1>
                        
                        {/* TEXT SECTION */}
                        <div className={Styles.conteiner}>
                            <span className={Styles.warehouse__text_bold}>
                            Наши цветы — не только произведения природы, но и воплощение мирового многообразия, доставляемого нам прямо из живописных уголков планеты, чтобы каждый букет из Flower Fracht Karaganda стал уникальным путеводителем в мир красоты и элегантности.
                            </span>
                            <p className={`
                        sm:py-[14px]
                        laptop:
                        desktop:
                        ${Styles.warehouse__text_italic}`}>Прекрасные цветы, несут в себе великолепие и свежесть, привезенные непосредственно из самых питательных уголков природы. Наша компания Flower Fracht Karaganda гордится тем, что мы тщательно подбираем каждый вид цветов, организуя прямые поставки из регионов, известных своими уникальными сортами и безукоризненным качеством.</p>
                            <p className={`
                        sm:pb-[30px]
                        laptop:
                        desktop:
                        ${Styles.warehouse__text_italic}`}>
                             Мы привозим цветы и растения в горшках из <span className={Styles.warehouse__text_bold}>Эквадора, Кении, Колумбии, Чили, Голландии, Израиля</span> и доставляем их свежими во все регионы <span>СНГ</span>.</p>
                        </div>

                        {/* BUTTON */}
                        <div className="sm:pb-[50px]">
                            <Button />
                        </div>

                        {/* MAP */}
                        <div className="w-[110%] items-center justify-center flex overflow-auto cover">
                            <img src={Map} alt="map"/>
                        </div>

                        {/* PARAGRAF */}
                        <div className="sm:py-[20px]">
                            <p className={Styles.warehouse__text_italic}>Доставка в Москву занимает от <span className={Styles.warehouse__text_bold}>1</span> до <span className={Styles.warehouse__text_bold}>2</span> дней</p>
                        </div>

                        <img src={Countries} alt=""/>
                    </div>
                    
                </div>
            </section>
        </>)
}
export default Warehouses;
