import React from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer";

const Layout = () => {
    return(
        <>
            <div className=' h-full w-full flex flex-col'>
                <Header/>
                <Outlet/>
                <Footer/>
            </div>
        </>
    )
}
export {Layout};