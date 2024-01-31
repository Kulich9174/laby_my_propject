import React from "react";
import Styles from './Contacts.module.css';
import { useTranslation } from 'react-i18next';
import '../../Translation/Translation';
import { useSelector} from 'react-redux';
import { RootState } from '../../state/store';
import phone from '../../assets/images/Phone.svg';
import email from '../../assets/images/Mail.svg';
import location from '../../assets/images/Location.svg';

const ContactComponent = () =>{
    const { t } = useTranslation();
    const langState = useSelector((state: RootState) => state.LangStateReducer.language);
    return(
        <>
        <section className={Styles.contacts__content}>
            <div className={Styles.contacts__content_bg}></div>
            <section className={Styles.contacts__content_section}>
                <div className={Styles.contacts__content_borders}>
                    <div className={Styles.contacts__content_container}>
                        <div className={Styles.contacts__content_positioning}>
                            <div className={Styles.contacts__content_gallery}>
                                <div className={Styles.contacts__content_gallery_element}>
                                    <div className={Styles.contacts_element_in}>
                                        <img src={phone} alt="phone icon"/>
                                        <div className={Styles.contacts__content_gallery_element_text}>
                                            <h3 className={Styles.contacts__content_gallery_element_header}>{t('contact_block_header1')}</h3>
                                            <p className={Styles.contacts__content_gallery_element_paragraph}>{t('contact_block_text1')}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className={Styles.contacts__content_gallery_element}>
                                    <div className={Styles.contacts_element_in}>
                                        <img src={email} alt="mail icon" className={Styles.contacts__icon}/>
                                        <div className={Styles.contacts__content_gallery_element_text}>
                                            <h3 className={Styles.contacts__content_gallery_element_header}>{t('contact_block_header2')}</h3>
                                            <p className={Styles.contacts__content_gallery_element_paragraph}>{t('contact_block_text2')}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className={Styles.contacts__content_gallery_element}>
                                    <div className={Styles.contacts_element_in}>
                                        <img src={location} alt="location icon"/>
                                        <div className={Styles.contacts__content_gallery_element_text}>
                                            <h3 className={Styles.contacts__content_gallery_element_header}>{t('contact_block_header3')}</h3>
                                            <p className={Styles.contacts__content_gallery_element_paragraph}>{t('contact_block_text3')}</p>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </section>
            </section>
        </>
    )
}
export default ContactComponent;