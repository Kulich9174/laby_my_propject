import React from "react";
import Styles from './ContactsSalesGroup.module.css';

const ContactsSalesGroup = () =>{
    return(
        <>
        <section className={Styles.contacts__content}>
            <div className={Styles.contacts__content_bg}></div>
            <section className={Styles.contacts__content_section}>
                <div className={Styles.contacts__content_borders}>
                    <div className={Styles.contacts__content_container}>
                        <div className={Styles.contact_header}>
                            <p>Flower Fracht Karaganda</p>
                            <h1>Группы продаж</h1>
                        </div>
                        <div className={Styles.contacts_container_inputs}>
                            <div className={Styles.contacts__container_country}>

                            </div>
                            <div className={Styles.contacts__container_meneger}>

                            </div>
                        </div>
                        <div className={Styles.contacts__list}>

                        </div>
                    </div>
                </div>
                </section>
            </section>
        </>
    )
}
export default ContactsSalesGroup;