import React from 'react';
import styles from './Header.module.scss';
import clsx from 'clsx';

const Header = () => {
    return(
        <div className={styles.header}>
            <div className='row d-md-flex d-sm-block align-items-center'>
                <div className='col-md-10 col-sm-12 '>
                    <ul className='list-inline-horizontal'>
                        <li className='list-inline-item'>
                            <span className="bi bi-geo-alt">
                                adress
                            </span>
                        </li>
                        <li className='list-inline-item'>
                            <span className="bi bi-phone">
                                +48 345666777
                            </span>
                        </li>
                        <li className='list-inline-item'>
                            <span className="bi bi-envelope-at pr-1">
                                 mail adress
                            </span>
                        </li>    
                    </ul>
                </div> 
                <div className='col-md-1 col-sm-6'><i className={clsx(styles.icon,"bi bi-facebook justify-content-center")}></i></div>  
                <div className='col-md-1 col-sm-6'><img src={`${process.env.PUBLIC_URL}/images/icons/POL_BIP_icon.svg.png`} alt='bip_icon'></img></div>
            </div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href='/'>
                    <img src={`${process.env.PUBLIC_URL}/images/common/medistar_logo.png`} alt='medistar_logo'/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/">Features</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/">Pricing</a>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown link
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><a className="dropdown-item" href="/">Action</a></li>
                        <li><a className="dropdown-item" href="/">Another action</a></li>
                        <li><a className="dropdown-item" href="/">Something else here</a></li>
                    </ul>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </div>
    )
}
export default Header;