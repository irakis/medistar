import React, { useState } from "react";
import clsx from 'clsx';
import styles from './SlideBottomComponent.module.scss';

const SlideBottomComponent = (parameters) => {

    const [time, setTime] = useState(0);
    const numberLimit = parameters.number;
    
    const displayTime = () => {
        setTime(time => (time + 0));
    };

    const A = setInterval(displayTime, 1000);


    if(time === numberLimit) {
        window.alert('stop!!')
        console.log('stop fucking counting!!!!');
        clearInterval(A);
    };


    return(
        <div className={clsx(styles.slideBottomComponent,"col-3")} onLoad={displayTime}>
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