import React from "react";
import styles from './Phones.module.scss';
import clsx from 'clsx';

const Phones = () => {
    return(
        <div className={clsx(styles.phones, " d-flex flex-column align-items-center p-4")}>
            <h2>thise are All phones</h2>
            <p>number: 1234567</p>
            <p>number: 1234567</p>
            <p>number: 1234567</p>
            <p>number: 1234567</p>
        </div>
    )
}

export default Phones;