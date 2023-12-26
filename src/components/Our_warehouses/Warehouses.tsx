import React from "react";
import Styles from './Warehouses.module.css';
import Button from "../ButtonConnect/Button_connection";
import Map from '../../assets/images/Map.svg';

interface WarehousesProps {
    menuButtonState: boolean;
}

const Warehouses: React.FC<WarehousesProps> = ({ menuButtonState }) => {

    return (
        <>
            <section className={menuButtonState ? `sm:hidden min-h-screen ${Styles.section_hidden}` : Styles.warehouses__section} >
                <div className='flex 
        sm:flex-col sm:justify-center sm:items-center'>{/**.warehouses__section_container */}
                    <div>
                        <p className={Styles.logo__text_name}> Flower fracht Karaganda</p>
                        <h1 className={Styles.header_text}>Откуда мы везем наши цветы</h1>
                        <div>
                            <span>
                                По своей сути рыбатекст является альтернативой традиционному lorem ipsum
                            </span>
                            <p>Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке.</p>
                            <p>Мы привозим цветы и растения в горшках из <span>Эквадора, Кении, Колумбии, Чили, Голландии, Израиля</span> и доставляем их свежими во все регионы СНГ.</p>
                            <div>
                                <Button />
                            </div>
                        </div>
                        <div>
                            <img src={Map} alt="map"/>
                        </div>
                    </div>

                </div>
            </section>
        </>)
}
export default Warehouses;
