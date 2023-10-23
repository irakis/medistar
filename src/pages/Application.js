import React from "react";
import clsx from 'clsx';
import styles from './Application.module.scss';


const Application = () => {
    return(
        <div className={clsx(styles.application, " d-flex flex-column align-items-center p-4")}>
            <h2>Złożenie dokumentów</h2>
            <p>Dokumenty należy złożyć osobiście do ZOL lub przesłać listownie na adres:<br>
            </br>
                Zakład Opiekuńczo Leczniczy „Stara Wieś”<br>
                </br>
                Stara Wieś Pierwsza 99<br>
                </br>
                23-100 Bychawa</p>
        </div>
    )
}

export default Application;