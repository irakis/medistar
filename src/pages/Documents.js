import React from "react";
import styles from './Documents.module.scss';
import clsx from 'clsx';

const Documents = () => {
    return(
        <div className={clsx(styles.documens, " d-flex flex-column align-items-center p-4")}>
            <h2>Very important documents to download</h2>
            <a href={`${process.env.PUBLIC_URL}/documents/Oferta_usługi_IT_dla_MEDISTAR.pdf`} target="_blank" rel='noreferrer'>document 1</a>
            <a href={`${process.env.PUBLIC_URL}/documents/IOM.pdf`} target="_blank" rel='noreferrer'>document 2</a>
            
    </div>
    )
}

export default Documents;