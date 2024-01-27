import React from "react";
import Styles from './Warehouses.module.css';
import map from '../../../assets/images/MAPS2.svg';
import countries from '../../../assets/images/Country.svg';
import countriesLaptop from '../../../assets/images/Countries_laptop.svg';
import smallAirplane from '../../../assets/images/Small_airplane.svg';
import Button from '../ButtonConnect/Button_connection';
// import { useSelector} from 'react-redux';
// import { RootState } from '../../../state/store';

const Warehouses: React.FC = () => {
    // const headerStateValue = useSelector((state: RootState)=>state.headerMenuState.value);

    return (
        <>
            {/* <section className={headerStateValue ? `sm:hidden min-h-screen ${Styles.section_hidden}` : Styles.warehouses__section} > */}
            <section className={Styles.warehouses__section} >
                {/* CONTAINER GLOBAL*/}
                <div className={Styles.borders}>
                    {/* CONTAINER */}
                    <div className={Styles.container_div}>
                        <div className=" 
                        sm:justify-center sm:items-center sm:flex sm:flex-col
                        laptop:py-[80px] laptop:pr-5
                        desktop:py-[120px] desktop:max-w-[85%]">
                            <p className="flowerLogo"> Flower fracht Karaganda</p>
                            <h1 className={`
                        sm:pb-[30px] sm:text-center
                        laptop:pb-6
                        desktop:pb-[54px] 
                        ${Styles.header_text}`}>Откуда мы везем наши цветы</h1>

                            {/* TEXT SECTION */}
                            <div className={Styles.conteiner}>
                                <span className= "text_normal_bold">
                                    Наши цветы — не только произведения природы, но и воплощение мирового многообразия, доставляемого нам прямо из живописных уголков планеты.
                                </span>
                                <p className={`text_normal_itallic
                                    sm:py-[14px]
                                    laptop:py-5
                                    desktop:py-6
                                    ${Styles.warehouse__text_italic}`}>Прекрасные цветы, несут в себе великолепие и свежесть, привезенные непосредственно из самых питательных уголков природы. Наша компания Flower Fracht Karaganda гордится тем, что мы тщательно подбираем каждый вид цветов.</p>
                                <p className={`text_normal_itallic
                                    sm:pb-[30px]
                                    laptop:pb-[40px]
                                    desktop:pb-[70px]
                                    ${Styles.warehouse__text_italic}`}>
                                    Мы привозим цветы и растения в горшках из <span className={Styles.warehouse__text_bold}>Эквадора, Кении, Колумбии, Чили, Голландии, Израиля</span> и доставляем их свежими во все регионы <span>СНГ</span>.</p>
                            </div>
                            {/* BUTTON */}
                            <div className="sm:pb-[50px]">
                                {/* <button className={Styles.warehouse__button_size}>
                                    <p className="text_button">Связаться с нами</p>
                                </button> */}
                                <Button/>
                            </div>
                        </div>

                        <div className={Styles.container_map}>
                            <div className="flex 
                            laptop:justify-end laptop:items-start">
                                <img src={countriesLaptop} alt="" className={Styles.countriesLaptop}/>
                            </div>

                            {/* PARAGRAF LAPTOP/DESKTOP*/}
                            <div className="sm:hidden
                            laptop:pb-10 laptop:ml-[20%] max-w-[30%] laptop:pt-2 desktop:pt-2
                            desktop:pb-[60px] ">
                                <p className={`text_normal_itallic ${Styles.warehouse__text_italic}`}>Доставка в Москву занимает от <span className={Styles.warehouse__text_bold}>1</span> до <span className={Styles.warehouse__text_bold}>2</span> дней</p>
                            </div>

                            {/* SMALL AIRPLANE */}
                            <img className='absolute
                            sm:hidden
                            laptop:right-[30%] laptop:top-[25%]
                            desktop:right-[10%] desktop:top-[25%]' src={smallAirplane} alt="small airplane" />
                            

                            {/* PARAGRAF SMARTPHONE*/}
                            <div className="sm:py-[20px]
                            laptop:hidden
                            desktop:hidden">
                                <p className={`text_normal_itallic ${Styles.warehouse__text_italic}`}>Доставка в Москву занимает от <span className={Styles.warehouse__text_bold}>1</span> до <span className={Styles.warehouse__text_bold}>2</span> дней</p>
                            </div>
                            {/* MAP */}
                            <div className="w-full overflow-hidden contain
                            laptop:flex laptop:justify-center laptop:items-center">
                                <img src={map} alt="map" className="
                                sm:w-[850px] sm:h-[100%] sm:overflow-hidden
                                laptop:w-full laptop:h-full
                                desktop:w-[850px] desktop:h-auto"/>
                            </div>
                            <img className={Styles.countriesMobile} src={countries} alt="Ruler countries" />
                        </div>
                    </div>
                </div>
            </section>
        </>)
}
export default Warehouses;
