import React from "react";
import styles from './Contact.module.scss';
import clsx from 'clsx';

const Contact = () => {
    return(
<div className={clsx(styles.contact,"p-1")}>
    <div className={styles.mapDiv}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62183.01003261854!2d22.33722246532482!3d51.28096017322368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47225f62c932a023%3A0x8ee5fa1ab1cc3544!2sTomaszowice%2016A%2C%2021-008%20Tomaszowice!5e1!3m2!1spl!2spl!4v1731532290872!5m2!1spl!2spl"
             width="100%" height="100%" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='tomaszowice_map'></iframe>
    </div>
    <div className="row mb-5">
        <div className={clsx(styles.adresColumn,"col-lg-4 col-md-12 d-block text-center")}>
            <h3>MEDISTAR</h3>
            <p>NIP: 7123415825</p>
            <p>ul. TARGOWA 9/53</p>
            <p> 21-040 ŚWIDNIK</p>
            <p>LUBELSKIE</p>
            <p>Nr BDO: 000584591</p>
        </div>
        <div className="col-lg-4 col-md-12">
            <div className={clsx(styles.puzzle,'d-flex align-items-center')}>
                <div className={clsx(styles.hexagon, 'd-flex justify-content-center align-items-center')}>
                    <img src={`${process.env.PUBLIC_URL}/images/icons/map.svg`} alt='icon_map'/>
                </div>
                <div >
                    <h2>Adres</h2>
                </div> 
            </div>
            <div className=" d-flex justify-content-center text-center">
            Tomaszowice 16A, <br></br> 23-100 Tomaszowice
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
                opieka lecznicza 24h/7, <br></br>
                godziny odwiedzin po uprzednim ustaleniu. Biuro czynne w godzinach 8-16

            </div>
        </div>
        <div className="col-lg-4 col-md-12">
            <div className={clsx(styles.puzzle,'d-flex align-items-center')}>
                <div className={clsx(styles.hexagon, 'd-flex justify-content-center align-items-center')}>
                    <img src={`${process.env.PUBLIC_URL}/images/icons/telephone.svg`} alt='icon_telephone'/>
                </div>
                <div >
                    <h2>Numery telefonów</h2>
                </div> 
            </div>
            <div className=" d-flex justify-content-center text-center">
                informacja: +48 500 867 770,
                <br></br>
                informacja medyczna dla pacjenta: +48 500 867 636
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
                kontakt@medistar.com.pl
            </div>
        </div>
    </div>
</div>
    )
}

export default Contact;