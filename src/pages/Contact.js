import React from "react";
import styles from './Contact.module.scss';
import clsx from 'clsx';

const Contact = () => {
    return(
<div className={clsx(styles.contact,"p-1")}>
    <div className={styles.mapDiv}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3197.9618528650826!2d22.570564147406863!3d50.94492546193452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47231d8c1e618679%3A0x72967cdc97fd2bf1!2sStara%20Wie%C5%9B%20Pierwsza%2099%2C%2023-100%20Stara%20Wie%C5%9B%20Pierwsza!5e1!3m2!1spl!2spl!4v1697723150577!5m2!1spl!2spl"
             width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <div className="row mb-5">
        <div className={clsx(styles.adresColumn,"col-4 d-block text-center")}>
            <h3>thist is adress</h3>
            <p>street, number, NIP and others</p>
        </div>
        <div className="col-4">
            <div className={clsx(styles.puzzle,'d-flex align-items-center')}>
                <div className={clsx(styles.hexagon, 'd-flex justify-content-center align-items-center')}>
                    <img src={`${process.env.PUBLIC_URL}/images/icons/map.svg`} alt='icon_map'/>
                </div>
                <div >
                    <h2>Adres</h2>
                </div> 
            </div>
            <div className=" d-flex justify-content-center text-center">
                adress details
            </div>
            <div className={clsx(styles.puzzle,'d-flex align-items-center')}>
                <div className={clsx(styles.hexagon, 'd-flex justify-content-center align-items-center')}>
                    <img src={`${process.env.PUBLIC_URL}/images/icons/clock.svg`} alt='icon_clock'/>
                </div>
                <div >
                    <h2>Godziny otwarcia</h2>
                </div> 
            </div>
            <div className=" d-flex justify-content-center text-center">
                adress details
            </div>
        </div>
        <div className="col-4">
            <div className={clsx(styles.puzzle,'d-flex align-items-center')}>
                <div className={clsx(styles.hexagon, 'd-flex justify-content-center align-items-center')}>
                    <img src={`${process.env.PUBLIC_URL}/images/icons/telephone.svg`} alt='icon_telephone'/>
                </div>
                <div >
                    <h2>Numery telefonów</h2>
                </div> 
            </div>
            <div className=" d-flex justify-content-center text-center">
                adress details
            </div>
            <div className={clsx(styles.puzzle,'d-flex align-items-center')}>
                <div className={clsx(styles.hexagon, 'd-flex justify-content-center align-items-center')}>
                    <img src={`${process.env.PUBLIC_URL}/images/icons/envelope-open.svg`} alt='icon_email'/>
                </div>
                <div >
                    <h2>E-mail</h2>
                </div> 
            </div>
            <div className=" d-flex justify-content-center text-center">
                fuck@you.pl
            </div>
        </div>
    </div>
</div>
    )
}

export default Contact;