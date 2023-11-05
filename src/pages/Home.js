import styles from './Home.module.scss';
import Card from '../components/Card';
import clsx from 'clsx';
import CardMain from '../components/CardMain';
import CardAffair from '../components/CardAffair';
import SlideBottomComponent from '../components/SlideBottomComponent';
import { useEffect, useState } from 'react';

const Home = () => {

    const [freeBeds, setFreeBeds] = useState(0);

    const opiekaText = `
        <p>Naszymi pacjentami zajmuje się wysokospecjalizowana kadra lekarska i pielęgniarska.
            Zatrudniamy lekarzy internistów, psychiatrę ora neurologa. Wykwalifikowane pielęgniarki
            posiadają kursy kwalifikacyjne z opieki długoterminowej i paliatywnej. Zapewniamy leczenie
            farmakologiczne, dietetyczne odpowiednie do stanu zdrowia pacjenta. W zakładzie
            zatrudnieni są także: psycholog, fizjoterapeuci, logopeda, terapeuta zajęciowy, opiekunowie
            medyczni i personel pomocniczy. W razie potrzeby korzystamy z konsultacji lekarzy
            specjalistów.
        </p>
    `
    const rehabilitacjaText = `
        <p>Rehabilitacja ma na celu jak najdłuższe utrzymanie sprawności fizycznej pacjenta, co poprawia
            komfort życia codziennego. W przypadku pacjentów, którzy taką sprawność utracili, rehabilitacja
            polega na jej przywróceniu w stopniu możliwie najwyższym, na jaki pozwala obecny stan ich zdrowia.
            Rehabilitacją w ZOL objęta jest każdy pacjent/pacjentka po wcześniejszej konsultacji medycznej. Za
            realizację zleceń lekarskich odpowiedzialna jest wyspecjalizowana kadra fizjoterapeutów.
            W obiekcie znajduje się sala rehabilitacyjna wyposażona m.in. w :
        </p>
        <ul>UGUL (Uniwersalny Gabinet Usprawniania Leczniczego),
            <li>rotory kończyn dolnych,</li>
            <li>rotory kończyn górnych,</li>
            <li>laser,</li>
            <li>lampa Sollux,</li>
            <li>wirówki kończyn dolnych,</li>
            <li>drabinki, poręcze</li>
            <li>drobny sprzęt rehabilitacyjny i ortopedyczny pomocny przy usprawnianiu podopiecznych.</li>
        </ul>
        <p>Rehabilitacja odbywa się codziennie od poniedziałku do piątku.</p>
    `
    const psychologText = `
        <p>Terapia psychologiczna pacjentów ZOL „Stara Wieś” zajmuje ważne miejsce w działaniach
            rehabilitacyjnych. Obejmuje ona szereg różnorodnych działań, dostosowanych do
            indywidualnych potrzeb pacjentów. Działania podejmowane przez psychologa w zakładzie
            opiekuńczo – leczniczym obejmują:
        </p>
        <ul>
            <li>diagnostykę psychologiczną,</li>
            <li>terapię indywidualną,</li>
            <li>terapię grupową,</li>
            <li>wsparcie pacjentów,</li>
        </ul>
    `
    const terapiaText = `
        <p>
            Terapia zajęciowa jest ważnym elementem pracy z osobami starszymi, przebywającymi w ZOL „Stara
            Wieś”. Działania odbywają się głównie w zakresie postępowania wspierająco – aktywizującego. Ich
            celem jest podtrzymanie sprawności psychofizycznej oraz wspomaganie rehabilitacji, zwłaszcza u
            osób po różnego rodzaju urazach. Zajęcia w ramach terapii są bardzo urozmaicone. W świetlicy
            uczestnicy mają szansę wyrażania własnych emocji, przeżyć. Mają możliwość indywidualnego
            tworzenia i swobodnego eksperymentowania w zakresie środków wyrazu plastycznego. Dobór
            technik, materiałów i narzędzi uwzględnia psychofizyczne możliwości oraz wcześniej nabyte
            umiejętności techniczne. Nasi pacjenci mają możliwość uczestniczenia w terapii zajęciowej
            codziennie.<br>
            Terapia zajęciowa odbywa się codziennie od poniedziałku do piątku.
        </p>
    `

    useEffect(() => {
        const element = document.getElementById('footer');
        const options = {
            root: null,
            treshold: 0.1,
        }
        const sectionObserver = new IntersectionObserver((entries)=> {
            const [entry] = entries;
            if(entry.isIntersecting) {
                setFreeBeds(10);

    {/*----------------setFreeBeds ony triggers rendering sliderBottom not chenging value in useState---------*/}
                
            }
        }, options);
        sectionObserver.observe(element);
    }, []);

    return(
        <div className={styles.home}>
            <div className={styles.slideUp}>
                <div className={styles.info}>
                    <h2>INFORMACJA</h2>
                    <p>ZOL „Stara Wieś” jest zakładem udzielającym całodobowych świadczeń zdrowotnych, które obejmują
                        swoim zakresem pielęgnację i rehabilitację osób, które przebyły ostrą fazę leczenia szpitalnego, mają
                        ukończony proces diagnozowania, leczenia operacyjnego lub intensywnego leczenia zachowawczego,
                        jednak nie wymagają dalszej hospitalizacji, a ze względu na stan zdrowia i stopień
                        niepełnosprawności oraz brak możliwości samodzielnego funkcjonowania w środowisku domowym.
                    </p>
                    <a href='/offer' role="button" className="btn btn-outline-light">
                        Przeczytaj więcej...
                    </a>
                </div>
            </div>

        {/*----------------AFFAIRS START-----------------------*/}

            <div className={clsx(styles.affairs, 'row d-flex align-items-center')}>
                <div className='col-md-4 col-sm-12'>
                    <CardAffair
                        text='Terapia zajęciowa - kształtowanie spostrzegawczości'
                        url={`${process.env.PUBLIC_URL}/images/gallery/patyczki.avif`}
                        alt='picture_1'
                        link='/gallery'
                    />
                </div>
                <div className='col-md-4 col-sm-12'>
                    <CardAffair
                        text='Terapia zajęciowa - poprawiamy sprawność ręki'
                        url={`${process.env.PUBLIC_URL}/images/gallery/rece.avif`}
                        alt='picture_2'
                        link='/gallery'
                    />
                </div>
                <div className='col-md-4 col-sm-12'>
                    <CardAffair
                        text='Terapia zajęciowa - efekty pracy'
                        url={`${process.env.PUBLIC_URL}/images/gallery/efekty.avif`}
                        alt='picture_2'
                        link='/gallery'
                    />
                </div>
                
            </div>

        {/*----------------AFFAIRS END -----------------------*/}

            <div className='row'>
                <div className={clsx(styles.infoCallMain, 'col-12')}>
                    <button type="button" className="btn btn-success">
                        <a href='/gallery'>Zobacz wszystkie aktualnosci</a>
                    </button>
                </div>
            </div>

            <div className='row'>
                <div className='col-lg-6 col-sm-12 p-0 m-0'>
                    <CardMain
                        url={`${process.env.PUBLIC_URL}/images/health.avif`}
                        alt='hospital_2'
                    />
                </div>
                <div className='col-lg-6 col-sm-12 p-0'>
                    <CardMain
                        welcome='Witamy na naszej stronie internetowej!'
                        header='Medistar Sp. z o.o.'
                        text='
                        Medistar Sp. z o.o.  jest podmiotem leczniczym będącym przedsiębiorcą w rozumieniu ustawy
                        z dnia 15 kwietnia 2011 r. o działalności leczniczej. Medistar jako niepubliczna placówka medyczna
                        jest wpisana do rejestru podmiotów wykonujących działalność leczniczą prowadzonego przez Wojewodę Lubelskiego w Lublinie. pod numerem księgi: 000000238538.'
                    />
                </div>
            </div>
            <div className='row'>
                <div className={clsx(styles.infoCall, 'col-12')}>
                    <h4>Masz do nas pytania? Zadzwoń +48 500867770</h4>
                </div>
            </div>

        {/*---------------------------CARDS START--------------------------------*/}

            <div className='row h-100'>
                <div className='col-lg-6 col-sm-12 p-0'>
                    <Card
                        url={`${process.env.PUBLIC_URL}/images/cards/stethoscope-6497490_640.avif`}
                        alt='hands_1'
                    />
                </div>
                <div className = 'col-lg-6 col-sm-12 p-0'>
                    <Card
                        header = 'Opieka medyczna'
                        text = {opiekaText}
                    /> 
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-6 col-sm-12 p-0'>
                    <Card
                        header = 'Rehabilitacja'
                        text = {rehabilitacjaText}
                    />
                </div>
                <div className='col-lg-6 col-sm-12 p-0'>
                    <Card
                        url ={`${process.env.PUBLIC_URL}/images/cards/fizjoterapia.avif`}
                        alt='fizoterapia_1'
                    />
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-6 col-sm-12 p-0'>
                    <Card
                        url ={`${process.env.PUBLIC_URL}/images/cards/hands-2906458_640.avif`}
                        alt='stetoscope_1'
                    />
                </div>
                <div className='col-lg-6 col-sm-12 p-0'>
                    <Card
                        header = 'Psycholog'
                        text = {psychologText}
                    />
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-6 col-sm-12 p-0'>
                    <Card
                        header = 'Terapia zajęciowa'
                        text = {terapiaText}
                    />
                </div>
                <div className='col-lg-6 col-sm-12 p-0'>
                    <Card
                        url={`${process.env.PUBLIC_URL}/images/cards/terapia_zajeciowa.avif`}
                        alt='terapia_zajeciowa_1'
                    />
                </div>
            </div>

        {/*-----------------CARDS END----------------------*/}    

        {/*-------------SLIDE BOTTOM START--------------------*/}    

            <div className={styles.slideBottom} id='slideBottom'>
                <div className={clsx(styles.slideInner, 'row justify-content-md-center')}>
                    <SlideBottomComponent
                        text='Miejsc w zakładzie opiekuńczo – leczniczym'
                        url={`${process.env.PUBLIC_URL}/images/icons/id-card-clip-solid.svg`}
                        alt='id-card-clip'
                        number={50}
                    />
                    <SlideBottomComponent
                        text='Wonych miejsc w zakładzie leczniczym'
                        url={`${process.env.PUBLIC_URL}/images/icons/bed-pulse-solid.svg`}
                        alt='bed-pulse'
                        number={freeBeds}
                    />
                    <SlideBottomComponent
                        text='Opieka sprawowana całodobowo'
                        url={`${process.env.PUBLIC_URL}/images/icons/user-doctor-solid.svg`}
                        alt='bed-pulse'
                        number={24}
                        name = 'H'
                    />
                </div>
            </div>

        {/*-------------SLIDE BOTTOM END--------------------*/}   

        </div>
    )
}

export default Home;