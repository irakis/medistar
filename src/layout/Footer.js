import React from "react";
import styles from "./Footer.module.scss";
import clsx from 'clsx';

const Footer = () => {
    return(
        <>
            <div className={styles.footer}>
                <div className="row justify-content-center">
                    <div className={clsx(styles.boxMap,"col-4")}>
                        <div className="row align-items-center">
                            <div className="col-3">
                                <img src={`${process.env.PUBLIC_URL}/images/icons/map.svg`} alt='map'/>
                            </div>
                            <div className="col-9">
                                <p>Jak do nas dotrzeć?</p>
                                <h4>Znajdź nas na mapie</h4>
                            </div>
                        </div>
                    </div>
                    <div className={clsx(styles.boxPhone,"col-4")}>
                        <div className="row align-items-center">
                            <div className="col-3">
                                <img src={`${process.env.PUBLIC_URL}/images/icons/telephone.svg`} alt='phone_1'/>
                            </div>
                            <div className="col-9">
                                <p>Zadzwoń do nas</p>
                                <h4>+48 123456789</h4>
                            </div>
                        </div>
                    </div>
                    <div className={clsx(styles.boxEnvelope, "col-4")}>
                        <div className="row align-items-center py-auto">
                            <div className="col-3">
                                <img src={`${process.env.PUBLIC_URL}/images/icons/envelope-open.svg`} alt='envelope-open'/>
                            </div>
                            <div className="col-9">
                                <p>Masz pytania?</p>
                                <h4>Napisz do nas</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={clsx(styles.copy)}>          
                <p>&copy; 2023 MEDISTAR. Wszelkie prawa zastrzeżone.</p>
                <p>by: auxiliumpro44@gmail.com</p>
            </div>
        </>
    )
}

export default Footer;