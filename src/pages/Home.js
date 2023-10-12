import React from 'react';
import styles from './Home.module.scss';
import Card from '../components/Card';
import clsx from 'clsx';
import CardMain from '../components/CardMain';
import CardAffair from '../components/CardAffair';

const Home = () => {
    return(
        <div className={styles.home}>
            <div className={styles.slideUp}>
                <div className={styles.info}>
                    <h2>INFORMACJA</h2>
                    <p>lorem ipsum i zakładzie ZOLL t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'</p>
                    <a href='/' role="button" class="btn btn-outline-light">
                        Przeczytaj więcej...
                    </a>
                </div>
            </div>

            {/*----------------AFFAIRS START-----------------------*/}

            <div className={clsx(styles.affairs, 'row d-flex align-items-center')}>
                <div className='col-md-4 col-sm-12'>
                    <CardAffair
                        text='ipsum i zakładzie ZOLL t is a long established fact that a reader will be'
                        url={`${process.env.PUBLIC_URL}/images/gallery/20230918_093658.jpg`}
                        alt='picture_1'
                        link='/'
                    />
                </div>
                <div className='col-md-4 col-sm-12'>
                    <CardAffair
                        text='ipsum i zakładzie ZOLL t is a long established fact that a reader will be'
                        url={`${process.env.PUBLIC_URL}/images/gallery/20231004_102318.jpg`}
                        alt='picture_2'
                        link='/'
                    />
                </div>
                <div className='col-md-4 col-sm-12'>
                    <CardAffair
                        text='ipsum i zakładzie ZOLL t is a long established fact that a reader will be'
                        url={`${process.env.PUBLIC_URL}/images/gallery/20230922_093209.jpg`}
                        alt='picture_2'
                        link='/'
                    />
                </div>
                
            </div>

            {/*----------------AFFAIRS END -----------------------*/}

            <div className='row'>
                <div className={clsx(styles.infoCallMain, 'col-12')}>
                    <button type="button" class="btn btn-success">
                        <a href='/'>Zobacz wszystkie aktualnosci</a>
                    </button>
                </div>
            </div>

            <div className='row'>
                <div className='col-lg-6 col-sm-12 p-0'>
                    <CardMain
                        url={`${process.env.PUBLIC_URL}/images/cards/hospital-174924_640.jpg`}
                        alt='hospital_2'
                    />
                </div>
                <div className='col-lg-6 col-sm-12 p-0'>
                    <CardMain
                        welcome='Witamy na naszej stronie internetowej!'
                        header='Zdrowie w Medistar to...'
                        text='Lorem ipsum na temat opieki lekarskiej.is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting'
                    />
                </div>
            </div>
            <div className='row'>
                <div className={clsx(styles.infoCall, 'col-12')}>
                    <h4>Masz do nas pytania? Zadzwoń +48 1234567788</h4>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-6 col-sm-12 p-0'>
                    <Card
                        url={`${process.env.PUBLIC_URL}/images/cards/stethoscope-6497490_640.jpg`}
                        alt='hands_1'
                    />
                </div>
                <div className='col-lg-6 col-sm-12 p-0'>
                    <Card
                        header='Opieka lekarska'
                        text='Lorem ipsum na temat opieki lekarskiej.is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting'
                    /> 
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-6 col-sm-12 p-0'>
                    <Card
                        header='Rehabilitacja'
                        text='Lorem ipsum na temat opieki lekarskiej.is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting'
                    />
                </div>
                <div className='col-lg-6 col-sm-12 p-0'>
                    <Card
                        url ={`${process.env.PUBLIC_URL}/images/cards/fizjoterapia.jpg`}
                        alt='fizoterapia_1'
                    />
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-6 col-sm-12 p-0'>
                    <Card
                        url ={`${process.env.PUBLIC_URL}/images/cards/hands-2906458_640.jpg`}
                        alt='stetoscope_1'
                    />
                </div>
                <div className='col-lg-6 col-sm-12 p-0'>
                    <Card
                        header ='Psycholog'
                        text='Lorem ipsum na temat opieki lekarskiej.is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting'
                    />
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-6 col-sm-12 p-0'>
                    <Card
                        header = 'Terapia zajęciowa'
                        text='Lorem ipsum na temat opieki lekarskiej.is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting'
                    />
                </div>
                <div className='col-lg-6 col-sm-12 p-0'>
                    <Card
                        url={`${process.env.PUBLIC_URL}/images/cards/terapia_zajeciowa.jpg`}
                        alt='terapia_zajeciowa_1'
                    />
                </div>
            </div>
            

            <div className={styles.slideBottom}>backgroundImage
                <div className='info'>
                    <h2>ikonki</h2>
                    <p>opis</p>
                    <p>cyferki</p>
                </div>
            </div>

        </div>
    )
}

export default Home;