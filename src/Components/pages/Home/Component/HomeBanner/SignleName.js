import React, { useState } from 'react';

const SignleName = ({ word }) => {
    const [animate, setAnimate] = useState(false);

    const mouseenter = e => {
        setAnimate(true)
    }
    const mouseleave = e => {
        setTimeout(() => {
            setAnimate(false)
        }, 1050);
    }
    return <div onMouseEnter={mouseenter} onMouseLeave={mouseleave} className={`inline-block animation-1 ${animate ? 'animation_rubberBand' : 'animation_none'}`}><span className='text-7xl  font-bold '>{word}</span></div>
};

export default SignleName;
