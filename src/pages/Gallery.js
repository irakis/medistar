import React from "react";
import clsx from 'clsx';
import styles from './Gallery.module.scss';


const Gallery = () => {
    return(
        <div>
            <div className="row d-flex justify-content-center">
                <div className={clsx(styles.gallery, "col-lg-5 col-md-12 m-0 p-0")}>
                    <div className={styles.imageParent}>
                        <img src={`${process.env.PUBLIC_URL}/images/gallery/gallerySite/galeria_picture_1.avif`} alt='picture1'/>
                    </div>
                    <div className={styles.imageParent}>
                        <img src={`${process.env.PUBLIC_URL}/images/gallery/gallerySite/galeria_picture_2.avif`} alt='picture6'/>
                    </div>
                    <div className={styles.imageParent}>
                        <img src={`${process.env.PUBLIC_URL}/images/gallery/gallerySite/galeria_picture3.avif`} alt='picture3'/>
                    </div>
                    <div className={styles.imageParent}>
                        <img src={`${process.env.PUBLIC_URL}/images/gallery/gallerySite/galeria_picture_7.avif`} alt='picture8'/>
                    </div>
                </div>
                <div className={clsx(styles.gallery, "col-lg-5 col-md-12 m-0 p-0")}>
                    <div className={styles.imageParent}>
                        <img src={`${process.env.PUBLIC_URL}/images/gallery/gallerySite/galeria_picture_5.avif`} alt='picture5'/>
                    </div>
                    <div className={styles.imageParent}>
                        <img src={`${process.env.PUBLIC_URL}/images/gallery/gallerySite/galeria_picture_6.avif`} alt='picture2'/>
                    </div>
                    <div className={styles.imageParent}>
                        <img src={`${process.env.PUBLIC_URL}/images/gallery/gallerySite/galeria_picture_4.avif`} alt='picture7'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery;