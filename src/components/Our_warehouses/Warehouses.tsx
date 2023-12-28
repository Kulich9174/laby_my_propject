import React from "react";
import Styles from './Warehouses.module.css';
import Button from "../ButtonConnect/Button_connection";
import map from '../../assets/images/MAPS2.svg';
import Ruler from '../Ruler_cities/Ruler_cities';
import countries from '../../assets/images/Country.svg';
import countriesLaptop from '../../assets/images/Countries_laptop.svg';
import smallAirplane from '../../assets/images/Small_airplane.svg';
interface WarehousesProps {
    menuButtonState: boolean;
}

const Warehouses: React.FC<WarehousesProps> = ({ menuButtonState }) => {

    return (
        <>
            <section className={menuButtonState ? `sm:hidden min-h-screen ${Styles.section_hidden}` : Styles.warehouses__section} >
                {/* CONTAINER GLOBAL*/}
                <div className=' px-[15px] relative
                sm:flex 
                laptop:grid
                desktop:'>
                    {/* CONTAINER */}
                    <div className=" relative
                    sm:flex-col sm:justify-center sm:items-center sm:pt-[60px] sm:flex
                    laptop:grid laptop:grid-cols-40/60
                    desktop:">
                        <div className="
                        sm:justify-center sm:items-center sm:flex sm:flex-col
                        laptop:py-[80px]">
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
                        laptop:pb-[40px]
                        desktop:
                        ${Styles.warehouse__text_italic}`}>
                                    Мы привозим цветы и растения в горшках из <span className={Styles.warehouse__text_bold}>Эквадора, Кении, Колумбии, Чили, Голландии, Израиля</span> и доставляем их свежими во все регионы <span>СНГ</span>.</p>
                            </div>
                            {/* BUTTON */}
                            <div className="sm:pb-[50px]">
                                <Button />
                            </div>
                        </div>

                        <div className="relative
                        sm:flex-col sm:items-center sm:justify-center sm:flex
                        ">
                            <div className="flex justify-end items-start">
                                <img src={countriesLaptop} alt="" className="
                                sm:hidden
                                laptop:pb-5 "/>
                            </div>
                            
                            {/* PARAGRAF LAPTOP/DESKTOP*/}
                            <div className="sm:hidden
                            laptop: pb-10 pl-[20px] laptop:max-w-[30%]">
                                <p className={Styles.warehouse__text_italic}>Доставка в Москву занимает от <span className={Styles.warehouse__text_bold}>1</span> до <span className={Styles.warehouse__text_bold}>2</span> дней</p>
                            </div> 

                            {/* SMALL AIRPLANE */}
                            <img className='absolute right-0 top-[120px]' src={smallAirplane} alt="small airplane"/>
                            {/* MAP */}
                            <div className="w-full overflow-hidden cover">
                                <img src={map} alt="map" />
                            </div>

                            {/* PARAGRAF SMARTPHONE*/}
                            <div className="sm:py-[20px]
                            laptop:hidden
                            desktop:hidden">
                                <p className={Styles.warehouse__text_italic}>Доставка в Москву занимает от <span className={Styles.warehouse__text_bold}>1</span> до <span className={Styles.warehouse__text_bold}>2</span> дней</p>
                            </div>

                            <img className="
                            laptop:hidden
                            desktop:hidden" src={countries} alt="Ruler countries" />
                        </div>
                    </div>
                </div>
            </section>
        </>)
}
export default Warehouses;
