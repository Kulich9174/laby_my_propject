import React from "react";
import calendar from '../../assets/images/Calendar.svg';
import weight from '../../assets/images/Weight.svg';
import paper from '../../assets/images/Paper.svg';
import airplane from '../../assets/images/Airplane.svg';
import temperature from '../../assets/images/Temperature.svg';
import smile from '../../assets/images/Smile.svg';
import Styles from './Number.module.css';

interface NumberProps {
    menuButtonState: boolean;
}

const Numbers: React.FC<NumberProps> = ({ menuButtonState }) => {

    return(
        <>
        <section className="main__section">
            <div className="all the block">
                <p>Flower Fracht Karaganda</p>
                <h1>О нас в цифрах</h1>
                <div className="container">
                    {/* CALENDAR */}
                    <div className="one section">
                        <img src={calendar} alt="calendar_icon" className=""/>
                        <div className="text__info">
                            <h2>7 лет</h2>
                            <p>Успешно работаем уже более семи лет</p>
                        </div>
                    </div>
                    {/* WEIGHT */}
                    <div className="one section">
                        <img src={weight} alt="calendar_icon" className=""/>
                        <div className="text__info">
                            <h2>775 тонн</h2>
                            <p>Мы перевезли почти 780 тонн груза</p>
                        </div>
                    </div>
                     {/* PERSENT */}
                    <div className="one section">
                        <img src={paper} alt="calendar_icon" className=""/>
                        <div className="text__info">
                            <h2>94 %</h2>
                            <p>Средний процент выполнения заказа 94%</p>
                        </div>
                    </div>
                     {/* PLANE */}
                    <div className="one section">
                        <img src={airplane} alt="calendar_icon" className=""/>
                        <div className="text__info">
                            <h2>14 стран</h2>
                            <p>Осуществляем перевозки из 14 стран</p>
                        </div>
                    </div>
                     {/* TEMPERATURE */}
                    <div className="one section">
                        <img src={temperature} alt="calendar_icon" className=""/>
                        <div className="text__info">
                            <h2>+2/8 градуса</h2>
                            <p>Соблюдение температур при перевозке</p>
                        </div>
                    </div>
                     {/* CLIENTS */}
                    <div className="one section">
                        <img src={smile} alt="calendar_icon" className=""/>
                        <div className="text__info">
                            <h2>174 клиента</h2>
                            <p>С нами работают 174 клиента</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default Numbers;