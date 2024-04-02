import React from "react";
import styles from './Documents.module.scss';
import clsx from 'clsx';

const Documents = () => {
    return(
        <div className={clsx(styles.documents, " d-flex flex-column align-items-center p-4")}>
            <h2>Dokumenty do pobrania</h2>
            <a href={`${process.env.PUBLIC_URL}/documents/Wniosek_o_skierowanie_do_ZOL.pdf`} target="_blank" rel='noreferrer'>Wniosek o skierowanie do ZOL</a>
            <a href={`${process.env.PUBLIC_URL}/documents/Wywiad_pielęgniarski_i_zaświadczenie_lekarskie.pdf`} target="_blank" rel='noreferrer'>Wywiad pielęgniarski i zaświadczenie lekarskie</a>
            <a href={`${process.env.PUBLIC_URL}/documents/Skierowanie_do_ZOL.pdf`} target="_blank" rel='noreferrer'>Skierowanie do ZOL</a>
            <a href={`${process.env.PUBLIC_URL}/documents/Skala_Barthel.pdf`} target="_blank" rel='noreferrer'>Skala Barthel</a>
            <a href={`${process.env.PUBLIC_URL}/documents/Skala_Glasgow.pdf`} target="_blank" rel='noreferrer'>Skala Glasgow</a>
            <a href={`${process.env.PUBLIC_URL}/documents/Wysokosc-oplat-za-transport-i-przechowywanie-zwlok-pacjenta zol.pdf`} target="_blank" rel='noreferrer'>Cennik transportu i przechowywania zwłok pacjenta</a>
            <a href={`${process.env.PUBLIC_URL}/documents/Cennik-udostepniania-dokumentacji-medycznej-na-rok-2024 bychawa.pdf`} target="_blank" rel='noreferrer'>Cennik udostępniania dokumentacji medycznej</a>
            
    </div>
    )
}

export default Documents;