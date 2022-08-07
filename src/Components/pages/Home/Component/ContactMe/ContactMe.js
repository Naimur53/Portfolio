import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container, Grid } from '@mui/material';
const ContactMe = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        emailjs.init("user_a3GVCrfeuHPf6uxUpcNzX")
    }, [])


    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true)

        emailjs.sendForm('service_k43azve', 'template_u7c7h1b', '#contact-form')
            .then((result) => {
                form.current.reset()
                setLoading(false)
                toast.success('Thanks for your Email', {
                    position: "bottom-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    theme: 'dark',
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }, (error) => {
                setLoading(false)
                toast.error('Something is went wrong', {
                    position: "bottom-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    theme: 'dark',
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            });
    };
    return (
        <section id='contact' className="contact-section py-5">
            <div className="bol-4 bol"></div>
            <Container className="  content-container">
                <Grid container data-aos="fade-up" spacing={4}>
                    <Grid md={6} item xs={12}>
                        <form ref={form} id="contact-form" onSubmit={sendEmail}>
                            <Grid container spacing={4}>
                                <Grid item xs={12} md={6}>
                                    <input required type="hidden" name="contact_number" />
                                    <input className="w-full   p-3 rounded" required type="text" placeholder="Name"
                                        name="user_name" />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <input className="w-full p-3 rounded" required type="email" placeholder="Email"
                                        name="user_email" />
                                </Grid>
                                <Grid item xs={12} md={12}>
                                    <textarea className="w-full p-3 rounded" rows="7" name="message"
                                        placeholder="Your message"></textarea>
                                </Grid>
                            </Grid>
                            <div className="d-flex justify-content-center mt-3">

                                {
                                    loading ? <input className="text-center rounded text-white mb-2 px-3 py-2 " value="Sending" type='button' /> : <input className="rounded text-white mb-2 px-3 py-2 " type="submit" value="Send Message" />
                                }
                            </div>
                        </form>

                    </Grid>
                    <Grid item md={6} xs={12}>
                        <Grid container spacing={4}>
                            <Grid item xs={12}>
                                <div className="p-2 py-4 contact-box flex flex-col items-center  ">
                                    <div
                                        className="contact-icon-wrap flex justify-center items-center rounded-full">

                                        <LocationOnIcon></LocationOnIcon>
                                    </div>
                                    <p className="mt-3">Munshigonj, Dhaka, Bangladesh</p>

                                </div>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <div className="p-2 py-4 contact-box flex flex-col items-center h-full ">
                                    <div
                                        className="contact-icon-wrap flex justify-center items-center rounded-full">

                                        <MailOutlineIcon></MailOutlineIcon>
                                    </div>
                                    <p className="mt-3">naimurrhman53@gmail.com</p>

                                </div>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <div
                                    className="p-2 pt-4 h-100 contact-box flex flex-col items-center  ">
                                    <div
                                        className="contact-icon-wrap flex justify-center items-center rounded-full">

                                        <ConnectWithoutContactIcon></ConnectWithoutContactIcon>
                                    </div>
                                    <ul className="social  flex justify-center pl-0 w-full mt-3">
                                        <li><a href="https://github.com/Naimur53"> <GitHubIcon></GitHubIcon>
                                        </a></li>
                                        <li><a href="https://www.facebook.com/naimur.rahman.39501789"><FacebookIcon></FacebookIcon></a></li>
                                        <li><a href="https://www.linkedin.com/in/naimur-rahman-a56b83216/"><LinkedInIcon></LinkedInIcon></a></li>


                                    </ul>

                                </div>
                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>
            </Container>
            <ToastContainer />
        </section>
    );
};

export default ContactMe;