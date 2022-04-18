import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
        <section id='contact' class="contact-section py-5">
            <div class="bol-4 bol"></div>
            <div class="container  content-container">
                <div class="row  " data-aos="fade-up">
                    <div class="col-md-6  ">
                        <form ref={form} id="contact-form" onSubmit={sendEmail}>
                            <div class="row">
                                <div class="col-md-6">
                                    <input required type="hidden" name="contact_number" />
                                    <input class="w-100 p-3 rounded" required type="text" placeholder="Name"
                                        name="user_name" />
                                </div>
                                <div class="col-md-6">
                                    <input class="w-100 p-3 rounded" required type="email" placeholder="Email"
                                        name="user_email" />
                                </div>
                                <div class="col-md-12">
                                    <textarea class="w-100 mt-4 p-3 rounded" rows="7" name="message"
                                        placeholder="Your message"></textarea>
                                </div>
                            </div>
                            <div class="d-flex justify-content-center mt-3">

                                {
                                    loading ? <input class="text-center rounded text-white px-3 py-2 " value="Sending" type='button' /> : <input class="rounded text-white mb-2 px-3 py-2 " type="submit" value="Send Message" />
                                }
                            </div>
                        </form>

                    </div>
                    <div class="col-md-6 ">
                        <div class="row g-4">
                            <div class="col-md-12">
                                <div class="p-2 py-4 contact-box d-flex flex-column align-items-center justify-content ">
                                    <div
                                        class="contact-icon-wrap d-flex justify-content-center align-items-center rounded-circle">

                                        <i class="fas fs-3 fa-map-marker-alt"></i>
                                    </div>
                                    <p class="mt-3">Munshigonj, Dhaka, Bangladesh</p>

                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="p-2 py-4 contact-box d-flex flex-column align-items-center justify-content ">
                                    <div
                                        class="contact-icon-wrap d-flex justify-content-center align-items-center rounded-circle">

                                        <i class=" fs-3 far fa-envelope"></i>
                                    </div>
                                    <p class="mt-3">naimurrhman53@gmail.com</p>

                                </div>
                            </div>
                            <div class="col-md-6">
                                <div
                                    class="p-2 pt-4 h-100 contact-box d-flex flex-column align-items-center justify-content ">
                                    <div
                                        class="contact-icon-wrap d-flex justify-content-center align-items-center rounded-circle">

                                        <i class="fas fa-handshake-slash"></i>
                                    </div>
                                    <ul class="social d-flex justify-content-center ps-0 w-100 mt-3">
                                        <li><a href="https://github.com/Naimur53"> <i class="fab fa-github mx-2"></i>
                                        </a></li>
                                        <li><a href="https://www.facebook.com/naimur.rahman.39501789"><i
                                            class="fab fa-facebook mx-2"></i></a></li>
                                        <li><a href="https://www.linkedin.com/in/naimur-rahman-a56b83216/"><i
                                            class="fab fa-linkedin-in mx-2"></i></a></li>


                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <ToastContainer />
        </section>
    );
};

export default ContactMe;