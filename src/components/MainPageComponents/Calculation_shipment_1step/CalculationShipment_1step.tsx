import React,{ useState} from "react";
import Style from './CalculationShipment_1step.module.css';
import location_icon from '../../../assets/images/Location_icon.svg';
// import map from '../../../assets/images/mapSmall.svg';
// import map from '../../../assets/images/map_calc_bg_small.svg';
// import map2 from '../../../assets/images/mapSmall2.svg';
import arrow from '../../../assets/images/arrow.svg';
import Way from '../../../assets/images/Way.svg';
// import { useSelector} from 'react-redux';
// import { RootState } from '../../../state/store';
import Map_icon from '../../../assets/images/map_calc_bd.svg';


const CaulculationShipment = () => {
    // const headerStateValue = useSelector((state: RootState)=>state.headerMenuState.value);
    const [country, setCountry] = useState<string>('ecuador'); // Тип для страны
    const currentDate = new Date();
    // Получаем день, месяц и год в виде строк
    const day = String(currentDate.getDate()).padStart(2, '0');
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Месяцы начинаются с 0
    const year = String(currentDate.getFullYear()).substring(2); // Получаем последние 2 цифры года

    const formattedDate = `${year}-${month}-${day}`;
    const [startDate, setStartDate] = useState<string>(formattedDate); // Тип для начальной даты

    const [shipmentDate, setShipmentDate] = useState<string>('XX-XX-2024');
    const [shipmentCollectionDate, setShipmentCollectionDate] = useState('XX-XX-2024');

    const countryNames: { [key: string]: string } = {
        ecuador: 'Эквадор',
        kenia: 'Кения',
        columbia: 'Колумбия',
        chilli: 'Чили',
        israel: 'Израиль',
        golland: 'Голландия',
        spain: 'Испания'
    };

    const handleCountryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCountry(event.target.value); // Обновить состояние при выборе страны
    };


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
        current.setDate(current.getDate() + 7);  // Добавляем 10 дней к текущей дате
        // Форматируем дату в строку "день месяц в 16:00"
        const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long' };
        const shipmentDateString = new Intl.DateTimeFormat('ru-RU', options).format(current);
        setShipmentDate(shipmentDateString);
    }

    return(
        <>
            {/* <section className={headerStateValue ? `sm:hidden min-h-screen ${Style.section_hidden}` : Style.calc__container_section}> */}
                <section className={Style.calc__container_section}>
                    <div className={Style.calc__container_div}>
                    <img src={Map_icon} alt="map background icon" className={Style.bg_icon_big}/>
                    <div className={Style.borders}>
                        <div className={Style.container}>
                            <div className={Style.calc__container_stepOne}>
                                {/* <img src={map} alt="map" className="absolute right-0 top-0"/> */}
                            <p className="flowerLogo">flower fracht karaganda</p>
                            <h1 className={Style.calc__header_text}>Калькулятор доставки</h1>

                            {/* COUNTY CHOICE BAR */}
                            <fieldset className={Style.radioGroup}>
                                    <legend> 
                                        <div className={Style.calc__text_step}>
                                            <div className={Style.calc__container_number}>
                                                <p className={Style.calc__number}>01</p>
                                            </div>
                                            <p className={`${Style.calc__text} text_normal_itallic`}>Выберите страну по которой хотите узнать время достатвки</p>
                                        </div>
                                </legend>

                                <div  className={Style.calc__radio_container}>
                                    <div className={Style.calc__radio}>
                                        <label htmlFor="ecuador" className={Style.custom__radio}>
                                        <input 
                                            type="radio" 
                                            id="ecuador" 
                                            name="country" 
                                            value="ecuador" 
                                            checked={country === 'ecuador'} 
                                            onChange={handleCountryChange} 
                                        />
                                        <span className={Style.radio}></span>
                                        <span className={Style.text}>Эквадор</span>
                                        </label>
                                    </div>

                                    <div className={Style.calc__radio}>
                                    <label htmlFor="kenia" className={Style.custom__radio}>
                                    <input 
                                            type="radio" 
                                            id="kenia" 
                                            name="country" 
                                            value="kenia" 
                                            checked={country === 'kenia'} 
                                            onChange={handleCountryChange}/>
                                        <span className={Style.radio}></span>
                                        <span className={Style.text}>Кения</span>
                                        </label>
                                    </div>

                                    <div className={Style.calc__radio}>
                                        <label htmlFor="columbia" className={Style.custom__radio}>
                                        <input 
                                            type="radio" 
                                            id="columbia" 
                                            name="country" 
                                            value="columbia"
                                            checked={country === 'columbia'} 
                                            onChange={handleCountryChange} />
                                        <span className={Style.radio}></span>
                                        <span className={Style.text}>Колумбия</span>
                                        </label>
                                    </div>

                                    <div className={Style.calc__radio}>
                                        <label htmlFor="chilli" className={Style.custom__radio}>
                                        <input 
                                            type="radio" 
                                            id="chilli" 
                                            name="country" 
                                            value="chilli" 
                                            checked={country === 'chilli'} 
                                            onChange={handleCountryChange}/>
                                        <span className={Style.radio}></span>
                                        <span className={Style.text}>Чили</span>
                                        </label>
                                    </div>

                                    <div className={Style.calc__radio}>
                                        <label htmlFor="israel" className={Style.custom__radio}>
                                        <input 
                                            type="radio" 
                                            id="israel" 
                                            name="country" 
                                            value="israel" 
                                            checked={country === 'israel'} 
                                            onChange={handleCountryChange}/>
                                        <span className={Style.radio}></span>
                                        <span className={Style.text}>Израель</span>
                                        </label>
                                    </div>

                                    <div className={Style.calc__radio}>
                                        <label htmlFor="golland" className={Style.custom__radio}>
                                        <input 
                                            type="radio" 
                                            id="golland" 
                                            name="country" 
                                            value="golland" 
                                            checked={country === 'golland'} 
                                            onChange={handleCountryChange}/>
                                        <span className={Style.radio}></span>
                                        <span className={Style.text}>Голландия</span>
                                        </label>
                                    </div>

                                    <div className={Style.calc__radio}>
                                        <label htmlFor="spain" className={Style.custom__radio}>
                                        <input 
                                            type="radio" 
                                            id="spain" 
                                            name="country" 
                                            value="spain" 
                                            checked={country === 'spain'} 
                                            onChange={handleCountryChange}/>
                                        <span className={Style.radio}></span>
                                        <span className={`${Style.text} text_normal_itallic`}>Испания</span>
                                        </label>
                                    </div>
                                </div>
                                </fieldset>

                                <div className={Style.separate_line_mob}></div>

                                <legend className={Style.legend_second}> 
                                        <div className={Style.calc__text_step}>
                                            <div className={Style.calc__container_number}>
                                                <p className={Style.calc__number}>02</p>
                                            </div>
                                            <p className={`${Style.calc__text} text_normal_itallic`}>Что бы рассчитать дату доставки выберите день когда планируете сделать заказ</p>
                                        </div>

                                        <div  className={Style.calc__container_results}>
                                            <div className={Style.country__name_main}>
                                            <img src={location_icon} alt="location icon"/>
                                            <p className={Style.country__name}>{countryNames[country]}</p>
                                            </div>
                                        <div className={Style.calc__container_results_date2}>
                                            <label className="text_normal_itallic">Дата заказа</label>
                                            <span className={Style.date}>
                                                <span className={Style.datepicker__toggle_button}>
                                                    <img src={arrow} alt="arrow" className="absolute right-1"/>
                                                    <p className="text_normal_itallic sm:pl-2">{startDate}</p>
                                                </span>
                                            
                                            <input  type="date" className={Style.datepicker_input} 
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
                                            </span>
                                        </div>

                                    <div className={`${Style.calc__container_results_date} `}>
                                        <p className="text_normal_itallic">Конец сбора заказов</p>
                                        <p className="text_normal_itallic">{shipmentCollectionDate}</p>
                                    </div>
                                    <div className={`laptop:hidden desktop:hidden ${Style.calc__container_results_date2}`}>
                                        <p className="text_normal_itallic">Доставка</p>
                                        <p className="text_normal_itallic">7 дней</p>
                                    </div>

                                    <div className={Style.calc__container_results_date}>
                                        <p className="text_normal_itallic">День поставки</p>
                                        <p className="text_normal_itallic">{shipmentDate}</p>
                                    </div>
                                </div>
                                </legend>

                                

                                
                        </div>
                        
                        <div className={Style.calc__container_stepTwo}>
                            <div className={Style.map_icon_small_bg}></div>

                            {/* <img src={map} alt="map left" className="absolute left-0 bottom-0"/> */}
                            {/* DATE CHOICE BAR */}
                            <div className={Style.calc__container_stepTwo_without_number}>
                                
                                {/* MAP WAY */}
                                <div className="flex flex-col w-full relative">
                                    <div className={Style.map__section}>
                                        <div className={Style.map__way}>
                                            <div className={Style.map__div}>
                                                <div className="flex gap-2 left sm:pb-6 pb-5">
                                                    <img src={location_icon} alt="location icon"/>
                                                    <p className={Style.country__name}>{countryNames[country]}</p>
                                                </div>
                                                <img src={Way} alt="way of" className={Style.way}/>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <div className={Style.calc__container_results_date1}>
                                            <label className="text_normal_itallic">Дата заказа</label>
                                            <span className={Style.date}>
                                                <span className={Style.datepicker__toggle_button}>
                                                    <img src={arrow} alt="arrow" className="absolute right-3"/>
                                                    <p className="text_normal_itallic sm:pl-6">{startDate}</p>
                                                </span>
                                            
                                            <input  type="date" className={Style.datepicker_input} 
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
                                            </span>
                                        </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CaulculationShipment;