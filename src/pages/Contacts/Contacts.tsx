import React from "react";
import MainPageOtherPaths from "../../components/MainPageOnOtherPaths/ForBrokersMainPage/MainPageUnique";
import OrderForm from "../../components/MainPageComponents/OrderForm/OrderForm";
import ContactComponent from '../../components/ContactsComponent/ContactsComponent';

const Contacts = () => {
    return(
        <>
            <div>
                <MainPageOtherPaths/>
                <ContactComponent/>
                <OrderForm/>
            </div>
        </>
    )
}
export { Contacts};