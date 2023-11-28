import React from "react";
import styles from "./Footer.module.scss";
import clsx from 'clsx';

const Footer = () => {
    console.log(styles);
    return(
        <>
            <div className={styles.footer} id='footer'>
                <div className="row justify-content-center" id='footerBoxRow'>
                    <div className={clsx(styles.boxMap, styles.boxMap__animated,'col-lg-4 col-sm-11')} id='boxMap'>
                        <div className="row align-items-center">
                            <div className="col-3">
                                <a href='/contact'>
                                    <img src={`${process.env.PUBLIC_URL}/images/icons/map.svg`} alt='map'/>
                                </a>
                            </div>
                            <div className="col-lg-9 col-sm-12">
                                <p>Jak do nas dotrzeć?</p>
                                <h4>Stara Wieś Pierwsza 99, </h4>
                                <h4>23-100 Bychawa </h4>
                            </div>
                        </div>
                    </div>
                    <div className={clsx(styles.boxPhone,"col-lg-4 col-sm-11")} id='boxPhone'>
                        <div className="row align-items-center">
                            <div className="col-3">
                                <img src={`${process.env.PUBLIC_URL}/images/icons/telephone.svg`} alt='phone_1'/>
                            </div>
                            <div className="col-lg-9 col-sm-12">
                                <p>Masz pytania?</p>
                                <p>Zadzwoń do nas</p>
                                <h4>+48 500 867 770</h4>
                            </div>
                        </div>
                    </div>
                    <div className={clsx(styles.boxEnvelope, styles.boxEnvelope__animated, "col-lg-4 col-sm-11")} id='boxEnvelope'>
                        <div className="row align-items-center">
                            <div className="col-3">
                                <img src={`${process.env.PUBLIC_URL}/images/icons/envelope-open.svg`} alt='envelope-open'/>
                            </div>
                            <div className="col-lg-9 col-sm-12">
                                <p>Masz pytania?</p>
                                <p>Napisz do nas</p>
                                <p>zol.starawies@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={clsx(styles.copy)} id='copy'>          
                <p>&copy; 2023 MEDISTAR. Wszelkie prawa zastrzeżone.</p>
                <p>by: auxiliumpro44@gmail.com</p>
            </div>
        </>
    )
}

export default Footer;