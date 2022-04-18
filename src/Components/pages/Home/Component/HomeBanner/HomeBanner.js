import React, { useEffect, useRef, useState } from 'react';
import { Parallax } from 'react-scroll-parallax';
import NameAnimation from './NameAnimation';


// https://i.ibb.co/wrSWxWY/stars.png
// https://i.ibb.co/gzjpBHW/first.png
// https://i.ibb.co/F6ZFXRn/moon.png

// https://i.ibb.co/yNYtymZ/mountains-front.png
// https://i.ibb.co/xJtKLCb/second.png

const HomeBanner = () => {
    const [scrollValue, setScrollValue] = useState(0)
    useEffect(() => {
        window.addEventListener("scroll", function () {
            let value = window.scrollY;
            setScrollValue(value)
        })

    })
    return (
        <div>
            <section className="position-relative  top-header-warper">

                <div className="top-header position-absolute naimur-height-100">
                    <img style={{ left: scrollValue * 0.25 + 'px' }} id="stars" src="https://i.ibb.co/wrSWxWY/stars.png" alt="" />
                    <img id="moon" data-aos="fade-down" data-aos-delay="2000" style={{ top: scrollValue * 1 + 'px' }} src="https://i.ibb.co/F6ZFXRn/moon.png" alt="" />
                    <img id="mountains_behind" data-aos="fade-up" data-aos-delay="1800" style={{ top: scrollValue * 0.8 + 'px' }} src="https://i.ibb.co/gzjpBHW/first.png" alt="" />
                    <img id="mountains_front" data-aos="fade-up" data-aos-delay="1600" style={{ top: scrollValue * 0.1 + 'px' }} src="https://i.ibb.co/xJtKLCb/second.png" alt="" />
                </div>
                <div className="mt-5 about_me_text_container">
                    <div className="">
                        <div className="container about_me_text_wrapper mt-5 ">
                            <div className="row">
                                <div className="col-md-7">
                                    <div className="  mb-5 d-flex h-100  justify-content-sm-start justify-content-center  align-items-center ">
                                        <NameAnimation></NameAnimation>
                                    </div>
                                </div>
                                <div className="col-md-5 d-flex align-items-center justify-content-center h-100">
                                    <img
                                        data-aos="fade-left" data-aos-delay="2600"
                                        src="https://i.ibb.co/hHfDr1d/IMG-20211223-155459-removebg-preview.png"
                                        className="img-fluid my-img rounded-circle mt-5 md-0 sadi-img" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default HomeBanner;