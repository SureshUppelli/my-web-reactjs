import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer id="footer" className="footer">

            <div className="footer-content">
                <div className="container">
                    <div className="row gy-4">
                        <div className="col-lg-5 col-md-12 footer-info">
                            <a href="index.html" className="logo d-flex align-items-center">
                                <img src="assets/img/n6Logo.png" alt="Novisync" />
                                <span style={{color: '#002868'}}>Novisync</span>
                            </a>
                            <p>An Industry Leader in Data Center, Cloud and Systems Integration.</p>
                            <div className="social-links d-flex  mt-3">
                                {/* <a href="#" className="twitter"><i className="bi bi-twitter"></i></a> */}
                                <a href="https://www.facebook.com/profile.php?id=100046418156066" className="facebook"><i className="bi bi-facebook"></i></a>
                                {/* <a href="#" className="instagram"><i className="bi bi-instagram"></i></a> */}
                                <a href="https://www.linkedin.com/company/novisync-solutions-inc-?originalSubdomain=in" className="linkedin"><i className="bi bi-linkedin"></i></a>
                            </div>
                        </div>

                        <div className="col-lg-2 col-6 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                                <li><i className="bi bi-dash"></i> <Link to="/">Home</Link></li>
                                <li><i className="bi bi-dash"></i> <Link to="/about">Who We are</Link></li>
                                <li><i className="bi bi-dash"></i> <Link to="/services">What We do</Link></li>
                                <li><i className="bi bi-dash"></i> <Link to="/partners">Partners</Link></li>
                                {/* <li><i className="bi bi-dash"></i> <Link path="/">Terms of service</Link></li>
                                <li><i className="bi bi-dash"></i> <Link path="/">Privacy policy</Link></li> */}
                            </ul>
                        </div>

                        <div className="col-lg-2 col-6 footer-links">
                            {/* <h4>Our Services</h4>
                            <ul>
                                <li><i className="bi bi-dash"></i> <a href="#">Web Design</a></li>
                                <li><i className="bi bi-dash"></i> <a href="#">Web Development</a></li>
                                <li><i className="bi bi-dash"></i> <a href="#">Product Management</a></li>
                                <li><i className="bi bi-dash"></i> <a href="#">Marketing</a></li>
                                <li><i className="bi bi-dash"></i> <a href="#">Graphic Design</a></li>
                            </ul> */}
                        </div>

                        <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                            <h4>Contact Us</h4>
                            <p>
                                Novisync Inc<br />
                                300 Westage Business Center Drive <br />
                                Suite 400<br />
                                Fishkill, New York 12524<br />
                                United States <br /><br />
                                <strong>Phone:</strong>
                                <br />
                                US: 845-765-0250
                                <br />

                                International: +1-833-668-4796
                                <br />
                                <strong>Email:</strong> contact@novisync.com<br />
                            </p>

                        </div>

                    </div>
                </div>
            </div>

            <div className="footer-legal">
                <div className="container">
                    <div className="copyright">
                        &copy; Copyright <strong><span>Novisync {new Date().getFullYear()}</span></strong>. All Rights Reserved
                    </div>
                    <div className="credits">
                        {/* <!-- All the links in the footer should remain intact. -->
                                                <!-- You can delete the links only if you purchased the pro version. -->
                                                <!-- Licensing information: https://bootstrapmade.com/license/ -->
                                                <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/nova-bootstrap-business-template/ --> */}
                        {/* Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> */}
                    </div>
                </div>
            </div>
        </footer>
    )
}