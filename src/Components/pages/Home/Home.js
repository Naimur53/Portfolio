import React from 'react';
import AboutMe from './Component/AboutMe/AboutMe';
import BestProjects from './Component/BestProjects/BestProjects';
import CommonHeading from './Component/CommonHeading/CommonHeading';
import ContactMe from './Component/ContactMe/ContactMe';
import HomeBanner from './Component/HomeBanner/HomeBanner';
import ShowCase from './Component/ShowCase/ShowCase';
import LoadingCom from './Component/LoadingCom/LoadingCom';

const Home = () => {

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