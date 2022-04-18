import React, { useRef } from 'react';
import SignleName from './SignleName';

const NameAnimation = () => {
    const name = 'HiIamNaimur'.split('');
    return (
        <div>
            <div data-aos="fade-up" data-aos-delay="2200">
                {
                    "Hi,".split('').map((word, i) => <SignleName key={i} word={word}></SignleName>)
                }
            </div>
            <div data-aos="fade-up" data-aos-delay="2400">

                <div className="d-inline-block">
                    {
                        "I ".split('').map((word, i) => <SignleName key={i} word={word}></SignleName>)
                    }
                </div>
                <div className="ms-3 d-inline-block">
                    {
                        "am ".split('').map((word, i) => <SignleName key={i} word={word}></SignleName>)
                    }
                </div>
                <div className="ms-3 d-inline-block">
                    {
                        "Naimur ".split('').map((word, i) => <SignleName key={i} word={word}></SignleName>)
                    }
                </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="2500">
                <div className="  d-inline-block">
                    {
                        "Mern ".split('').map((word, i) => <SignleName key={i} word={word}></SignleName>)
                    }
                </div>
                <div className="ms-3 d-inline-block">
                    {
                        "Developer ".split('').map((word, i) => <SignleName key={i} word={word}></SignleName>)
                    }
                </div>

            </div>
        </div>
    );
};

export default NameAnimation;