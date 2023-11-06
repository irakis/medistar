import React from 'react';
import styles from './Header.module.scss';
import clsx from 'clsx';
import { useState } from 'react';

const Header = () => {
    const [listCollapsed, setListCollapsed] = useState(true);
    const [list2Collapsed, setList2Collapsed] = useState(true);
    const [isTogglerCollapsed, setIsTogglerCollapsed] = useState(true)

    const handleClick = () => {
        setListCollapsed(!listCollapsed);
        setList2Collapsed(true);
    }
    const handleClickList2 = () => {
        setList2Collapsed(!list2Collapsed);
        setListCollapsed(true);
    }

    const handleToggler = () => {
        setIsTogglerCollapsed(!isTogglerCollapsed);
    }

    return(
        <div className={styles.header}>
            <div className='row d-md-flex d-sm-block align-items-center'>
                <div className='col-md-8 col-sm-12 '>
                    <ul className='list-inline-horizontal'>
                        <li className='list-inline-item'>
                            <span className="bi bi-geo-alt">
                                <a href='/contact'>
                                    Stara Wieś Pierwsza 99, 23-100 Bychawa
                                </a>
                            </span>
                        </li>
                        <li className='list-inline-item'>
                            <span className="bi bi-phone">
                                +48 500867770
                            </span>
                        </li>
                        <li className='list-inline-item'>
                            <span className="bi bi-envelope-at pr-1">
                                 mail adress: zol.starawies@gmail.com
                            </span>
                        </li>    
                    </ul>
                </div> 

                {/*----------------------ISO AND BIP START-----------------------------*/}

                <div className={clsx(styles.social, 'col-md-1 col-sm-6')}>
                    <a  className={styles.bip} href={`${process.env.PUBLIC_URL}/documents/20231024-093618_Optimized.pdf`} target='_blank'rel='noreferrer'>
                        <img src={`${process.env.PUBLIC_URL}/images/icons/iso.svg`} alt='iso_icon'/>
                    </a>
                </div>  
                <div className={clsx(styles.social,'col-md-1 col-sm-6 text-center')}>
                    <a className={styles.bip} href={`${process.env.REACT_APP_BIP}`} target='_blank'rel='noreferrer'>
                        <img src={`${process.env.PUBLIC_URL}/images/icons/POL_BIP_icon.svg.png`} alt='bip_icon'></img>
                    </a>
                </div>
                <div className={clsx(styles.nfz,'col-md-1 col-sm-6 text-center')}>
                    <img src={`${process.env.PUBLIC_URL}/images/icons/nfz_logo_A_kolor-min.jpg`} alt='nfz_icon'></img>
                </div>

                {/*----------------------ISO AND BIP END-----------------------------*/}

            </div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href='/'>
                    <img className={styles.logo} src={`${process.env.PUBLIC_URL}/images/common/medistar_logo.png`} alt='medistar_logo'/>
                </a>
                <button className={`${isTogglerCollapsed === false ? 'collapsed' : ''} navbar-toggler`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" 
                    aria-expanded="false" aria-label="Toggle navigation" onClick={handleToggler}>
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`${isTogglerCollapsed ? '' : 'show'} collapse navbar-collapse`} id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">Start</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/offer">Oferta</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href='#' id="navbarDropdownMenuLink2" role="button" data-bs-toggle="dropdown" aria-haspopup="true" 
                            aria-expanded="false" onClick={handleClickList2}>
                            Dla odwiedzających
                        </a>
                        <ul className={`${list2Collapsed === false ? 'show' : ''} dropdown-menu`} aria-labelledby="navbarDropdownMenuLink2">
                            <li><a className="dropdown-item" href="/gallery">Galeria</a></li>
                            <li><a className="dropdown-item" href="/phones">Wykaz telefonów</a></li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" href='#' role="button" data-bs-toggle="dropdown" aria-haspopup="true" 
                            aria-expanded="false" onClick={handleClick}>
                            Dla pacjenta
                        </a>
                        <ul className={`${listCollapsed === false ? 'show' : ''} dropdown-menu`} aria-labelledby="navbarDropdownMenuLink">
                            <li><a className="dropdown-item" href="/documents">Dokumenty do pobrania</a></li>
                            <li><a className="dropdown-item" href="/procedure">Procedura przyjęcia</a></li>
                            <li><a className="dropdown-item" href="/application">Złożenie dokumentów</a></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/benefits">Zakres udzielanych świadczeń</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/contact">Kontakt</a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </div>
    )
}

export default Header;