import React,{useState} from "react";
import Style from './CalculationShipment.module.css';

const CaulculationShipment = () => {
    const [country, setCountry] = useState<string>(''); // Тип для страны
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().substr(0, 10);
    const [startDate, setStartDate] = useState<string>(formattedDate); // Тип для начальной даты
    const [shipmentDate, setShipmentDate] = useState<string>('');
    const [shipmentCollectionDate, setShipmentCollectionDate] = useState(formattedDate);

    function calculateShipmentDateCollection(date:string) {
        const current = new Date(date);
        current.setDate(current.getDate() + 3);
        // Форматируем дату обратно в строку 'YYYY-MM-DD'
        const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long' };
        const shipmentCollectionDateString = new Intl.DateTimeFormat('ru-RU', options).format(current) + ' в 16:00';
        setShipmentCollectionDate(shipmentCollectionDateString);
    }

    const calculateShipmentDate = (date: string) => {
        const current = new Date(date);
        current.setDate(current.getDate() + 10);  // Добавляем 10 дней к текущей дате
        // Форматируем дату в строку "день месяц в 16:00"
        const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long' };
        const shipmentDateString = new Intl.DateTimeFormat('ru-RU', options).format(current);
        setShipmentDate(shipmentDateString);
    }

    return(
        <>
            <section>
                <div>
                    <p>flower fracht karaganda</p>
                    <h2>Калькулятор доставки</h2>

                    {/* COUNTY CHOICE BAR */}
                    <fieldset>
                            <legend> 
                                <div>
                                <div>
                                    <p>01</p>
                                </div>
                                    <p>Выберите страну по которой хотите узнать время достатвки</p>
                                </div>
                        </legend>
                            <div>
                                <input type="radio" id="ecuador" name="country" value="ecuador" checked />
                                <label>Эквадор</label>
                            </div>
                            <div>
                                <input type="radio" id="kenia" name="country" value="kenia" />
                                <label>Кения</label>
                            </div>
                            <div>
                                <input type="radio" id="columbia" name="country" value="columbia" />
                                <label>Колумбия</label>
                            </div>
                            <div>
                                <input type="radio" id="chilli" name="country" value="chilli" />
                                <label>Чили</label>
                            </div>
                            <div>
                                <input type="radio" id="israel" name="country" value="israel" />
                                <label>Израель</label>
                            </div>
                            <div>
                                <input type="radio" id="golland" name="country" value="golland" />
                                <label>Голландия</label>
                            </div>
                            <div>
                                <input type="radio" id="spain" name="country" value="spain" />
                                <label>Испания</label>
                            </div>
                        </fieldset>
                        {/* DATE CHOICE BAR */}
                        <div>
                        <div>
                            <p>02</p>
                        </div>
                        <p>Что бы рассчитать дату доставки выберите день когда планируете сделать заказ</p>
                        
                        <div>
                            <div>
                                <img src="" alt="location icon"/>
                                <p>{country}</p>
                            </div>
                            <div>
                                <label>Дата заказа</label>
                                <input  type="date" 
                                        id="start" 
                                        name="ship-start" 
                                        value={startDate} // Используем состояние для значения
                                        min="2018-01-01" 
                                        max="2024-12-31" 
                                        onChange={e => {
                                            setStartDate(e.target.value);
                                            calculateShipmentDateCollection(e.target.value);
                                            calculateShipmentDate(e.target.value);
                                            }} />
                            </div>
                            <div>
                                <p>Конец сбора заказов</p>
                                <p>{shipmentCollectionDate}</p>
                            </div>
                            <div>
                                <p>Доставка</p>
                                <p>7 дней</p>
                            </div>

                            <div>
                                <p>День поставки</p>
                                <p>{shipmentDate}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CaulculationShipment;