import React from "react";
import MainPageOtherPaths from "../../components/MainPageOnOtherPaths/ForBrokersMainPage/MainPageUnique";
import BrockersPageComponent from "../../components/ForBrokersComponents/BrockersPageComponent";

const BrockersPage = () => {
    return(
        <>
            <div className="">
                <MainPageOtherPaths/>
                <BrockersPageComponent/>
            </div>
        </>
    )
}
export { BrockersPage};