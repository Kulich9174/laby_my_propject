import React from "react";
import '../../global.css'
import Numbers from '../../components/About_us/Numbers';
import MainSlide from '../../components/Main slide/main slide';
import Warehouses from '../../components/Our_warehouses/Warehouses';
import CaulculationShipment from "../../components/Calculation_shipment/CalculationShipment";

const MainPage: React.FC = () => {

    return (
        <>
        <div className=' h-full w-full flex flex-col flex-grow-3'>
            <MainSlide/>
            <Numbers/>
            <Warehouses/> 
            <CaulculationShipment/>
        </div>
        
        </>
    );
}

export {MainPage};
