import React from "react";
import Footer from "../../Components/Footer";
import TopNav from "../../Components/TopNav";

export default function Migrations() {
    return (
        <div>
            <TopNav />
            <main id="main">


                <div className="breadcrumbs d-flex align-items-center" style={{ backgroundImage: "url('assets/img/services-header.jpg')" }}>
                    <div className="container position-relative d-flex flex-column align-items-center">

                        <h2>What We Do</h2>
                        <ol>
                            <li><a href="/">Home</a></li>
                            <li><a href="/solutions">Solutions</a></li>
                        </ol>

                    </div>
                </div>


                {/* <section id="services-list" className="services-list">
                    <div className="container" data-aos="fade-up">
                        <div className="section-header">
                            <h2>Our Services</h2>
                        </div>
                        <div className="row gy-5">

                            <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="100">
                                <div className="icon flex-shrink-0"><i className="bi bi-briefcase" style={{ color: '#f57813' }}></i></div>
                                <div>
                                    <h4 className="title"><a href="#" className="stretched-link">Lorem Ipsum</a></h4>
                                    <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                                </div>
                            </div>


                            <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="200">
                                <div className="icon flex-shrink-0"><i className="bi bi-card-checklist" style={{ color: '#15a04a' }}></i></div>
                                <div>
                                    <h4 className="title"><a href="#" className="stretched-link">Dolor Sitema</a></h4>
                                    <p className="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="300">
                                <div className="icon flex-shrink-0"><i className="bi bi-bar-chart" style={{ color: '#d90769' }}></i></div>
                                <div>
                                    <h4 className="title"><a href="#" className="stretched-link">Sed ut perspiciatis</a></h4>
                                    <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="400">
                                <div className="icon flex-shrink-0"><i className="bi bi-binoculars" style={{ color: '#15bfbc' }}></i></div>
                                <div>
                                    <h4 className="title"><a href="#" className="stretched-link">Magni Dolores</a></h4>
                                    <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="500">
                                <div className="icon flex-shrink-0"><i className="bi bi-brightness-high" style={{ color: '#f5cf13' }}></i></div>
                                <div>
                                    <h4 className="title"><a href="#" className="stretched-link">Nemo Enim</a></h4>
                                    <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="600">
                                <div className="icon flex-shrink-0"><i className="bi bi-calendar4-week" style={{ color: '#1335f5' }}></i></div>
                                <div>
                                    <h4 className="title"><a href="#" className="stretched-link">Eiusmod Tempor</a></h4>
                                    <p className="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section> */}

                <div className="col-lg-12" data-aos="fade-up" data-aos-delay="200">
                    <section id="services-cards" className="services-cards">
                        <div className="container" data-aos="fade-up">
                            <div className="section-header">
                                <h2>THE INDUSTRY LEADER IN DATACENTER MIGRATIONS</h2>
                            </div>
                            <div className="row gy-4">

                                <div className="col-lg-12" data-aos="fade-up" data-aos-delay="100">
                                    <div className="card-item">
                                        <div className="row">
                                            {/* <div className="col-xl-5">
                                                    <div className="card-bg" style={{ backgroundImage: "url('assets/img/cards-1.jpg')" }}></div>
                                                </div> */}
                                            <div className="col-xl-12 d-flex align-items-center">
                                                <div className="card-body">
                                                    <p>
                                                        Our consultants have performed tens of thousands of migrations for over a decade, as key contributors,
                                                        delivering some of the most complex migration projects in datacenter history.  We have the best global talent
                                                        available, including US-based resources, with decades of combined experience delivering projects in some of the
                                                        world's biggest IT environments.  The Novisync<sup>&#174;</sup> process has been tempered and
                                                        polished into the following services,
                                                        which are results-based (fixed fee), priced by workload count, and project duration.
                                                        <br /><br />

                                                        <b> P2V<sup>&#8480;</sup> | Physical to Virtual Migration Services</b><br />
                                                        Novisync<sup>&#174;</sup> specializes in decoupling Linux and Windows-based Operating Systems from physical hardware, converting them
                                                        Virtual Machines (VMs), while migrating them onto your preferred virtualization platform.  Our staging, execution,
                                                        testing, and validation tools and processes are 2nd to none, with the highest rates in conversion quality and
                                                        availability.<br /><br />

                                                        <b>V2V<sup>&#8480;</sup> | Virtual to Virtual Migration Services</b><br />
                                                        Whether it's rack-to-rack, site-to-site, or cloud-to-cloud migrations of virtual workloads, Novisync<sup>&#174;</sup>
                                                        has mastered
                                                        all the industry tools to meet the project deadlines.  Whether it's hot or cold migrations, we are laser-focused on
                                                        workload volume, conversion quality, and availability.
                                                        <br /><br />
                                                        <b>X2V<sup>&#8480;</sup> | Anything to Virtual Migration Services</b><br />
                                                        Adopting the new hybrid/multi-cloud model? <br />
                                                        Ready to consolidate data centers? <br />
                                                        Need a high-priority datacenter evacuation?<br />
                                                        <br />
                                                        Let us handle the operational requirements and technical delivery of your entire migration project with the complete
                                                        package, strategic and tactical execution, from start to finish, which includes:<br />
                                                        <i className="fa fa-caret-right"></i> Project Charters & Workplans<br />
                                                        <i className="fa fa-caret-right"></i> Risk Assessments w/ Action Items<br />
                                                        <i className="fa fa-caret-right"></i> Change Control Scheduling<br />
                                                        <i className="fa fa-caret-right"></i> Advanced Analytics w/Automated Project Tracking<br />
                                                        <i className="fa fa-caret-right"></i> Quality Assurance & Reporting Dashboards<br />
                                                        <br />
                                                        <b>V2C<sup>&#8480;</sup> | X2C<sup>&#8480;</sup> | Peregrinix<sup>&#8482;</sup> | Anything to Cloud Migration Services</b><br />
                                                        Datacenter-to-cloud or cloud-to-cloud migrations require a special touch. The Novisync<sup>&#174;</sup> delivery team
                                                        has decades of combined experience in multiple cloud
                                                        endpoints, having a deep understanding of the cloud API's allows for seamless integration of software.
                                                        That integration is a key ingredient for the execution
                                                        of a successful migration project into the cloud.

                                                        <br />
                                                        <br />
                                                        <b>VM2C<sup>&#8480;</sup> | Virtual Machine to Container Migration Services</b><br />
                                                        Ready to adopt the resource efficiency of containers but not sure where to start?<br /><br />
                                                        Novisync<sup>&#174;</sup> can get you started with a containerization strategy and implementation that includes
                                                        technical education and training, product selection, as well as conversion assistance for multiple virtualization and container tools.
                                                        Allow us to be your guide into the new era of containers through all phases of implementation
                                                        Proof-of-Concept (POC), Pilot, and Production.
                                                        <br /> <br />
                                                        <a href="/contact">Learn More...</a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                                <div className="card-item">
                                    <div className="row">
                                        <div className="col-xl-5">
                                            <div className="card-bg" style={{ backgroundImage: "url('assets/img/cards-2.jpg')" }}></div>
                                        </div>
                                        <div className="col-xl-7 d-flex align-items-center">
                                            <div className="card-body">
                                                <h4 className="card-title">Possimus ut sed velit assumenda</h4>
                                                <p>Sunt deserunt maiores voluptatem autem est rerum perferendis rerum blanditiis. Est laboriosam qui iste numquam laboriosam voluptatem architecto. Est laudantium sunt at quas aut hic. Eum dignissimos.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
                                <div className="card-item">
                                    <div className="row">
                                        <div className="col-xl-5">
                                            <div className="card-bg" style={{ backgroundImage: "url('assets/img/cards-3.jpg')" }}></div>
                                        </div>
                                        <div className="col-xl-7 d-flex align-items-center">
                                            <div className="card-body">
                                                <h4 className="card-title">Error beatae dolor inventore aut</h4>
                                                <p>Dicta porro nobis. Velit cum in. Nesciunt dignissimos enim molestiae facilis numquam quae quaerat ipsam omnis. Neque debitis ipsum at architecto officia laboriosam odit. Ut sunt temporibus nulla culpa.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="400">
                                <div className="card-item">
                                    <div className="row">
                                        <div className="col-xl-5">
                                            <div className="card-bg" style={{ backgroundImage: "url('assets/img/cards-4.jpg')" }}></div>
                                        </div>
                                        <div className="col-xl-7 d-flex align-items-center">
                                            <div className="card-body">
                                                <h4 className="card-title">Expedita voluptas ut ut nesciunt</h4>
                                                <p>Aut est quidem doloremque voluptatem magnam quis excepturi vero quia. Eum eos doloremque architecto illo at beatae dolore. Fugiat suscipit et sint ratione dolores. Aut aliquid ea dolores libero nobis.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}

                            </div>

                        </div>
                    </section>
                </div>

                {/* <section id="testimonials" className="testimonials">
                    <div className="container" data-aos="fade-up">

                        <div className="section-header">
                            <h2>Testimonials</h2>

                        </div>

                        <div className="slides-3 swiper" data-aos="fade-up" data-aos-delay="100">
                            <div className="swiper-wrapper">

                                <div className="swiper-slide">
                                    <div className="testimonial-item">
                                        <div className="stars">
                                            <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                                        </div>
                                        <p>
                                            Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                                        </p>
                                        <div className="profile mt-auto">
                                            <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt="" />
                                            <h3>Saul Goodman</h3>
                                            <h4>Ceo &amp; Founder</h4>
                                        </div>
                                    </div>
                                </div>

                                <div className="swiper-slide">
                                    <div className="testimonial-item">
                                        <div className="stars">
                                            <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                                        </div>
                                        <p>
                                            Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                                        </p>
                                        <div className="profile mt-auto">
                                            <img src="assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt="" />
                                            <h3>Sara Wilsson</h3>
                                            <h4>Designer</h4>
                                        </div>
                                    </div>
                                </div>

                                <div className="swiper-slide">
                                    <div className="testimonial-item">
                                        <div className="stars">
                                            <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                                        </div>
                                        <p>
                                            Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                                        </p>
                                        <div className="profile mt-auto">
                                            <img src="assets/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt="" />
                                            <h3>Jena Karlis</h3>
                                            <h4>Store Owner</h4>
                                        </div>
                                    </div>
                                </div>

                                <div className="swiper-slide">
                                    <div className="testimonial-item">
                                        <div className="stars">
                                            <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                                        </div>
                                        <p>
                                            Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                                        </p>
                                        <div className="profile mt-auto">
                                            <img src="assets/img/testimonials/testimonials-4.jpg" className="testimonial-img" alt="" />
                                            <h3>Matt Brandon</h3>
                                            <h4>Freelancer</h4>
                                        </div>
                                    </div>
                                </div>

                                <div className="swiper-slide">
                                    <div className="testimonial-item">
                                        <div className="stars">
                                            <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                                        </div>
                                        <p>
                                            Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                                        </p>
                                        <div className="profile mt-auto">
                                            <img src="assets/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt="" />
                                            <h3>John Larson</h3>
                                            <h4>Entrepreneur</h4>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="swiper-pagination"></div>
                        </div>

                    </div>
                </section> */}

            </main>
            <Footer />
        </div>
    )
}