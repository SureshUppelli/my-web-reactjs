/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Footer from '../Components/Footer'
import TopNav from '../Components/TopNav'

export default function About() {
    return (
        <div>
            <TopNav />
            <main id="main">
                <div className="breadcrumbs d-flex align-items-center" style={{ backgroundImage: "url('assets/img/about-header.jpg')" }}>
                    <div className="container position-relative d-flex flex-column align-items-center">

                        <h2>About</h2>
                        <ol>
                            <li><a href="/">Home</a></li>
                            <li>About</li>
                        </ol>

                    </div>
                </div>
                <section id="about" className="about">
                    <div className="container" data-aos="fade-up">

                        <div className="row gy-4" data-aos="fade-up">
                            <div className="col-lg-4">
                                <img src="assets/img/about.jpg" className="img-fluid" alt="" />
                            </div>
                            <div className="col-lg-8">
                                <div className="content ps-lg-5">
                                    <h3>Who We are</h3>
                                    <p>
                                        Founded in 2007, Novisync , built its name and reputation by delivering excellence through software, solutions, and services by being recognized multiple times by Inc. 5000® and CRN 250®
                                    </p>
                                    <p>
                                        Novisync is a niche minority business enterprise (MBE) that specializes in services, solutions and software. We are committed to the development and growth of our communities through DE&I initiatives that also can help our customers achieve their ESG goals by doing business the right way.
                                    </p>
                                    <p>
                                        <strong>Our Vision:</strong>  To be the best IT Services, Software, and Solutions provider in our field by constantly delivering value and exceeding our customers expectations.
                                    </p>
                                    <p>
                                        <strong>Our Culture:</strong> Our culture is in our company’s DNA and is part of who we are. We believe in always doing what is right, even when it is difficult.
                                    </p>
                                    <p>
                                        <strong>Our Values:</strong> The 3T’s Trust, Transparency, and Totally Surpassing Expectations
                                    </p>
                                    <ul>
                                        <li><i className="bi bi-check-circle-fill"></i>Trust - Always do what is right.</li>
                                        <li><i className="bi bi-check-circle-fill"></i>Transparency - Be open about everything, No bad surprises.</li>
                                        <li><i className="bi bi-check-circle-fill"></i>Totally Surpassing Expectations - Go above and beyond what is expected to deliver true value.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
                {/* <section id="why-us" className="why-us">
                    <div className="container" data-aos="fade-up">

                        <div className="section-header">
                            <h2>What We Do</h2>

                        </div>

                        <div className="row g-0" data-aos="fade-up" data-aos-delay="200">

                            <div className="col-xl-5 img-bg" style={{ backgroundImage: "url('assets/img/why-us-bg.jpg')" }}></div>
                            <div className="col-xl-7 slides  position-relative">

                                <div className="slides-1 swiper">
                                    <div className="swiper-wrapper">

                                        <div className="swiper-slide">
                                            <div className="item">
                                                <h3 className="mb-3">Areas of focus</h3>
                                                <p>Cyber</p>
                                                <p>Project Management, Agile & Scrum</p>
                                                <p>AI & Machine Learning</p>
                                                <p>Automation</p>
                                                <p>Hybrid Cloud</p>
                                            </div>
                                        </div>

                                        <div className="swiper-slide">
                                            <div className="item">
                                                <h3 className="mb-3">Services</h3>
                                                <h4 className="mb-3">Amet cumque nam sed voluptas doloribus iusto. Dolorem eos aliquam quis.</h4>
                                                <p>Dolorem quia fuga consectetur voluptatem. Earum consequatur nulla maxime necessitatibus cum accusamus. Voluptatem dolorem ut numquam dolorum delectus autem veritatis facilis. Et ea ut repellat ea. Facere est dolores fugiat dolor.</p>
                                            </div>
                                        </div>

                                        <div className="swiper-slide">
                                            <div className="item">
                                                <h3 className="mb-3">Solutions</h3>
                                                <h4 className="mb-3">Necessitatibus voluptatibus explicabo dolores a vitae voluptatum.</h4>
                                                <p>Neque voluptates aut. Soluta aut perspiciatis porro deserunt. Voluptate ut itaque velit. Aut consectetur voluptatem aspernatur sequi sit laborum. Voluptas enim dolorum fugiat aut.</p>
                                            </div>
                                        </div>

                                        <div className="swiper-slide">
                                            <div className="item">
                                                <h3 className="mb-3">Software</h3>
                                                <h4 className="mb-3">Tempora quos est ut quia adipisci ut voluptas. Deleniti laborum soluta nihil est. Eum similique neque autem ut.</h4>
                                                <p>Ut rerum et autem vel. Et rerum molestiae aut sit vel incidunt sit at voluptatem. Saepe dolorem et sed voluptate impedit. Ad et qui sint at qui animi animi rerum.</p>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="swiper-pagination"></div>
                                </div>
                                <div className="swiper-button-prev"></div>
                                <div className="swiper-button-next"></div>
                            </div>

                        </div>

                    </div>
                </section> */}

                {/* <section id="call-to-action" className="call-to-action">
                    <div className="container" data-aos="fade-up">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 text-center">
                                <h3>Ut fugiat aliquam aut non</h3>
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                                <a className="cta-btn" href="#">Call To Action</a>
                            </div>
                        </div>

                    </div>
                </section> */}
                <section id="team" className="team">
                    <div className="container" data-aos="fade-up">

                        <div className="section-header">
                            <h2>Our Team</h2>

                        </div>

                        <div className="row gy-4">

                            <div className="col-lg-12 col-md-6" data-aos="fade-up" data-aos-delay="100">
                                <div className="team-member">
                                    <div className="member-img">
                                        {/* <img src="assets/img/team/team-1.jpg" className="img-fluid" alt="" /> */}
                                        <div className="social">
                                            {/* //eslint-disable-next-line */}
                                            <a href=""><i className="bi bi-twitter"></i></a>
                                            {/* //eslint-disable-next-line */}
                                            <a href=""><i className="bi bi-facebook"></i></a>
                                            {/* //eslint-disable-next-line */}
                                            <a href=""><i className="bi bi-instagram"></i></a>
                                            {/* //eslint-disable-next-line */}
                                            <a href=""><i className="bi bi-linkedin"></i></a>
                                        </div>
                                    </div>
                                    <div className="member-info">
                                        <h4>Rajesh Pericherla</h4>
                                        <span>Chief Executive Officer</span>
                                    </div>
                                </div>
                            </div>

                            {/* <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
                                <div className="team-member">
                                    <div className="member-img">
                                        <img src="assets/img/team/team-2.jpg" className="img-fluid" alt="" />
                                        <div className="social">
                                            <a href=""><i className="bi bi-twitter"></i></a>
                                            <a href=""><i className="bi bi-facebook"></i></a>
                                            <a href=""><i className="bi bi-instagram"></i></a>
                                            <a href=""><i className="bi bi-linkedin"></i></a>
                                        </div>
                                    </div>
                                    <div className="member-info">
                                        <h4>Sarah Jhonson</h4>
                                        <span>Product Manager</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
                                <div className="team-member">
                                    <div className="member-img">
                                        <img src="assets/img/team/team-3.jpg" className="img-fluid" alt="" />
                                        <div className="social">
                                            <a href=""><i className="bi bi-twitter"></i></a>
                                            <a href=""><i className="bi bi-facebook"></i></a>
                                            <a href=""><i className="bi bi-instagram"></i></a>
                                            <a href=""><i className="bi bi-linkedin"></i></a>
                                        </div>
                                    </div>
                                    <div className="member-info">
                                        <h4>William Anderson</h4>
                                        <span>CTO</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="400">
                                <div className="team-member">
                                    <div className="member-img">
                                        <img src="assets/img/team/team-4.jpg" className="img-fluid" alt="" />
                                        <div className="social">
                                            <a href=""><i className="bi bi-twitter"></i></a>
                                            <a href=""><i className="bi bi-facebook"></i></a>
                                            <a href=""><i className="bi bi-instagram"></i></a>
                                            <a href=""><i className="bi bi-linkedin"></i></a>
                                        </div>
                                    </div>
                                    <div className="member-info">
                                        <h4>Amanda Jepson</h4>
                                        <span>Accountant</span>
                                    </div>
                                </div>
                            </div> */}

                        </div>

                    </div>
                </section>

            </main>
            <Footer />
        </div>
    )
}