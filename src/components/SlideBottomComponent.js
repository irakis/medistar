import clsx from 'clsx';
import styles from './SlideBottomComponent.module.scss';

const SlideBottomComponent = (parameters) => {

    const numberLimit = parameters.number;
    let upto = 0;

    const updated = () => {
        let count = document.getElementById(parameters.text)
        count.innerHTML = ++upto
        if(upto === numberLimit) {
            clearInterval(counts);
        }
    };
    let counts = setInterval(updated, 90);

    return(
        <div className={clsx(styles.slideBottomComponent,"col-lg-3 col-md-6 col-sm-12")}>
            <div className='row align-items-center text-center'>
                <div className='col-6 col-sm-5'>
                    <img src={parameters.url} alt={parameters.alt}/>
                </div>
                <div className='col-6  col-sm-5 text-center'><h1 id={parameters.text}>0</h1></div>
            </div>
            <div className='row align-items-center m-2'>
                <div className='col-12  col-sm-10 text-center m-2'><h5>{parameters.text}</h5></div>
            </div>
        </div>
    )
}

export default SlideBottomComponent;