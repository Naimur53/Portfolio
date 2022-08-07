import { Container, IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { allData } from '../../../MangeState/dataSlice';
import MenuIcon from '@mui/icons-material/Menu';

const NavBar = () => {
    const [change, setChange] = useState(false)
    const { windowLoad } = useSelector(allData);
    const [expand, setExpand] = useState(false);
    useEffect(() => {
        if (window.innerWidth < 500) {
            setChange(true)
            setTimeout(() => {
            }, 3000);

        } else {
            window.onscroll = function () {
                let value = window.scrollY;
                if (window.innerWidth > 500) {

                    if (value > 500) {
                        setChange(true)
                    }
                    else {
                        setChange(false)
                    }
                }

            }
        }
    }, [])
    const Ul = <ul className=" flex flex-col md:flex-row   py-2   mt-4 md:mt-0 mb-2 lg:mb-0  items-center justify-center">
        <li className="px-2" data-aos="fade-down" data-aos-delay="100" data-aos-easing="linear">
            <NavLink to='/home' className="nav-link active font-mono" aria-current="page">Home</NavLink>
        </li>
        <li className="px-2" data-aos="fade-down" data-aos-delay="200" data-aos-easing="linear">
            <a className="nav-link font-mono" href="/home#aboutme">About me</a>
        </li>
        <li className="px-2 " data-aos="fade-down" data-aos-delay="300" data-aos-easing="linear" >
            <a className="nav-link font-mono" href="/home#contact">Contact me</a>
        </li>
        <li className="px-2" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="400">
            <NavLink className="nav-link font-mono" to='/blog'>Blog</NavLink>
        </li>
        <li className="nav-item mt-3 md:mt-0" data-aos="fade-down" data-aos-delay="500" data-aos-easing="linear" >
            <a target="_blank" className="nav-link font-mono resume ml-2"
                href="https://drive.google.com/file/d/1WKRO1KWgteJaALwgcv3Q7u59dq-BMkUX/view" without rel="noreferrer">Resume</a>
        </li>
    </ul>
    return (
        <div>
            <nav id="nav" className="p-0 flex fixed top-0 z-50" style={{ background: change ? 'rgba(0, 0, 0,0.3)' : 'transparent', width: '100vw', backdropFilter: change ? 'blur(5px)' : 'blur(0)', }}>
                <Container maxWidth='xl' sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <a className="navbar-brand" data-aos="fade-right" data-aos-delay="200" href="#">
                        <svg id="svg_wrapper" width="585" height="362" viewBox="0 0 585 362" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <rect width="585" height="362" />
                            <path id="signature" style={{ animationName: !windowLoad ? "sig" : '' }}
                                d="M117 99C117.892 88.8261 118.955 78.6904 120.222 68.5556C121.517 58.1982 125.011 45.0238 122.222 34.6111C120.278 27.3544 107.541 29.2519 102.556 30.8889C82.8655 37.3543 64.1538 56.0512 50.0556 70.3333C29.3733 91.2853 12.2261 116.035 5.22223 145C1.74901 159.364 -0.547067 177.878 6.44445 191.611C22.5546 223.256 59.0211 218.247 89 219.222C115.439 220.082 142.463 221.582 167.556 230.778C176.675 234.12 187.619 239.818 192 249.111C196.033 257.667 194.241 270.76 192.444 279.556C188.958 296.624 181.315 314.95 168 326.667C136.139 354.704 88.2221 358.85 47.7222 359.889C40.4824 360.075 32.6924 360.674 25.4445 360C22.4743 359.724 23.1076 353.077 23.0556 351.333C22.7743 341.911 25.4442 337.235 33.3333 331.667C50.0113 319.894 68.6716 310.422 86.3889 300.333C109.571 287.133 133.396 275.042 156.222 261.222C171.786 251.799 186.594 239.979 203.778 233.556C207.581 232.134 215.044 228.865 218.444 233C227.708 244.266 229.345 263.578 231.889 277.111C235.345 295.496 238.244 313.948 241 332.444C241.061 332.856 243.384 350.253 246.278 346.222C247.97 343.865 250.258 337.434 250.944 335.667C255.203 324.696 259.479 313.706 263.556 302.667C269.859 285.597 274.853 268.256 274.611 249.889C274.549 245.13 274.55 236.813 270.556 233C267.696 230.271 267.203 235.247 267.111 236.944C266.508 248.098 267 259.388 267 270.556C267 276.915 265.772 284.779 267.167 291.056C268.082 295.176 277.144 275.281 277.333 274.778C281.848 262.806 284.615 250.25 289.278 238.333C289.586 237.545 291.116 232.024 293.222 233.556C300.369 238.753 303.291 254.407 306 262C309.939 273.042 313.26 284.652 318.278 295.278C320.424 299.824 323.911 289.387 324.222 288.556C329.459 274.568 331.264 259.573 332.389 244.778C332.531 242.911 332.142 218.546 336.667 218.889C338.591 219.035 341.373 223.011 341.889 223.778C348.044 232.915 352.793 243.189 358.278 252.722C367.85 269.36 377.643 286.591 391 300.556C392.911 302.553 398.141 308.352 401.722 307.611C411.421 305.604 420.479 288.049 424.889 281.111C445.338 248.937 463.903 215.606 484.5 183.5C501.712 156.669 520.77 130.424 530.444 99.6667C540.326 68.2505 545.11 23.849 510.889 5.88889C507.528 4.12517 503.034 2.11111 499.111 2.11111C495.148 2.11111 495.939 8.95187 495.778 11.3333C492.893 53.8868 490.209 95.9912 494.667 138.667C496.906 160.106 501.895 181.098 504.722 202.444C504.99 204.468 505.983 211.278 505.556 214.111C505.074 217.305 499.846 210.814 497.778 208.333C484.267 192.135 470.182 177.634 451.722 167C445.46 163.392 430.929 153.672 426.222 164.556C419.23 180.726 421.187 202.18 421.056 219.278C420.875 242.774 419.735 266.807 422.111 290.222C423.861 307.47 435.181 362.757 465 347.333C470.322 344.581 475.339 339.219 478.889 334.667C488.548 322.279 496.274 307.863 502.722 293.611C515.603 265.143 522.708 234.678 532.111 205C547.762 155.606 538.983 203 534 203"
                                stroke="#fff" strokeWidth="10" strokeLinecap="round" />
                            <path id="signature_last" style={{ animationName: !windowLoad ? "sig_last" : '' }} d="M581 127C581.157 128.591 583.971 146.985 582 146" stroke="#fff"
                                strokeWidth="15" strokeLinecap="round" />
                        </svg>

                    </a>
                    <div className='relative' >

                        <div data-aos="fade-left" data-aos-delay="200" className="inline-block md:hidden relative">

                            <IconButton onClick={() => { setExpand(!expand) }}>
                                <MenuIcon></MenuIcon>
                            </IconButton>
                            {
                                expand ? <div style={{ background: change ? 'rgba(0, 0, 0,0.3)' : 'transparent', backdropFilter: change ? 'blur(5px)' : 'blur(0)', }} className="absolute rounded-md top-10 p-5 right-0 z-50 bg-black">
                                    <div className="w-52">
                                        {Ul}
                                    </div>
                                </div> : <div></div>
                            }
                        </div>
                        <div className="hidden md:block">

                            {Ul}

                        </div>

                    </div>
                </Container>
            </nav>
        </div>
    );
};

export default NavBar;