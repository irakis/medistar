import React from 'react';
import styles from './Card.module.scss';

const Card = (parameters) => {
    return(
        <div className={styles.card}>
            <h3>{parameters.header}</h3>
            <p>{parameters.text}</p>
            { parameters.url ?
                <img src={parameters.url} alt={parameters.alt}></img>
                : 
                null
            }
        </div>

    )
}

export default Card;