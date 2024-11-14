import React from "react";
import styles from './Phones.module.scss';
import clsx from 'clsx';

const Phones = () => {
    return(
        <div className={clsx(styles.phones, " d-flex flex-column align-items-center p-4")}>
            <h2>Wykaz numerów telefonów</h2>
            <p>informacja: +48 500 867 770</p>
            <p>informacja medyczna dla pacjenta: +48 500 867 636</p>
        </div>
    )
}

export default Phones;