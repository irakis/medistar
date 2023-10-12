import React from 'react';
import styles from './CardMain.module.scss';

const CardMain = (parameters) => {
    return(
        <div className={styles.cardMain}>
            { parameters.welcome ?
            <>
                <h4>{parameters.welcome}</h4>
                <h3>{parameters.header}</h3>
                <p>{parameters.text}</p>
            </>
            :
            null
            }
            { parameters.url ?
                <img src={parameters.url} alt={parameters.alt}></img>
                : 
                null
            }
        </div>

    )
}

export default CardMain;