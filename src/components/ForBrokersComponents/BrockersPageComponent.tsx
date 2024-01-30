import React from "react";
import Styles from './BrockersPage.module.css';
import Way from '../../assets/images/BrockersPageWay.svg';
import WayEn from '../../assets/images/BrokersPageWayEng.svg';
import { useTranslation } from 'react-i18next';
import '../../Translation/Translation';
import { useSelector} from 'react-redux';
import { RootState } from '../../state/store';

const BrockersPageComponent = () => {
    const { t } = useTranslation();
    const langState = useSelector((state: RootState) => state.LangStateReducer.language);
    return(
        <>
            <section className={Styles.brocker__content}>
            <div className={Styles.brocker__content_bg}></div>
            <section className={Styles.brocker__content_section}>
                <div className={Styles.brocker__content_borders}>
                    <div className={Styles.brocker__content_container}>
                        <h2 className={Styles.brocker__content_header}>{t('broc_header')}</h2>
                        <div className={Styles.brocker__content_positioning}>
                            <img src={langState === 'ru' ? Way : WayEn} alt="way for brockers" className={Styles.brocker__content_image}/>
                            <div className={Styles.brocker__content_gallery}>
                                <div className={Styles.brocker__content_gallery_element}>
                                    <div className={Styles.brocker__content_gallery_element_text}>
                                        <h3 className={Styles.brocker__content_gallery_element_header}>{t('broc_block_header1')}</h3>
                                        <p className={Styles.brocker__content_gallery_element_paragraph}>{t('broc_block_text1')}</p>
                                    </div>
                                    <p className={Styles.brocker__content_gallery_element_number}>01</p>
                                </div>

                                <div className={Styles.brocker__content_gallery_element}>
                                    <div className={Styles.brocker__content_gallery_element_text}>
                                        <h3 className={Styles.brocker__content_gallery_element_header}>{t('broc_block_header2')}</h3>
                                        <p className={Styles.brocker__content_gallery_element_paragraph}>{t('broc_block_text2')}</p>
                                    </div>
                                    <p className={Styles.brocker__content_gallery_element_number}>02</p>
                                </div>

                                <div className={Styles.brocker__content_gallery_element}>
                                    <div className={Styles.brocker__content_gallery_element_text}>
                                        <h3 className={Styles.brocker__content_gallery_element_header}>{t('broc_block_header3')}</h3>
                                        <p className={Styles.brocker__content_gallery_element_paragraph}>{t('broc_block_text3')}</p>
                                    </div>
                                    <p className={Styles.brocker__content_gallery_element_number}>03</p>
                                </div>

                                <div className={Styles.brocker__content_gallery_element}>
                                    <div className={Styles.brocker__content_gallery_element_text}>
                                        <h3 className={Styles.brocker__content_gallery_element_header}>{t('broc_block_header4')}</h3>
                                        <p className={Styles.brocker__content_gallery_element_paragraph}>{t('broc_block_text4')}</p>
                                    </div>
                                    <p className={Styles.brocker__content_gallery_element_number}>04</p>
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
export default BrockersPageComponent;