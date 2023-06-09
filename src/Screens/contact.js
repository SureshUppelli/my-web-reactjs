/* eslint-disable jsx-a11y/no-redundant-roles */
import React from "react";
import Footer from "../Components/Footer";
import TopNav from "../Components/TopNav";

export default function Contact() {
    return (
        <div>
            <TopNav />
            <main id="main">

                <div className="breadcrumbs d-flex align-items-center" style={{ backgroundImage: "url('assets/img/contact-header.jpg')" }}>
                    <div className="container position-relative d-flex flex-column align-items-center">
                        <h2>Contact</h2>
                        <ol>
                            <li><a href="/">Home</a></li>
                            <li>Contact</li>
                        </ol>

                    </div>
                </div>

                <section id="contact" className="contact">
                    <div className="container position-relative" data-aos="fade-up">
                        <div className="row gy-2 d-flex">

                            <div className="col-lg-3" data-aos="fade-up" data-aos-delay="100">

                                <div className="info-item d-flex">
                                    <i className="bi bi-geo-alt flex-shrink-0"></i>
                                    <div>
                                        <h4 style={{ color: '#013E7B' }}>USA</h4>
                                        Novisync Inc<br />
                                        300 Westage Business Center Drive <br />
                                        Suite 400<br />
                                        Fishkill, New York 12524<br />
                                        United States <br /><br />
                                    </div>
                                </div>

                            </div>

                            <div className="col-lg-3" data-aos="fade-up" data-aos-delay="100">

                                <div className="info-item d-flex">
                                    <i className="bi bi-geo-alt flex-shrink-0"></i>
                                    <div>
                                        <h4 style={{ color: '#013E7B' }}>Canada</h4>
                                        Novisync Canada Inc<br />
                                        165 Simcoe CI SW <br />
                                        Calgary, Alberta – T3J 5H2<br />
                                    </div>
                                </div>

                            </div>

                            <div className="col-lg-3" data-aos="fade-up" data-aos-delay="100">

                                <div className="info-item d-flex">
                                    <i className="bi bi-geo-alt flex-shrink-0"></i>
                                    <div>
                                        <h4 style={{ color: '#013E7B' }}>India</h4>
                                        Novisync Solutions India Pvt. Ltd.<br />
                                        11-9-28, PLOT NO 62<br />
                                        Daspalla Hills<br />
                                        visakhapatnam,Andhra Pradesh<br />
                                        530002 <br /><br />
                                    </div>
                                </div>

                            </div>

                            <div className="col-lg-3" data-aos="fade-up" data-aos-delay="100">

                                <div className="info-item d-flex">
                                    <i className="bi bi-geo-alt flex-shrink-0"></i>
                                    <div>
                                        <h4 style={{ color: '#013E7B' }}>South Africa</h4>
                                        Novisync Solutions SA<br />
                                        Birchwood Court<br />
                                        43 Montrose St, Vorna Valley<br />
                                        Johannesburg<br />
                                        Gauteng, South Africa – 1686<br /><br />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br />
                        <br />
                        <div className="row gy-4 d-flex justify-content-end">

                            <div className="col-lg-5" data-aos="fade-up" data-aos-delay="100">



                                <div className="info-item d-flex">
                                    <i className="bi bi-envelope flex-shrink-0"></i>
                                    <div >
                                        <h4 style={{ color: '#013E7B' }}>Email:</h4>
                                        <p>contact@novisync.com</p>
                                    </div>
                                </div>

                                <div className="info-item d-flex">
                                    <i className="bi bi-phone flex-shrink-0"></i>
                                    <div>
                                        <h4 style={{ color: '#013E7B' }}>Call:</h4>
                                        <p>+1-833-668-4796</p>
                                    </div>
                                </div>

                            </div>

                            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="250">
                                {/* //eslint-disable-next-line */}
                                <form action="" method="post" role="form" className="php-email-form">
                                    <div className="row">
                                        <div className="col-md-6 form-group">
                                            <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                                        </div>
                                        <div className="col-md-6 form-group mt-3 mt-md-0">
                                            <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                                        </div>
                                    </div>
                                    <div className="form-group mt-3">
                                        <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                                    </div>
                                    <div className="form-group mt-3">
                                        <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                                    </div>
                                    <div className="my-3">
                                        <div className="loading">Loading</div>
                                        <div className="error-message"></div>
                                        <div className="sent-message">Your message has been sent. Thank you!</div>
                                    </div>
                                    <div className="text-center"><button type="submit">Send Message</button></div>
                                </form>

                            </div>

                        </div>

                    </div>
                </section>

            </main>
            <Footer />
        </div>
    )
}