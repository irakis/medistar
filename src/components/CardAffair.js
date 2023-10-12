import React from "react";
import styles from './CardAffair.module.scss';
import clsx from "clsx";

const CardAffair = (parameters) => {
    return(
        <div className={styles.cardAffair}>
            <img src={parameters.url} alt={parameters.alt}/>
            <div className={styles.overlay}>
                <div className={clsx(styles.readElse)}>
                    <a className={styles.link} href={parameters.link}>Czytaj całość...</a>
                </div>
            </div>
            <div className="p-4 m-3 text-center overflow-hidden">
                <h4>{parameters.text}</h4>
            </div>
            
        </div>
    )
}

export default CardAffair;