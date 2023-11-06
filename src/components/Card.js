import React from 'react';
import styles from './Card.module.scss';
import Parser from 'react-html-parser';

const Card = (parameters) => {
    const reverse = parameters.reverse;
    return(
        <div className={styles.card}>
            {parameters.header ?
                <h3>{parameters.header}</h3>
                :
                null
            }
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