import React from "react";
import Styles from './Contacts.module.css';
import { useTranslation } from 'react-i18next';
import '../../../Translation/Translation';
import phone from '../../../assets/images/Phone.svg';
import email from '../../../assets/images/Mail.svg';
import location from '../../../assets/images/Location.svg';
import Pict from '../../../assets/images/ContactsMeetingPhotoMobile.png';
import { useSelector} from 'react-redux';
import { RootState } from '../../../state/store';

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
                        <div className={Styles.contacts__content_gallery}>
                            <div className={Styles.contacts__content_gallery_element}>
                                <div className={Styles.contacts_element_in}>
                                    <img src={phone} alt="phone icon" className={Styles.contacts__icon}/>
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
                                    <img src={location} alt="location icon" className={Styles.contacts__icon}/>
                                    <div className={Styles.contacts__content_gallery_element_text}>
                                        <h3 className={Styles.contacts__content_gallery_element_header}>{t('contact_block_header3')}</h3>
                                        <p className={Styles.contacts__content_gallery_element_paragraph}>{t('contact_block_text3')}</p>
                                    </div>
                                </div>
                                    
                                </div>
                        </div>

                        <div className={Styles.contacts__map_container}>
                            <div className={Styles.contacts_picture_container}>
                                <img src={Pict} alt="picture" className={Styles.contacts_picture}/>
                            </div>
                            {/* <iframe width="100%"className={Styles.contacts__frame} src="https://music.yandex.ru/iframe/#track/41284288/5400781/"></iframe> */}
                            <div className="relative overflow-hidden w-full">
                                <a href="https://yandex.ru/maps/164/karaganda/?utm_medium=mapframe&utm_source=maps" style={{color: '#000000', position: 'absolute', top: 0, paddingBottom:'10px', }} className="text-3">{t('karaganda')}</a>
                                <a href="https://yandex.ru/maps/geo/53168259/?ll=73.098645%2C49.808889&utm_medium=mapframe&utm_source=maps&z=14.33" style={{color: '#000000', fontSize: '12px', position: 'absolute', top: '24px'}}>{t('map_name')}</a>
                                <iframe src="https://yandex.ru/map-widget/v1/?ll=73.098645%2C49.808889&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1MzE2ODI1ORIm0prQsNC30LDSm9GB0YLQsNC9LCDSmtCw0YDQsNKT0LDQvdC00YsiCg1RLZJCFSU7R0I%2C&z=14.33" frameBorder="1" allowFullScreen={true} className="w-full min-h-[300px] relative"></iframe>
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