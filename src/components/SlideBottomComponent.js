import React, { useState } from "react";
import clsx from 'clsx';
import styles from './SlideBottomComponent.module.scss';

const SlideBottomComponent = (parameters) => {

    const [time, setTime] = useState(0);
    const numberLimit = parameters.number;
    
    const A = setInterval(
        () => { setTime(prevTime => (prevTime + 0));

            if(time === numberLimit) {
               
                console.log('stop fucking counting!!!!');
                clearInterval(A);
            }

    }, 1000);

    return(
        <div className={clsx(styles.slideBottomComponent,"col-3")}>
            <div className='row align-items-center text-center'>
                <div className='col-6'>
                    <img src={parameters.url} alt={parameters.alt}/>
                </div>
                <div className='col-6 text-center'><h1>{time}</h1></div>
            </div>
            <div className='row align-items-center m-2'>
                <div className='col-12 text-center m-2'><h5>{parameters.text}</h5></div>
            </div>
        </div>
    )
}

export default SlideBottomComponent;