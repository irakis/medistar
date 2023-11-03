import styles from './BenefitsScope.module.scss';
import clsx from 'clsx';

const BenefitsScope = () => {
 
    return(
        <div className={clsx(styles.benefitsScope, "p-4")} id="1212">
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
                        <li>edukacja zdrowotna</li>
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
                    <p>Podopieczni mają zagwarantowane pomieszczenia 2, 3 lub 4 łóżkowe i wyżywienie odpowiednie do stanu zdrowia, 
                        a także uczestnictwo w zorganizowanych zajęciach z zakresu terapii zajęciowej.
                    </p>  
                </div>
            </div>
        </div>
    )
}

export default BenefitsScope;