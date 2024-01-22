import React from "react";
import '../../global.css'
import Numbers from '../../components/MainPageComponents/About_us/Numbers';
import MainSlide from '../../components/MainPageComponents/Main slide/main slide';
import Warehouses from '../../components/MainPageComponents/Our_warehouses/Warehouses';
import CaulculationShipment from "../../components/MainPageComponents/Calculation_shipment_1step/CalculationShipment_1step";
import Tariff from "../../components/MainPageComponents/Tariff/Tariff";
import OrderForm from "../../components/MainPageComponents/OrderForm/OrderForm";
const MainPage: React.FC = () => {

    return (
        <>
        <div className=' h-full w-full flex flex-col flex-grow-3'>
            <MainSlide/>
            <Numbers/>
            <Warehouses/> 
            <CaulculationShipment/>
            <Tariff/>
            <OrderForm/>
        </div>
        
        </>
    );
}

export {MainPage};
