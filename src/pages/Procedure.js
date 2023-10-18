import React from 'react';
import styles from './Procedure.module.scss';
import clsx from 'clsx';

const Procedure = () => {
    return(
        <div className={clsx(styles.procedure, " d-flex flex-column align-items-center p-4")}>
            <h2>This is procedure</h2>
            <p>this is text of the procrdure</p>
        </div>
    )
}

export default Procedure;