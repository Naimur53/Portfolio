import { Container, Grid } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import NameAnimation from './NameAnimation';


const HomeBanner = () => {
    const [scrollValue, setScrollValue] = useState(0)
    const [phone, setPhone] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", function () {
            let value = window.scrollY;
            setScrollValue(value)
        })

    }, [])
    useEffect(() => {
        setPhone(window.innerWidth < 500)
    }, [window.innerWidth])
    return (
        <div>
            <section className="relative  top-header-warper">

                <div className="top-header absolute naimur-height-100">
                    <img style={{ left: scrollValue * 0.25 + 'px' }} id="stars" src="https://i.ibb.co/Yt7WFY3/stars.png" alt="" />
                    <img id="moon" data-aos="fade-down" data-aos-delay={phone ? "1800" : "2000"} style={{ top: scrollValue * 1 + 'px' }} src="https://i.ibb.co/Vp7VtDW/moon.png" alt="" />
                    <img id="mountains_behind" data-aos="fade-up" data-aos-delay={phone ? '1200' : "1800"} style={{ top: scrollValue * 0.8 + 'px' }} src="https://i.ibb.co/gzjpBHW/first.png" alt="" />
                    <img id="mountains_front" data-aos="fade-up" data-aos-delay={phone ? '1300' : "1600"} style={{ top: scrollValue * 0.1 + 'px' }} src="https://i.ibb.co/M2d15z6/second.png" alt="" />
                </div>
                <div className="mt-5 about_me_text_container absolute inset-0 z-10 flex justify-center items-center">
                    <div className="w-full">
                        <Container className=" about_me_text_wrapper mt-5 ">
                            <Grid container>
                                <Grid md={7} xs={12} item>
                                    <div className="  mb-5 flex h-full w-full justify-center  items-center ">
                                        <NameAnimation phone={phone}></NameAnimation>
                                    </div>
                                </Grid>
                                <Grid md={5} xs={12} item className="flex items-center justify-center h-full">
                                    <img
                                        data-aos="fade-left" data-aos-delay="2600"
                                        src="https://i.ibb.co/LNfvVvT/IMG-20211223-155459-removebg-preview.png"
                                        className="img-fluid my-img rounded-full mt-5 md-0 sadi-img" alt="" />
                                </Grid>
                            </Grid>
                        </Container>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default HomeBanner;