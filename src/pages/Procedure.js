import React from 'react';
import styles from './Procedure.module.scss';
import clsx from 'clsx';

const Procedure = () => {
    return(
        <div className={clsx(styles.procedure, " d-flex flex-column p-4")}>
            <h2>Procedura przyjęcia</h2>
            <p>
                Osoba ubiegająca się o przyjęcie do Zakładu Opiekuńczo-Leczniczego zobowiązana jest do przedłożenia stosownych dokumentów:
                1. Wniosek o przyjęcie do Zakładu Opiekuńczo-Leczniczego podpisany przez osobę kierowaną.
                W przypadku osób niemogących wyrazić świadomie zgody na umieszczenie w ZOL konieczna jest zgoda opiekuna prawnego lub postanowienie Sądu o umieszczeniu bez zgody. 
                W przypadku osoby ubezwłasnowolnionej do wniosku o przyjęcie należy dołączyć:
            </p>
            <ul>
                <li>postanowienie Sądu o ubezwłasnowolnieniu,</li>
                <li>postanowienie Sądu o ustanowieniu opiekuna prawnego,</li>
                <li>zgodę Sądu na umieszczenie w zakładzie.</li>
            </ul>
        <p>
            2. Skierowanie do ZOL wydane przez lekarza ubezpieczenia zdrowotnego na podstawie dokumentów:
        </p>
        <p className={styles.indented}>
            2.1  
            Wywiadu pielęgniarskiego i zaświadczenia lekarskiego (czytelny numer prawa
            wykonywania zawodu lekarza kierującego i czytelny numer umowy szpitala lub
            przychodni z NFZ)
        </p>
        <p className={styles.indented}>
            2.2
            Karty oceny świadczeniobiorcy (ocena wg skali Barthel)
            Do przyjęcia do ZOL kwalifikowani są pacjenci posiadający od 0 do 40 pkt.
        </p>
        <p>
            3 .Kserokopie posiadanej dokumentacji: medycznej w tym karty informacyjnej z leczenia szpitalnego, ubezpieczenia zdrowotnego, dowodu osobistego.
            <br></br>
            4. Badania:
            <br></br>
            Pacjenci proszeni są o zgłoszenie się z wynikami następujących badań, które są nie starsze niż 1 tydzień: 
            morfologia,  badanie stężenia mocznika we krwi, kreatyniny, elektrolitów, CRP, test Covid.
            <br></br>
            Dodatkowo dla osób przychodzących z oddziałów szpitalnych, domów opieki i innych placówek opiekuńczych wymagany jest ujemny wynik na obecność Clostridium.
        </p>
        </div>
    )
}

export default Procedure;