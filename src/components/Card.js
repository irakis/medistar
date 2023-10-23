import React from 'react';
import styles from './Card.module.scss';
import Parser from 'react-html-parser';

const Card = (parameters) => {
    return(
        <div className={styles.card}>
            <h3>{parameters.header}</h3>
            {Parser(parameters.text)}
            { parameters.url ?
                <img src={parameters.url} alt={parameters.alt}></img>
                : 
                null
            }
        </div>
    )
}

export default Card;