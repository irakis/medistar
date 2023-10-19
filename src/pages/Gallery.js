import React from "react";
import clsx from 'clsx';
import styles from './Gallery.module.scss';


const Gallery = () => {
    return(
        <div>
            <div className="row d-flex justify-content-center">
                <div className={clsx(styles.gallery, "col-5 m-0 p-0")}>
                    <div className={styles.imageParent}>
                        <img src={`${process.env.PUBLIC_URL}/images/gallery/gallerySite/Optimized-20230221_093027.jpg`} alt='picture1'/>
                    </div>
                    <div className={styles.imageParent}>
                        <img className={styles.smallImage} src={`${process.env.PUBLIC_URL}/images/gallery/gallerySite/Optimized-20230720_095705.jpg`} alt='picture6'/>
                    </div>
                    <div className={styles.imageParent}>
                        <img className={clsx(styles.horizontal)} src={`${process.env.PUBLIC_URL}/images/gallery/gallerySite/Optimized-20230405_100943.jpg`} alt='picture3'/>
                    </div>
                    <div className={styles.imageParent}>
                        <img className={styles.smallImage} src={`${process.env.PUBLIC_URL}/images/gallery/gallerySite/Optimized-20230825_102059.jpg`} alt='picture8'/>
                    </div>
                </div>
                <div className={clsx(styles.gallery, "col-5 m-0 p-0")}>
                    <div className={styles.imageParent}>
                        <img className={styles.smallImage} src={`${process.env.PUBLIC_URL}/images/gallery/gallerySite/Optimized-20230420_092228.jpg`} alt='picture5'/>
                    </div>
                    <div className={styles.imageParent}>
                        <img src={`${process.env.PUBLIC_URL}/images/gallery/gallerySite/Optimized-20230221_102338.jpg`} alt='picture2'/>
                    </div>
                    <div className={styles.imageParent}>
                        <img className={styles.smallImage} src={`${process.env.PUBLIC_URL}/images/gallery/gallerySite/Optimized-20230809_105528.jpg`} alt='picture7'/>
                    </div>
                    <div className={styles.imageParent}>
                        <img src={`${process.env.PUBLIC_URL}/images/gallery/gallerySite/Optimized-20230418_095303.jpg`} alt='picture4'/>
                    </div>
                    <div className={styles.imageParent}>
                        <img className={styles.smallImage} src={`${process.env.PUBLIC_URL}/images/gallery/gallerySite/Optimized-20230918_093658.jpg`} alt='picture9'/>   
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery;