import React, { useEffect, useMemo, useRef, useState } from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const CustomCircular = ({ value, half, text }) => {
    const targetRef = useRef();
    const [isVisible, setIsVisible] = useState(false);
    const options = useMemo(() => {
        return {
            root: null,
            rootMargin: '-10px',
            threshold: window.innerWidth > 500 ? .1 : 1
        }
    }, [])
    useEffect(() => {
        // creating observer
        const observer = new IntersectionObserver(entries => {
            const [entry] = entries;


            setIsVisible(entry.isIntersecting)
        }, options)
        //init observer
        const currentTarget = targetRef.current;
        if (currentTarget) observer.observe(currentTarget);

        return () => {
            if (currentTarget) observer.unobserve(currentTarget)
        }
    }, [targetRef, options]);
    return (
        <>
            <CircularProgressbar circleRatio={half ? 0.5 : 1} text={`${isVisible ? value : 0}% `} value={isVisible ? value : 0}
                styles={buildStyles({
                    // Rotation of path and trail, in number of turns (0-1)
                    rotation: half ? 0.75 : 1,
                    trailColor: 'rgba(0, 0, 0, 1)',
                    backgroundColor: '#3e98c7',
                })}


            />
            <p ref={targetRef} style={{ fontSize: '10px', marginTop: half ? '-10px' : '10px', }} className={`text-center line-break-anywhere  font-mono ${half ? 'mb-2' : 'mb-5'} `}>{text}</p>
        </>
    );
};

export default CustomCircular;