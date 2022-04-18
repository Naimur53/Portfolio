import React, { useEffect } from 'react';
import AboutMe from './Component/AboutMe/AboutMe';
import BestProjects from './Component/BestProjects/BestProjects';
import CommonHeading from './Component/CommonHeading/CommonHeading';
import ContactMe from './Component/ContactMe/ContactMe';
import HomeBanner from './Component/HomeBanner/HomeBanner';
import ShowCase from './Component/ShowCase/ShowCase';
import SVG3DTagCloud from '3d-word-cloud';
import ProjectCard from './Component/ProjectCard/ProjectCard';
import { useSelector } from 'react-redux';
import { allData } from '../../../MangeState/dataSlice';
import LoadingCom from './Component/LoadingCom/LoadingCom';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

const Home = () => {
    const { windowLoad } = useSelector(allData)

    return (
        <div pages={2} style={{ top: '0', left: '0' }}>
            <LoadingCom></LoadingCom>
            <HomeBanner></HomeBanner>
            <AboutMe></AboutMe>
            <CommonHeading index={1} heading='Some thing i have build'></CommonHeading>
            <BestProjects></BestProjects>
            <CommonHeading index={2} heading='Showcase'></CommonHeading>
            <ShowCase></ShowCase>
            <CommonHeading index={3} heading='Contact Me'></CommonHeading>
            <ContactMe></ContactMe>


        </div>
    );
};

export default Home;