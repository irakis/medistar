import React from "react";
import styles from './BenefitsScope.module.scss';
import clsx from 'clsx';

const BenefitsScope = () => {
    return(
        <div className={clsx(styles.benefitsScope, "p-4")}>
            <div className="row d-flex justify-content-center">
                <div className="col-lg-6 col-sm-12 align-content-center text-center">
                    <h2>Zakres świadczeń w Zakładzie:</h2>
                    <ul>
                    
                        <li>opieka lekarska</li>
                        <li>opieka pielęgniarska</li>
                        <li>rehabilitacja ogólna w podstawowym zakresie, 
                            prowadzona w celu zmniejszenia skutków upośledzenia ruchowego oraz usprawniania ruchowego</li>
                        <li>kontynuacja leczenia farmakologicznego</li>
                        <li>świadczenia psychologa</li>
                        <li>terapia zajęciowa</li>
                        <li>żywienie dojelitowe</li>
                        <li>dukacja zdrowotna</li>
                        <li>opieka duszpasterska</li>
                    </ul>
                    <p>
                        Osobom przebywającym w Zakładzie zapewnia się:
                    </p>
                    <ul>
                        <li>badania diagnostyczne</li>
                        <li>leki</li>
                        <li>zaopatrzenie w wyroby medyczne</li>
                    </ul>
                    <p>Podopieczni mają zagwarantowane pomieszczenia 3 łóżkowe i wyżywienie odpowiednie do stanu zdrowia, 
                        a także uczestnictwo w zorganizowanych zajęciach z zakresu terapii zajęciowej.
                    </p>  
                </div>
                <div className="col-lg-6 col-sm-12">
                    <img src={`${process.env.PUBLIC_URL}/images/gallery/gallerySite/Optimized-20230405_100943.jpg`} alt='inner_image'/>
                </div>
            </div>
        </div>

    )
}

export default BenefitsScope;