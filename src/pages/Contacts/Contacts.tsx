import React from "react";
import MainPageOtherPaths from "../../components/MainPageOnOtherPaths/ForBrokersMainPage/MainPageUnique";
import OrderForm from "../../components/MainPageComponents/OrderForm/OrderForm";
import ContactComponent from '../../components/ContactsComponentData/ContactsGallery/ContactsComponent';
import ContactsSalesGroup from "../../components/ContactsComponentData/ContactsSalesGroup/ContactsSalesGroup";

const Contacts = () => {
    return(
        <>
            <div>
                <MainPageOtherPaths/>
                <ContactComponent/>
                <ContactsSalesGroup/>
                <OrderForm/>
            </div>
        </>
    )
}
export { Contacts};