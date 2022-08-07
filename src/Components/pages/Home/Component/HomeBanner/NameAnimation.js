import React from 'react';
import SignleName from './SignleName';

const NameAnimation = ({ phone }) => {
    return (
        <div>
            <div className='mb-3' data-aos="fade-up" data-aos-delay={phone ? '1900' : "2200"}>
                {
                    "Hi,".split('').map((word, i) => <SignleName key={i} word={word}></SignleName>)
                }
            </div>
            <div className='mb-3' data-aos="fade-up" data-aos-delay={phone ? "2200" : "2400"}>

                <div className="inline-block">
                    {
                        "I ".split('').map((word, i) => <SignleName key={i} word={word}></SignleName>)
                    }
                </div>
                <div className="ml-3 inline-block">
                    {
                        "am ".split('').map((word, i) => <SignleName key={i} word={word}></SignleName>)
                    }
                </div>
                <div className="ml-3 inline-block">
                    {
                        "Naimur ".split('').map((word, i) => <SignleName key={i} word={word}></SignleName>)
                    }
                </div>
            </div>
            <div className='mb-3' data-aos="fade-up" data-aos-delay={phone ? '2400' : "2500"}>
                <div className="  inline-block">
                    {
                        "Mern ".split('').map((word, i) => <SignleName key={i} word={word}></SignleName>)
                    }
                </div>
                <div className="ml-3 inline-block">
                    {
                        "Developer ".split('').map((word, i) => <SignleName key={i} word={word}></SignleName>)
                    }
                </div>

            </div>
        </div>
    );
};

export default NameAnimation;