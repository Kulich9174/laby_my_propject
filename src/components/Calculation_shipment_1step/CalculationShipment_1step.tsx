import React,{ useState} from "react";
import Style from './CalculationShipment_1step.module.css';
import location_icon from '../../assets/images/Location_icon.svg';
import { useSelector} from 'react-redux';
import { RootState } from '../../state/store';


const CaulculationShipment = () => {
    const headerStateValue = useSelector((state: RootState)=>state.headerMenuState.value);
    const [country, setCountry] = useState<string>('ecuador'); // Тип для страны
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString();
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
            <section className={headerStateValue ? `sm:hidden min-h-screen ${Style.section_hidden}` : Style.calc__container_section}>
                <div className={Style.calc__container_stepOne}>
                    <p className={Style.calc__logo_textName}>flower fracht karaganda</p>
                    <h2 className={Style.calc__header_text}>Калькулятор доставки</h2>

                    {/* COUNTY CHOICE BAR */}
                    <fieldset className={Style.radioGroup}>
                            <legend> 
                                <div className={Style.calc__text_step}>
                                    <div className={Style.calc__container_number}>
                                        <p className={Style.calc__number}>01</p>
                                    </div>
                                    <p className={Style.calc__text}>Выберите страну по которой хотите узнать время достатвки</p>
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
                                <span className={Style.text}>Испания</span>
                                </label>
                            </div>
                        </div>
                        </fieldset>
                </div>
                <div className={Style.separate_line}></div>
                <div className={Style.calc__container_stepTwo}>
                    {/* DATE CHOICE BAR */}
                    <div>
                        <legend> 
                                <div className={Style.calc__text_step}>
                                    <div className={Style.calc__container_number}>
                                        <p className={Style.calc__number}>02</p>
                                    </div>
                                    <p className={Style.calc__text}>Что бы рассчитать дату доставки выберите день когда планируете сделать заказ</p>
                                </div>
                        </legend>
                        <div className='flex flex-col'>
                            <div className="flex gap-2 sm:pb-6">
                                <img src={location_icon} alt="location icon"/>
                                <p className="w-full uppercase leading-6">{countryNames[country]}</p>
                            </div>
                        <div  className={Style.calc__container_results}>
                            <div className={Style.calc__container_results_date}>
                                <label>Дата заказа</label>
                                <span>
                                    <span></span>
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
                                <p>Конец сбора заказов</p>
                                <p>{shipmentCollectionDate}</p>
                            </div>
                            <div className={Style.calc__container_results_date}>
                                <p>Доставка</p>
                                <p>7 дней</p>
                            </div>

                            <div className={Style.calc__container_results_date}>
                                <p>День поставки</p>
                                <p>{shipmentDate}</p>
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