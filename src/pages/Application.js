import React from "react";
import clsx from 'clsx';
import styles from './Application.module.scss';


const Application = () => {
    return(
        <div className={clsx(styles.application, " d-flex flex-column align-items-center p-4")}>
            <h2>this is application form</h2>
            <p>this is text about application documents</p>
        </div>
    )
}

export default Application;