import React from "react";
import clsx from 'clsx';
import styles from './Offer.module.scss';


const Offer = () => {
    return(
        <div className={clsx(styles.offer, " d-flex flex-column align-items-center p-4")}>
            <h2>Oferta</h2>
            <p>
            ZOL „Stara Wieś” jest zakładem udzielającym całodobowych świadczeń zdrowotnych, które obejmują
            swoim zakresem pielęgnację i rehabilitację osób, które przebyły ostrą fazę leczenia szpitalnego, mają
            ukończony proces diagnozowania, leczenia operacyjnego lub intensywnego leczenia zachowawczego,
            jednak nie wymagają dalszej hospitalizacji, a ze względy na stan zdrowia i stopień
            niepełnosprawności oraz brak możliwości samodzielnego funkcjonowania w środowisku domowym
            potrzebują stałego nadzoru lekarskiego, profesjonalnej pielęgnacji i rehabilitacji.
            Do Zakładu Opiekuńczo-Leczniczego nie przyjmuje się świadczeniobiorcy, który w ocenie skalą Barthel otrzymał powyżej 40 punktów oraz świadczeniobiorcy, którego główną jednostką 
            chorobową jest zaawansowana choroba nowotworowa, choroba psychiczna lub uzależnienie.
            </p>
            <p>
            Zakład jest niepubliczną instytucją posiadającą kontrakt z Narodowym Funduszem Zdrowia.
            ZOL „Stara Wieś” udziela świadczeń zdrowotnych osobom ubezpieczonym oraz innym
            osobom uprawnionym do świadczeń na podstawie przepisów, z uwzględnieniem zasad
            wynikających z ustawy z dnia 27 sierpnia 2004 r. o świadczeniach opieki zdrowotnej
            finansowanych ze środków publicznych.
            </p>
            <p>
            Pacjentami opiekuje się wysoko wyspecjalizowana kadra: lekarze, pielęgniarki, opiekunowie,
            rehabilitanci, psycholog i terapeuci.
            ZOL jest przystosowany do potrzeb osób niepełnosprawnych. Pacjenci przebywają w dobrze
            wyposażonych pokojach z węzłem sanitarnym. W placówce posiadamy pokoje 2, 3 i 4-
            osoboe, w każdym pokoju znajduje się łazienka dostosowana do potrzeb osób z
            niepełnosprawnością.
            </p>
            <p>
            Dysponujemy profesjonalnym sprzętem medycznym i urządzeniami ułatwiającymi transport
            oraz toaletę osób leżących m.in.: 
            </p>
            <ul>
                <li>sprzęt zapobiegający powstawaniu odleżyn</li>
                <li>łóżka z regulacją wysokości</li>
                <li>materace przeciwodleżynowe</li>
                <li>inhalatory, pulsoksymetry, koncentratory tlenu, pompy infuzyjne, ssaki elektryczne,
                glukometry</li>
                <li>sprzęt rehabilitacyjny</li>
                <li>EKG</li>
                <li>kardiomonitor</li>
            </ul>

           
        </div>
    )
}

export default Offer;