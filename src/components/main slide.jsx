import React from "react";
import flower1 from '../pictures/flower1.jpg';
import flower2 from '../pictures/flower2.jpg';
import flower3 from '../pictures/flower3.jpg';
import flow4 from '../pictures/Rectangle 1.png';
import airplane from '../pictures/Rectangle 2.png'
import Button from './Button_connection';

export default function MainPage() {

    return (
        <>
        <div className="bg-[url('../pictures/Rectungle 2.png')]">
                <p className="uppercase">Flower Fracht Karaganda</p>
                <h1>Авиаперевозка цветов</h1>
                <p>Занимаемся только АВИА перевозкой свеже срезанных цветов и растений из <bold>Эквадора,
Кении, Колумбии, Чили, Голландии, Израиля</bold> до конечного заказчика.</p>
                <bold>Максимальный срок достовки товара - 7 дней от заказа</bold>
                <Button/>
                <div className="flex">
                    <img></img>
                    <svg></svg>
                    <img></img>
                    <img></img>
                </div>
        </div>
        </>
    )
}
