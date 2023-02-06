import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'
import TopNav from '../Components/TopNav'

export default function Home() {
    return (
        <div>
            <TopNav />
            <section id="hero" className="hero d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4">
                            <h2 data-aos="fade-up" data-aos-delay="100">An Industry Leader in Data Center, Cloud and Systems Integration</h2>
                            <blockquote data-aos="fade-up" data-aos-delay="100">
                                {/* <p>An Industry Leader in Data Center, Cloud and Systems Integration.</p> */}
                            </blockquote>
                            <div className="d-flex" data-aos="fade-up" data-aos-delay="200">
                                <Link to="/about" className="btn-get-started">Get Started</Link>
                                {/* <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" className="glightbox btn-watch-video d-flex align-items-center"><i className="bi bi-play-circle"></i><span>Watch Video</span></a> */}
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <main id="main">
                {/* <section id="why-us" className="why-us">
                    <div className="container" data-aos="fade-up">
                        <div className="section-header">
                            <h2>Why Choose Us</h2>
                        </div>
                        <div className="row g-0" data-aos="fade-up" data-aos-delay="200">
                            <div className="col-xl-5 img-bg" style={{ backgroundImage: "url('assets/img/why-us-bg.jpg')" }}></div>
                            <div className="col-xl-7 slides  position-relative">
                                <div className="slides-1 swiper">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <div className="item">
                                                <h3 className="mb-3">Let's grow your business together</h3>
                                                <h4 className="mb-3">Optio reiciendis accusantium iusto architecto at quia minima maiores quidem, dolorum.</h4>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, ipsam perferendis asperiores explicabo vel tempore velit totam, natus nesciunt accusantium dicta quod quibusdam ipsum maiores nobis non, eum. Ullam reiciendis dignissimos laborum aut, magni voluptatem velit doloribus quas sapiente optio.</p>
                                            </div>
                                        </div>

                                        <div className="swiper-slide">
                                            <div className="item">
                                                <h3 className="mb-3">Unde perspiciatis ut repellat dolorem</h3>
                                                <h4 className="mb-3">Amet cumque nam sed voluptas doloribus iusto. Dolorem eos aliquam quis.</h4>
                                                <p>Dolorem quia fuga consectetur voluptatem. Earum consequatur nulla maxime necessitatibus cum accusamus. Voluptatem dolorem ut numquam dolorum delectus autem veritatis facilis. Et ea ut repellat ea. Facere est dolores fugiat dolor.</p>
                                            </div>
                                        </div>

                                        <div className="swiper-slide">
                                            <div className="item">
                                                <h3 className="mb-3">Aliquid non alias minus</h3>
                                                <h4 className="mb-3">Necessitatibus voluptatibus explicabo dolores a vitae voluptatum.</h4>
                                                <p>Neque voluptates aut. Soluta aut perspiciatis porro deserunt. Voluptate ut itaque velit. Aut consectetur voluptatem aspernatur sequi sit laborum. Voluptas enim dolorum fugiat aut.</p>
                                            </div>
                                        </div>

                                        <div className="swiper-slide">
                                            <div className="item">
                                                <h3 className="mb-3">Necessitatibus suscipit non voluptatem quibusdam</h3>
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

                <section id="services-list" className="services-list">
                    <div className="container" data-aos="fade-up">
                        <div className="section-header">
                            <h2>Partners</h2>
                        </div>
                        <div className="row gy-5 d-flex">
                            <div className="col-lg-2 col-md-6 service-item d-flex" style={{ justifyContent: 'center' }} data-aos="fade-up" data-aos-delay="100">
                                <img src={'assets/img/partners/client1.png'} alt="Patners" style={{ width: '170px', height: '70px' }} />
                            </div>
                            <div className="col-lg-2 col-md-6 service-item d-flex" style={{ justifyContent: 'center' }} data-aos="fade-up" data-aos-delay="100">
                                <img src={'assets/img/partners/client2.jpg'} alt="Patners" style={{ width: '170px', height: '70px' }} />
                            </div>
                            <div className="col-lg-2 col-md-6 service-item d-flex" style={{ justifyContent: 'center' }} data-aos="fade-up" data-aos-delay="100">
                                <img src={'assets/img/partners/client3.png'} alt="Patners" style={{ width: '170px', height: '70px' }} />
                            </div>
                            <div className="col-lg-2 col-md-6 service-item d-flex" style={{ justifyContent: 'center' }} data-aos="fade-up" data-aos-delay="100">
                                <img src={'assets/img/partners/client4.png'} alt="Patners" style={{ width: '170px', height: '70px' }} />
                            </div>
                            <div className="col-lg-2 col-md-6 service-item d-flex" style={{ justifyContent: 'center' }} data-aos="fade-up" data-aos-delay="100">
                                <img src={'assets/img/partners/client5.png'} alt="Patners" style={{ width: '170px', height: '70px' }} />
                            </div>
                            <div className="col-lg-2 col-md-6 service-item d-flex" style={{ justifyContent: 'center' }} data-aos="fade-up" data-aos-delay="100">
                                <img src={'assets/img/partners/client6.png'} alt="Patners" style={{ width: '170px', height: '70px' }} />
                            </div>
                            <div className="col-lg-2 col-md-6 service-item d-flex" style={{ justifyContent: 'center' }} data-aos="fade-up" data-aos-delay="100">
                                <img src={'assets/img/partners/client7.png'} alt="Patners" style={{ width: '170px', height: '70px' }} />
                            </div>
                            <div className="col-lg-2 col-md-6 service-item d-flex" style={{ justifyContent: 'center' }} data-aos="fade-up" data-aos-delay="100">
                                <img src={'assets/img/partners/client8.png'} alt="Patners" style={{ width: '170px', height: '70px' }} />
                            </div>
                            <div className="col-lg-2 col-md-6 service-item d-flex" style={{ justifyContent: 'center' }} data-aos="fade-up" data-aos-delay="100">
                                <img src={'assets/img/partners/client9.jpg'} alt="Patners" style={{ width: '170px', height: '70px' }} />
                            </div>
                            <div className="col-lg-2 col-md-6 service-item d-flex" style={{ justifyContent: 'center' }} data-aos="fade-up" data-aos-delay="100">
                                <img src={'assets/img/partners/client10.png'} alt="Patners" style={{ width: '170px', height: '70px' }} />
                            </div>
                            <div className="col-lg-2 col-md-6 service-item d-flex" style={{ justifyContent: 'center' }} data-aos="fade-up" data-aos-delay="100">
                                <img src={'assets/img/partners/client11.png'} alt="Patners" style={{ width: '170px', height: '70px' }} />
                            </div>
                            <div className="col-lg-2 col-md-6 service-item d-flex" style={{ justifyContent: 'center' }} data-aos="fade-up" data-aos-delay="100">
                                <img src={'assets/img/partners/client12.png'} alt="Patners" style={{ width: '170px', height: '70px' }} />
                            </div>
                            <div className="col-lg-2 col-md-6 service-item d-flex" style={{ justifyContent: 'center' }} data-aos="fade-up" data-aos-delay="100">
                                <img src={'assets/img/partners/client13.png'} alt="Patners" style={{ width: '170px', height: '70px' }} />
                            </div>
                            <div className="col-lg-2 col-md-6 service-item d-flex" style={{ justifyContent: 'center' }} data-aos="fade-up" data-aos-delay="100">
                                <img src={'assets/img/partners/client14.png'} alt="Patners" style={{ width: '170px', height: '70px' }} />
                            </div>
                            <div className="col-lg-2 col-md-6 service-item d-flex" style={{ justifyContent: 'center' }} data-aos="fade-up" data-aos-delay="100">
                                <img src={'assets/img/partners/client15.png'} alt="Patners" style={{ width: '170px', height: '70px' }} />
                            </div>
                            <div className="col-lg-2 col-md-6 service-item d-flex" style={{ justifyContent: 'center' }} data-aos="fade-up" data-aos-delay="100">
                                <img src={'assets/img/partners/client16.png'} alt="Patners" style={{ width: '170px', height: '70px' }} />
                            </div>
                            <div className="col-lg-2 col-md-6 service-item d-flex" style={{ justifyContent: 'center' }} data-aos="fade-up" data-aos-delay="100">
                                <img src={'assets/img/partners/client17.png'} alt="Patners" style={{ width: '170px', height: '70px' }} />
                            </div>
                            <div className="col-lg-2 col-md-6 service-item d-flex" style={{ justifyContent: 'center' }} data-aos="fade-up" data-aos-delay="100">
                                <img src={'assets/img/partners/client18.png'} alt="Patners" style={{ width: '170px', height: '70px' }} />
                            </div>
                            {/* <div className="col-lg-2 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="100">
                                <img src={'assets/img/partners/client19.png'} alt="Patners" style={{ width: '170px', height: '70px' }} />
                            </div> */}
                            {/* <div className="col-lg-2 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="100">
                                <img src={'assets/img/partners/client20.png'} alt="Patners" style={{ width: '170px', height: '70px' }} />
                            </div> */}
                            <div className="col-lg-2 col-md-6 service-item d-flex" style={{ justifyContent: 'center' }} data-aos="fade-up" data-aos-delay="100">
                                <img src={'assets/img/partners/client21.png'} alt="Patners" style={{ width: '170px', height: '70px' }} />
                            </div>
                            {/* <div className="col-lg-2 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="100">
                                <img src={'assets/img/partners/client22.png'} alt="Patners" style={{ width: '170px', height: '70px' }} />
                            </div> */}
                            <div className="col-lg-2 col-md-6 service-item d-flex" style={{ justifyContent: 'center' }} data-aos="fade-up" data-aos-delay="100">
                                <img src={'assets/img/partners/client23.png'} alt="Patners" style={{ width: '170px', height: '70px' }} />
                            </div>
                            {/* <div className="col-lg-2 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="100">
                                <img src={'assets/img/partners/client24.png'} alt="Patners" style={{ width: '170px', height: '70px' }} />
                            </div> */}
                            <div className="col-lg-2 col-md-6 service-item d-flex" style={{ justifyContent: 'center' }} data-aos="fade-up" data-aos-delay="100">
                                <img src={'assets/img/partners/client25.jpg'} alt="Patners" style={{ width: '170px', height: '70px' }} />
                            </div>
                            <div className="col-lg-2 col-md-6 service-item d-flex" style={{ justifyContent: 'center' }} data-aos="fade-up" data-aos-delay="100">
                                <img src={'assets/img/partners/client26.png'} alt="Patners" style={{ width: '170px', height: '70px' }} />
                            </div>
                            <div className="col-lg-2 col-md-6 service-item d-flex" style={{ justifyContent: 'center' }} data-aos="fade-up" data-aos-delay="100">
                                <img src={'assets/img/partners/client27.png'} alt="Patners" style={{ width: '170px', height: '70px' }} />
                            </div>
                            <div className="col-lg-2 col-md-6 service-item d-flex" style={{ justifyContent: 'center' }} data-aos="fade-up" data-aos-delay="100">
                                <img src={'assets/img/partners/client28.jpg'} alt="Patners" style={{ width: '170px', height: '70px' }} />
                            </div>
                        </div>

                    </div>
                </section>
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
                {/* <section id="features" className="features">

                    <div className="container" data-aos="fade-up">
                        <div className="row">
                            <div className="col-lg-7" data-aos="fade-up" data-aos-delay="100">
                                <h3>Powerful Features for <br />Your Business</h3>

                                <div className="row gy-4">

                                    <div className="col-md-6">
                                        <div className="icon-list d-flex">
                                            <i className="ri-store-line" style={{ color: '#ffbb2c' }}></i>
                                            <span>Easy Cart Features</span>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="icon-list d-flex">
                                            <i className="ri-bar-chart-box-line" style={{ color: '#5578ff' }}></i>
                                            <span>Sit amet consectetur adipisicing</span>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="icon-list d-flex">
                                            <i className="ri-calendar-todo-line" style={{ color: '#e80368' }}></i>
                                            <span>Ipsum Rerum Explicabo</span>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="icon-list d-flex">
                                            <i className="ri-paint-brush-line" style={{ color: '#e361ff' }}></i>
                                            <span>Easy Cart Features</span>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="icon-list d-flex">
                                            <i className="ri-database-2-line" style={{ color: '#47aeff' }}></i>
                                            <span>Easy Cart Features</span>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="icon-list d-flex">
                                            <i className="ri-gradienter-line" style={{ color: '#ffa76e' }}></i>
                                            <span>Sit amet consectetur adipisicing</span>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="icon-list d-flex">
                                            <i className="ri-file-list-3-line" style={{ color: '#11dbcf' }}></i>
                                            <span>Ipsum Rerum Explicabo</span>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="icon-list d-flex">
                                            <i className="ri-base-station-line" style={{ color: '#ff5828' }}></i>
                                            <span>Easy Cart Features</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 position-relative" data-aos="fade-up" data-aos-delay="200">
                                <div className="phone-wrap">
                                    <img src="assets/img/iphone.png" alt="Image" className="img-fluid" />
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="details">
                        <div className="container" data-aos="fade-up" data-aos-delay="300">
                            <div className="row">
                                <div className="col-md-6">
                                    <h4>Labore Sdio Lidui<br />Bonde Naruto</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam nostrum molestias doloremque quae delectus odit minima corrupti blanditiis quo animi!</p>
                                    <a href="#about" className="btn-get-started">Get Started</a>
                                </div>
                            </div>

                        </div>
                    </div>

                </section> */}

                {/* <section id="recent-posts" className="recent-posts">
                    <div className="container" data-aos="fade-up">

                        <div className="section-header">
                            <h2>Recent Blog Posts</h2>

                        </div>

                        <div className="row gy-5">

                            <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
                                <div className="post-box">
                                    <div className="post-img"><img src="assets/img/blog/blog-1.jpg" className="img-fluid" alt="" /></div>
                                    <div className="meta">
                                        <span className="post-date">Tue, December 12</span>
                                        <span className="post-author"> / Julia Parker</span>
                                    </div>
                                    <h3 className="post-title">Eum ad dolor et. Autem aut fugiat debitis</h3>
                                    <p>Illum voluptas ab enim placeat. Adipisci enim velit nulla. Vel omnis laudantium. Asperiores eum ipsa est officiis. Modi qui magni est...</p>
                                    <a href="blog-details.html" className="readmore stretched-link"><span>Read More</span><i className="bi bi-arrow-right"></i></a>
                                </div>
                            </div>

                            <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
                                <div className="post-box">
                                    <div className="post-img"><img src="assets/img/blog/blog-2.jpg" className="img-fluid" alt="" /></div>
                                    <div className="meta">
                                        <span className="post-date">Fri, September 05</span>
                                        <span className="post-author"> / Mario Douglas</span>
                                    </div>
                                    <h3 className="post-title">Et repellendus molestiae qui est sed omnis</h3>
                                    <p>Voluptatem nesciunt omnis libero autem tempora enim ut ipsam id. Odit quia ab eum assumenda. Quisquam omnis doloribus...</p>
                                    <a href="blog-details.html" className="readmore stretched-link"><span>Read More</span><i className="bi bi-arrow-right"></i></a>
                                </div>
                            </div>

                            <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
                                <div className="post-box">
                                    <div className="post-img"><img src="assets/img/blog/blog-3.jpg" className="img-fluid" alt="" /></div>
                                    <div className="meta">
                                        <span className="post-date">Tue, July 27</span>
                                        <span className="post-author"> / Lisa Hunter</span>
                                    </div>
                                    <h3 className="post-title">Quia assumenda est et veritati</h3>
                                    <p>Quia nam eaque omnis explicabo similique eum quaerat similique laboriosam. Quis omnis repellat sed quae consectetur magnam...</p>
                                    <a href="blog-details.html" className="readmore stretched-link"><span>Read More</span><i className="bi bi-arrow-right"></i></a>
                                </div>
                            </div>

                            <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="400">
                                <div className="post-box">
                                    <div className="post-img"><img src="assets/img/blog/blog-4.jpg" className="img-fluid" alt="" /></div>
                                    <div className="meta">
                                        <span className="post-date">Tue, Sep 16</span>
                                        <span className="post-author"> / Mario Douglas</span>
                                    </div>
                                    <h3 className="post-title">Pariatur quia facilis similique deleniti</h3>
                                    <p>Et consequatur eveniet nam voluptas commodi cumque ea est ex. Aut quis omnis sint ipsum earum quia eligendi...</p>
                                    <a href="blog-details.html" className="readmore stretched-link"><span>Read More</span><i className="bi bi-arrow-right"></i></a>
                                </div>
                            </div>

                        </div>

                    </div>
                </section> */}

            </main>
            <Footer />
        </div>
    )
}