import React,{ useEffect, useState} from "react";
import Style from './CalculationShipment_1step.module.css';
import location_icon from '../../../assets/images/Location_icon.svg';
import arrow from '../../../assets/images/arrow.svg';
import Way from '../../../assets/images/Way.svg';
import WayEng from '../../../assets/images/WayEng.svg';
import { useSelector} from 'react-redux';
import { RootState } from '../../../state/store';
import Map_icon from '../../../assets/images/map_calc_bd.svg';
import { useTranslation } from 'react-i18next';
import '../../../Translation/Translation';

// type LangType = 'ru' | 'en';


const CaulculationShipment = () => {
    const { t } = useTranslation();
    const langState = useSelector((state: RootState) => state.LangStateReducer.language);

    const [country, setCountry] = useState<string>('ecuador'); // Тип для страны
    const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, '0');
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const year = currentDate.getFullYear();
    const formattedDate = `${year}-${month}-${day}`;
    const [startDate, setStartDate] = useState<string>(formattedDate);

    const [shipmentDate, setShipmentDate] = useState<string>('XX-XX-2024');
    const [shipmentCollectionDate, setShipmentCollectionDate] = useState('XX-XX-2024');

    const countryNamesRus: { [key: string]: string } = {
        ecuador: 'Эквадор',
        kenia: 'Кения',
        columbia: 'Колумбия', 
        chilli: 'Чили',
        israel: 'Израиль',
        golland: 'Голландия',
        spain: 'Испания',
    };
    const countryNamesEng: { [key: string]: string } = {
        ecuador: 'Ecuador',
        kenia: 'Kenya',
        columbia: 'Colombia',
        chilli:'Chile',
        israel: 'Israel',
        golland: 'Netherlands',
        spain: 'Spain'
    };
    

    const handleCountryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCountry(event.target.value); // Обновить состояние при выборе страны
    };

    useEffect(() => {
        const langDate = (current: Date) => {
            // Форматируем дату обратно в строку 'YYYY-MM-DD'
            const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long' };
            let formattedDate;
            if (langState === 'ru') {
                formattedDate = new Intl.DateTimeFormat('ru-RU', options).format(current);
            } else {
                formattedDate = new Intl.DateTimeFormat('en-En', options).format(current);
            }
            return formattedDate;
        };
    
        const calculateShipmentDateCollection = (date: string) => {
            const current = new Date(date);
            current.setDate(current.getDate() + 3);
            const shipmentCollectionDate = langDate(current);
            setShipmentCollectionDate(shipmentCollectionDate);
        };
    
        const calculateShipmentDate = (date: string) => {
            const current = new Date(date);
            current.setDate(current.getDate() + 7);  // Добавляем 7 дней к текущей дате
            const shipmentDateString = langDate(current);
            setShipmentDate(shipmentDateString);
        };
    
        calculateShipmentDateCollection(startDate);
        calculateShipmentDate(startDate);
    }, [startDate, langState]); // Эффект будет перезапускаться при изменении startDate или langState

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
                            <h1 className={Style.calc__header_text}>{t('calc_header')}</h1>

                            {/* COUNTY CHOICE BAR */}
                            <fieldset className={Style.radioGroup}>
                                    <legend> 
                                        <div className={Style.calc__text_step}>
                                            <div className={Style.calc__container_number}>
                                                <p className={Style.calc__number}>01</p>
                                            </div>
                                            <p className={`${Style.calc__text} text_normal_itallic`}>{t('calc_step1_header')}</p>
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
                                        <span className={Style.text}>{t('calc_countyName_equador')}</span>
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
                                        <span className={Style.text}>{t('calc_countyName_kenia')}</span>
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
                                        <span className={Style.text}>{t('calc_countyName_columbia')}</span>
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
                                        <span className={Style.text}>{t('calc_countyName_chilli')}</span>
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
                                        <span className={Style.text}>{t('calc_countyName_israel')}</span>
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
                                        <span className={Style.text}>{t('calc_countyName_netherland')}</span>
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
                                        <span className={`${Style.text} text_normal_itallic`}>{t('calc_countyName_spain')}</span>
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
                                            <p className={`${Style.calc__text} text_normal_itallic`}>{t('calc_step2_header')}</p>
                                        </div>

                                        <div className={`max-w-[470px] sm:grid sm:grid-rows-4 sm:gap-[auto] laptop:grid desktop:grid ${Style.calc__container_results}`}>
                                            <div className={Style.country__name_main}>
                                            <img src={location_icon} alt="location icon"/>
                                            {/* если английски, то вывести ключи, если русский, то значения */}
                                            <p className={Style.country__name}>{langState==='ru' ? countryNamesRus[country]:countryNamesEng[country]}</p>
                                            </div>
                                        <div className={`grid pb-[35px] gap-[20px] grid-cols-50/50 laptop:hidden laptop:invisible desktop:hidden desktop:invisible ${Style.calc__container_results_date2}`}>
                                            <label className="text_normal_itallic">{t('calc_orderDate')}</label>
                                            <span className={Style.date}>
                                                <span className={Style.datepicker__toggle_button}>
                                                    <img src={arrow} alt="arrow" className="absolute right-1"/>
                                                    <p className="text_normal_itallic sm:pl-2">{startDate}</p>
                                                </span>
                                            
                                            <input
                                                type="date"
                                                className={Style.datepicker_input}
                                                id="start"
                                                name="ship-start"
                                                value={startDate} // Используем состояние для значения
                                                min="2018-01-01"
                                                max="2024-12-31"
                                                onChange={e => {
                                                    setStartDate(e.target.value);
                                                }}
                                            />
                                            </span>
                                        </div>

                                    <div className={`gap-[3%] pb-[20px] grid grid-cols-50/50 sm:gap-[20px] sm:pb-[35px] ${Style.calc__container_results_dateLaptop}`}>
                                        <p className="text_normal_itallic">{t('calc_endOfOrdering')}</p>
                                        <p className="text_normal_itallic">{shipmentCollectionDate}</p>
                                    </div>
                                    <div className={`grid pb-[35px] gap-[20px] grid-cols-50/50  grid-rows-[20px] laptop:hidden laptop:invisible desktop:hidden desktop:invisible ${Style.calc__container_results_date2}`}>
                                        <p className="text_normal_itallic">{t('calc_shipment')}</p>
                                        <p className="text_normal_itallic">{t('calc_shipment_last')}</p>
                                    </div>

                                    <div className={`gap-[3%] pb-[20px] grid grid-cols-50/50 sm:gap-[20px] sm:pb-[35px] ${Style.calc__container_results_dateLaptop}`}>
                                        <p className="text_normal_itallic">{t('calc_day_shipment')}</p>
                                        <p className="text_normal_itallic">{shipmentDate}</p>
                                    </div>
                                </div>
                                </legend>

                                

                                
                        </div>
                        
                        <div className={`sm:hidden sm:invisible ${Style.calc__container_stepTwo}`}>
                            <div className={Style.map_icon_small_bg}></div>
                            {/* <img src={map} alt="map left" className="absolute left-0 bottom-0"/> */}
                            {/* DATE CHOICE BAR */}
                            <div className={`sm:hidden sm:invisible ${Style.calc__container_stepTwo_without_number}`}>
                                
                                {/* MAP WAY */}
                                <div className="flex flex-col w-full relative">
                                    <div className={`laptop:flex laptop:pr-8 desktop:flex desktop:pr-8 ${Style.map__section}`}>
                                        <div className={`sm:bg-inherit sm:hidden sm:invisible w-full h-full bg-customColor ${Style.map__way}`}>
                                            <div className={`desktop:pl-[2%] desktop:pr-[2%] desktop:pt-[3%] desktop:flex desktop:flex-col desktop:items-center desktop:justify-center desktop:min-h-[350px]
                                                            laptop:-[2%] laptop:pr-[2%] laptop:pt-[3%] laptop:flex laptop:flex-col laptop:items-center laptop:justify-center laptop:min-h-[350px] ${Style.map__div}`}>
                                                <div className="flex gap-2 left sm:pb-6 pb-5">
                                                    <img src={location_icon} alt="location icon"/>
                                                    {/* При выборе языка вывести ключ */}
                                                    <p className={Style.country__name}>{langState==='ru' ? countryNamesRus[country]:countryNamesEng[country]}</p>
                                                </div>
                                                <img src={langState==='ru' ? Way : WayEng } alt="way of" className={Style.way}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`sm:hidden sm:invisible grid grid-cols-[55%_45%] w-[250px] pt-[20px] ${Style.calc__container_results_date1}`}>
                                            <label className="text_normal_itallic">{t('calc_orderDate')}</label>
                                            <span className={Style.date}>
                                                <span className={Style.datepicker__toggle_button}>
                                                    <img src={arrow} alt="arrow" className="absolute right-3"/>
                                                    <p className="text_normal_itallic sm:pl-6">{startDate}</p>
                                                </span>
                                            
                                                <input
                                                    type="date"
                                                    className={Style.datepicker_input}
                                                    id="start"
                                                    name="ship-start"
                                                    value={startDate} // Используем состояние для значения
                                                    min="2018-01-01"
                                                    max="2024-12-31"
                                                    onChange={e => {
                                                        setStartDate(e.target.value);
                                                    }}
                                                />
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