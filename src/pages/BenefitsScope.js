import React from "react";
import styles from './BenefitsScope.module.scss';
import clsx from 'clsx';

const BenefitsScope = () => {
    return(
        <div className={clsx(styles.benefitsScope, "p-4")}>
            <div className="row d-flex justify-content-center">
                <div className="col-6 align-content-center text-center">
                    <h2>This are all benefits</h2>
                    <p>and all scopes related to this benefits</p>
                </div>
                <div className="col-6">
                    <img src={`${process.env.PUBLIC_URL}/images/gallery/gallerySite/Optimized-20230405_100943.jpg`} alt='inner_image'/>
                </div>
            </div>
        </div>

    )
}

export default BenefitsScope;