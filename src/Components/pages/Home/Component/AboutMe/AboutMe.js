import React, { useEffect, useState, useRef } from 'react';
import SVG3DTagCloud from '3d-word-cloud';
import { Parallax } from 'react-scroll-parallax';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import styled from 'styled-components';
import Skills from '../Skills/Skills';
import { Box, Stack, Grid } from "@mui/material";
const SectionWipes2Styled = styled.div`
  overflow: hidden;
  width:100%;
  #pinContainer {
    height: 100vh;
    width: 100%;
    overflow: hidden;
  }
  #pinContainer .panel {
    height: 100vh;
    width: 100%;
    position: absolute; 
    display:flex;
    justify-content:center;
    align-items:center;
  } 
  .panel.black{
      background:#1c0522
  }
   
`;

const AboutMe = () => {
    const myrotation = useRef();
    const warp = useRef();
    const [widthSize, setWidthSize] = useState("500px")

    useEffect(() => {
        if (window.innerWidth < 600) {
            setWidthSize('300px')
        }
        else {
            if (warp?.current?.offsetWidth) {

                setWidthSize(warp.current?.offsetWidth + 'px')
            }
        }
    }, [warp?.current?.offsetWidth])
    useEffect(() => {
        //banner rotation s

        var entries = [
            { label: 'React' },
            { label: 'Fixing errors' },
            { label: 'Material Ui' },
            { label: 'Firebase' },
            { label: 'Private Route' },
            { label: 'Mongodb' },
            { label: 'Redux Toolkit' },
            { label: 'Express' },
            { label: 'Node Js' },
            { label: 'JSON' },
            { label: 'jQuery' },
            { label: 'Dev Tool' },
            { label: 'React Router' },
            { label: 'Custom Hooks' },
            { label: 'Axios' },
            { label: 'Git' },
            { label: 'Stripe' },
            { label: 'Javascript' },
            { label: 'npm' },
            { label: 'Context API,' },
            { label: 'No SQL' },
            { label: 'Css' },
            { label: 'Tailwind' },
            { label: 'Bootstrap' },
            { label: 'HTML' },
            { label: 'Socket.io' },
            { label: 'ES6' }
        ];
        var settings = {
            entries: entries,
            width: widthSize,
            height: 600,
            radius: '65%',
            radiusMin: 75,
            bgDraw: true,
            bgColor: 'transparent',
            opacityOver: 1.00,
            opacityOut: 1.00,
            opacitySpeed: 6,
            fov: 800,
            speed: 1,
            fontFamily: 'Oswald, Arial, sans-serif',
            fontSize: widthSize !== '300px' ? '20' : '12',
            fontColor: '#f51a75',
            fontWeight: 'bold',//bold
            fontStyle: 'normal',//italic 
            fontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
            fontToUpperCase: false,
            tooltipFontFamily: 'Oswald, Arial, sans-serif',
            tooltipFontSize: '11',
            tooltipFontColor: '#fff',
            tooltipFontWeight: 'normal',//bold
            tooltipFontStyle: 'normal',//italic 
            tooltipFontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
            tooltipFontToUpperCase: false,
            tooltipTextAnchor: 'middle',
            tooltipDiffX: 0,
            tooltipDiffY: 20

        };
        let svg3DTagCloud;
        if (myrotation.current) {
            if (!myrotation.current?.children.length) {

                svg3DTagCloud = new SVG3DTagCloud(myrotation.current, settings);
                console.log(svg3DTagCloud)
                console.log('i am call', myrotation, svg3DTagCloud);
            }
        }
        return () => {
            svg3DTagCloud?.destroy()
        }
    }, [myrotation.current, widthSize])
    return (
        <section id="aboutme" class="py-5 about_me_section ">

            {/* <div class="bol-1 bol"></div>
            <div class="bol-2 bol"></div> */}
            <div class="container ">

                <div class="row">

                    <div ref={warp} class="col-md-7 d-flex d-md-block justify-content-center">
                        <Controller  >
                            <Scene duration={widthSize === '300px' ? "10%" : "300%"} offset={warp.current?.offsetWidth ? warp.current?.offsetWidth / 2.7 : 400} pin>
                                <div>
                                    <div id="rotation" ref={myrotation}></div>
                                </div>
                            </Scene>
                        </Controller>



                    </div>
                    <div class="col-md-5 d-flex align-items-center overflow-hidden">

                        <SectionWipes2Styled>
                            <Controller>
                                <Scene
                                    triggerHook="onLeave"
                                    duration={widthSize === '300px' ? "400%" : "300%"}
                                    pin
                                >
                                    <Timeline
                                        wrapper={<div id="pinContainer" />}
                                    >
                                        <Tween
                                            from={{ opacity: 1 }}
                                            to={{ opacity: 0 }}
                                        >

                                            <section className="panel blue">
                                                <div className='text-white'>
                                                    <h1 className='fw-bold title'>About Myself</h1>
                                                    <p class="text-justify fs-5 pb-5"><span class="d-inline-block lh-base mt-2">Dedicated and efficient
                                                        front-end
                                                        developer with more than <span className='impo'> 1 year of
                                                            experience </span> in web development. I think I am a very hard worker and <span className='impo'>adaptive to learning new things</span>.  I am one of those candidates who prefer enjoying the work instead of doing it.</span>
                                                        <span class="d-inline-block my-3 ">I have experience in wordpress bug fixing using css and Dom
                                                        </span>
                                                        <br /> I am a
                                                        student of
                                                        Brahmanbaria Polytechnic Institute studying in computer Technology 5th semester.

                                                    </p>
                                                </div>
                                            </section>
                                        </Tween>
                                        <Tween
                                            from={{ x: '150%' }}
                                            to={{ x: '0%' }}
                                        >
                                            <section className="panel green">
                                                <div>
                                                    <h1 className='fw-bold mb-4  title'>Skills </h1>

                                                    <Skills></Skills>
                                                </div>
                                            </section>
                                        </Tween>
                                        <Tween
                                            from={{ y: '-150%' }}
                                            to={{ y: '0%' }}
                                        >
                                            <section className="panel black">
                                                <Grid container >
                                                    <Grid item xs={12}>
                                                        <h1 className='fw-bold  title'>Achievement </h1>
                                                        <p style={{ fontSize: '18px' }} className='my-3   mb-4'> I have done MERN stack course on Programing hero where I was <span className='impo'>top 5%</span> of the class and got <span className='impo'>Black Belt</span> Title as web developer</p>

                                                    </Grid>
                                                    <Grid item xs={4}>
                                                        <a href="https://i.ibb.co/Zfc62rr/top-1.jpg" target="_blank" rel="noreferrer">
                                                            <img className='img-fluid' src='https://i.ibb.co/Zfc62rr/top-1.jpg' alt='' />
                                                        </a>
                                                    </Grid>
                                                    <Grid item xs={4}>
                                                        <a href="https://i.ibb.co/C7tMdh0/277821879-1342431279572667-6876553603632776641-n.png" target="_blank" rel="noreferrer">

                                                            <img className='img-fluid' src='https://i.ibb.co/C7tMdh0/277821879-1342431279572667-6876553603632776641-n.png' alt='' />
                                                        </a>
                                                    </Grid>
                                                    <Grid item xs={4}>
                                                        <a href="https://i.ibb.co/X845HY1/ra.png" target="_blank" rel="noreferrer">

                                                            <img className='img-fluid' src='https://i.ibb.co/tBG6sv4/recomendation.png' alt='' />
                                                        </a>
                                                    </Grid>



                                                    <div>



                                                    </div>
                                                </Grid>
                                            </section>
                                        </Tween>
                                    </Timeline>
                                </Scene>
                            </Controller>
                        </SectionWipes2Styled>
                        {/* <div className='text-white'>
                            <h1 className='fw-bold'>About Myself</h1>
                            <p class="text-justify fs-5 pb-5"><span class="d-inline-block lh-base mt-2">Dedicated and efficient
                                front-end
                                developer with 1 year of
                                experience in HTML,
                                CSS, JS, jQuery plugin, Bootstrap and also have 3 months experience with React
                                Js.</span>
                                <span class="d-inline-block my-3">I have experience in wordpress bug fixing with css and Dom
                                </span>
                                <br /> I am a
                                student of
                                Brahmanbaria Polytechnic Institute studying in computer Technology 3rd semester.

                            </p>
                        </div> */}
                    </div>

                </div>

            </div>
        </section>
    );
};

export default AboutMe;