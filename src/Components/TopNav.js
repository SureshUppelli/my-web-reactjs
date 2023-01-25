import React from 'react'
import { Link } from "react-router-dom";

export default function TopNav() {
    return (
        <div>
            <header id="header" className="header d-flex align-items-center fixed-top bg-white">
                <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

                    <Link to="/" className="logo d-flex align-items-center">
                        <img src="assets/img/logo.png" alt="Novisync" />
                        <h1 className="d-flex align-items-center" style={{ color: '#013E7B' }}>Novisync</h1>
                    </Link>

                    <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
                    <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>

                    <nav id="navbar" className="navbar" >
                        <ul>
                            <li><Link to="/" style={{ color: '#013E7B' }}>Home</Link></li>
                            <li>
                                <Link to="/about" style={{ color: '#013E7B' }}>Who We are</Link>
                            </li>
                            <li>
                                <Link to="/services" style={{ color: '#013E7B' }}>What We Do</Link>
                            </li>
                            <li>
                                <Link to="/insights" style={{ color: '#013E7B' }}>Insights</Link>
                            </li>
                            <li>
                                <Link to="/partners" style={{ color: '#013E7B' }}>Partners</Link>
                            </li>
                            <li>
                                <Link to="/careers" style={{ color: '#013E7B' }}>Careers</Link>
                            </li>
                            <li>
                                <Link to="/contact" style={{ color: '#013E7B' }}>Contact</Link>
                            </li>
                            {/* <li><a href="services.html">Services</a></li>
                            <li><a href="portfolio.html">Portfolio</a></li>
                            <li><a href="team.html">Team</a></li>
                            <li><a href="blog.html">Blog</a></li> */}
                            {/* <li className="dropdown"><a href="#"><span>Dropdown</span> <i className="bi bi-chevron-down dropdown-indicator"></i></a>
                                <ul>
                                    <li><a href="#">Dropdown 1</a></li>
                                    <li className="dropdown"><a href="#"><span>Deep Dropdown</span> <i className="bi bi-chevron-down dropdown-indicator"></i></a>
                                        <ul>
                                            <li><a href="#">Deep Dropdown 1</a></li>
                                            <li><a href="#">Deep Dropdown 2</a></li>
                                            <li><a href="#">Deep Dropdown 3</a></li>
                                            <li><a href="#">Deep Dropdown 4</a></li>
                                            <li><a href="#">Deep Dropdown 5</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Dropdown 2</a></li>
                                    <li><a href="#">Dropdown 3</a></li>
                                    <li><a href="#">Dropdown 4</a></li>
                                </ul>
                            </li> */}
                            {/* <li><a href="contact.html">Contact</a></li> */}
                        </ul>
                    </nav>

                </div>
            </header>
        </div>
    )
}