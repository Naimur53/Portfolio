import React, { useState } from 'react';

const SignleName = ({ word }) => {
    const [animate, setAnimate] = useState(false);
    // element.addEventListener("mouseenter", function () {
    //     element.style.animationName = "rubberBand";
    //     element.style.animationIterationCount = "1";
    // })
    // element.addEventListener("mouseleave", function () {
    //     setTimeout(() => {
    //         element.style.animationName = "none";
    //     }, 1050);
    // })
    const mouseenter = e => {
        setAnimate(true)
    }
    const mouseleave = e => {
        setTimeout(() => {
            setAnimate(false)
        }, 1050);
    }
    return <div onMouseEnter={mouseenter} onMouseLeave={mouseleave} className={`d-inline-block animation-1 ${animate ? 'animation_rubberBand' : 'animation_none'}`}><span className='  display-3  fw-bold'>{word}</span></div>
};

export default SignleName;
