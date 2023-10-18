import React from "react";
import clsx from 'clsx';
import styles from './Offer.module.scss';


const Offer = () => {
    return(
        <div className={clsx(styles.offer, " d-flex flex-column align-items-center p-4")}>
            <h2>this is offer</h2>
            <p>this is text</p>
        </div>
    )
}

export default Offer;