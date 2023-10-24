import React from "react";
import styles from './Documents.module.scss';
import clsx from 'clsx';

const Documents = () => {
    return(
        <div className={clsx(styles.documens, " d-flex flex-column align-items-center p-4")}>
            <h2>Dokumenty do pobrania</h2>
            <a href={`${process.env.PUBLIC_URL}/documents/Wniosek_o_skierowanie_do_zol.pdf`} target="_blank" rel='noreferrer'>Wniosek o skierowanie do ZOL</a>
            <a href={`${process.env.PUBLIC_URL}/documents/Wywiad_pielęgniarski_i_zaświadczenie_lekarskie.pdf`} target="_blank" rel='noreferrer'>Wywiad pielęgniarski i zaświadczenie lekarskie</a>
            <a href={`${process.env.PUBLIC_URL}/documents/Skierowanie_do_ZOL.pdf`} target="_blank" rel='noreferrer'>Skierowanie do ZOL</a>
            <a href={`${process.env.PUBLIC_URL}/documents/Skala_Barthel.pdf`} target="_blank" rel='noreferrer'>Skala Barthel</a>
            <a href={`${process.env.PUBLIC_URL}/documents/Skala_Glasgow.pdf`} target="_blank" rel='noreferrer'>Skala Glasgow</a>
            <a href={`${process.env.PUBLIC_URL}/documents/20231024-093618_Optimized.pdf`} target="_blank" rel='noreferrer'>Certyfikaty ISO</a>
            
    </div>
    )
}

export default Documents;