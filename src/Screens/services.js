import React from "react";
import Footer from "../Components/Footer";
import TopNav from "../Components/TopNav";

export default function Services() {
    return (
        <div>
            <TopNav />
            <main id="main">


                <div className="breadcrumbs d-flex align-items-center" style={{ backgroundImage: "url('assets/img/services-header.jpg')" }}>
                    <div className="container position-relative d-flex flex-column align-items-center">

                        <h2>What We Do</h2>
                        <ol>
                            <li><a href="index.html">Home</a></li>
                            <li>What We Do</li>
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
                <div className="row col-12">
                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                        <section id="blog" className="blog">
                            <div className="container" data-aos="fade-up">
                                <div className="section-header">
                                    <h2>Our Solutions</h2>
                                </div>
                                <div className="row g-5">

                                    <div className="col-lg-12" data-aos="fade-up" data-aos-delay="200">

                                        <div className="row gy-5 posts-list">

                                            <div className="col-lg-12">
                                                <article className="d-flex flex-column">

                                                    <div className="post-img">
                                                        <img src="assets/img/blog/blog-1.jpg" alt="" className="img-fluid" />
                                                    </div>

                                                    <h2 className="title">
                                                        <a href="blog-details.html">THE INDUSTRY LEADER IN DATACENTER MIGRATIONS</a>
                                                    </h2>

                                                    {/* <div className="meta-top">
                                                <ul>
                                                    <li className="d-flex align-items-center"><i className="bi bi-person"></i> <a href="blog-details.html">John Doe</a></li>
                                                    <li className="d-flex align-items-center"><i className="bi bi-clock"></i> <a href="blog-details.html"><time datetime="2022-01-01">Jan 1, 2022</time></a></li>
                                                    <li className="d-flex align-items-center"><i className="bi bi-chat-dots"></i> <a href="blog-details.html">12 Comments</a></li>
                                                </ul>
                                            </div> */}

                                                    <div className="content">
                                                        <p>
                                                            Our consultants have performed tens of thousands of migrations for over a decade, as key contributors, delivering some of the most complex migration projects in datacenter history. We have the best global talent available, including US based resources, with decades of combined experience delivering projects in some of the world’s biggest IT environments. The Novisync® process has been tempered and polished into the following services, which are results based (fixed fee), priced by workload count and project duration.
                                                        </p>
                                                    </div>

                                                    <div className="read-more mt-auto align-self-end">
                                                        <a href="blog-details.html">Read More <i className="bi bi-arrow-right"></i></a>
                                                    </div>

                                                </article>
                                            </div>

                                            <div className="col-lg-6">
                                                <article className="d-flex flex-column">

                                                    <div className="post-img">
                                                        <img src="assets/img/blog/blog-2.jpg" alt="" className="img-fluid" />
                                                    </div>

                                                    <h2 className="title">
                                                        <a href="blog-details.html">CLOUD & DATACENTER SOLUTIONS</a>
                                                    </h2>

                                                    {/* <div className="meta-top">
                                                <ul>
                                                    <li className="d-flex align-items-center"><i className="bi bi-person"></i> <a href="blog-details.html">John Doe</a></li>
                                                    <li className="d-flex align-items-center"><i className="bi bi-clock"></i> <a href="blog-details.html"><time datetime="2022-01-01">Jan 1, 2022</time></a></li>
                                                    <li className="d-flex align-items-center"><i className="bi bi-chat-dots"></i> <a href="blog-details.html">12 Comments</a></li>
                                                </ul>
                                            </div> */}

                                                    <div className="content">
                                                        <p>
                                                            Our experts specialize in all of the core datacenter infrastructure technologies of network, compute, and storage. Physical hardware has been blended together by virtualization platforms, which in turn has created the role of ‘Cloud Architect’. The Novisync® Cloud Architect will successfully deliver the latest business case expectations of the modern software defined datacenter (SDDC), hyper-converged infrastructure (HCI), and hybrid/multi-cloud models.
                                                        </p>
                                                    </div>

                                                    <div className="read-more mt-auto align-self-end">
                                                        <a href="blog-details.html">Read More <i className="bi bi-arrow-right"></i></a>
                                                    </div>

                                                </article>
                                            </div>

                                            <div className="col-lg-6">
                                                <article className="d-flex flex-column">

                                                    <div className="post-img">
                                                        <img src="assets/img/blog/blog-3.jpg" alt="" className="img-fluid" />
                                                    </div>

                                                    <h2 className="title">
                                                        <a href="blog-details.html">AUTOMATION, ORCHESTRATION & CODE DEVELOPMENT</a>
                                                    </h2>

                                                    {/* <div className="meta-top">
                                                <ul>
                                                    <li className="d-flex align-items-center"><i className="bi bi-person"></i> <a href="blog-details.html">John Doe</a></li>
                                                    <li className="d-flex align-items-center"><i className="bi bi-clock"></i> <a href="blog-details.html"><time datetime="2022-01-01">Jan 1, 2022</time></a></li>
                                                    <li className="d-flex align-items-center"><i className="bi bi-chat-dots"></i> <a href="blog-details.html">12 Comments</a></li>
                                                </ul>
                                            </div> */}

                                                    <div className="content">
                                                        <p>
                                                            Novisync® code development resources are primed and ready to address all of your automation needs using multiple disciplines of Agile or Waterfall development, phased implementations, and the latest repository integrations. We avoid abstracting the complexity of unnecessary layers by using 'simplification with standardization' as our mandate.
                                                        </p>
                                                    </div>

                                                    <div className="read-more mt-auto align-self-end">
                                                        <a href="blog-details.html">Read More <i className="bi bi-arrow-right"></i></a>
                                                    </div>

                                                </article>
                                            </div>

                                            <div className="col-lg-6">
                                                <article className="d-flex flex-column">

                                                    <div className="post-img">
                                                        <img src="assets/img/blog/blog-4.jpg" alt="" className="img-fluid" />
                                                    </div>

                                                    <h2 className="title">
                                                        <a href="blog-details.html">BUSINESS DEVELOPMENT & ENTERPRISE MANAGEMENT</a>
                                                    </h2>

                                                    {/* <div className="meta-top">
                                                <ul>
                                                    <li className="d-flex align-items-center"><i className="bi bi-person"></i> <a href="blog-details.html">John Doe</a></li>
                                                    <li className="d-flex align-items-center"><i className="bi bi-clock"></i> <a href="blog-details.html"><time datetime="2022-01-01">Jan 1, 2022</time></a></li>
                                                    <li className="d-flex align-items-center"><i className="bi bi-chat-dots"></i> <a href="blog-details.html">12 Comments</a></li>
                                                </ul>
                                            </div> */}

                                                    <div className="content">
                                                        <p>
                                                            While speed of delivery and a quick time to market may be the driving force behind a revenue generating IT software implementation, Novisync® understands the benefit of well-planned, cost effective IT solutions that focus on achieving the perfect balance of people, process, and technology. Our business consulting services target the specific gaps that plague the enterprise market, changing a highly complex project into a smooth, pleasant experience.
                                                        </p>
                                                    </div>

                                                    <div className="read-more mt-auto align-self-end">
                                                        <a href="blog-details.html">Read More <i className="bi bi-arrow-right"></i></a>
                                                    </div>

                                                </article>
                                            </div>

                                            <div className="col-lg-6">
                                                <article className="d-flex flex-column">

                                                    <div className="post-img">
                                                        <img src="assets/img/blog/blog-5.jpg" alt="" className="img-fluid" />
                                                    </div>

                                                    <h2 className="title">
                                                        <a href="blog-details.html">BIG DATA, DATA OPERATIONS & ADVANCED ANALYTICS</a>
                                                    </h2>

                                                    {/* <div className="meta-top">
                                                <ul>
                                                    <li className="d-flex align-items-center"><i className="bi bi-person"></i> <a href="blog-details.html">John Doe</a></li>
                                                    <li className="d-flex align-items-center"><i className="bi bi-clock"></i> <a href="blog-details.html"><time datetime="2022-01-01">Jan 1, 2022</time></a></li>
                                                    <li className="d-flex align-items-center"><i className="bi bi-chat-dots"></i> <a href="blog-details.html">12 Comments</a></li>
                                                </ul>
                                            </div> */}

                                                    <div className="content">
                                                        <p>
                                                            With all of the unstructured data scattered throughout the modern enterprise, it can be difficult to make any sense of it. This can stifle the stability and growth of any company through the missed opportunities of a calculated investment, cost savings, and the operational readiness required to be successful. Novisync® specializes in organizing infrastructure data like no other company, allowing for a seamless, centralized, and comprehensive view into data center operations.
                                                        </p>
                                                    </div>

                                                    <div className="read-more mt-auto align-self-end">
                                                        <a href="blog-details.html">Read More <i className="bi bi-arrow-right"></i></a>
                                                    </div>

                                                </article>
                                            </div>

                                            {/* <div className="col-lg-6">
                                        <article className="d-flex flex-column">

                                            <div className="post-img">
                                                <img src="assets/img/blog/blog-6.jpg" alt="" className="img-fluid" />
                                            </div>

                                            <h2 className="title">
                                                <a href="blog-details.html">Distinctio provident quibusdam numquam aperiam aut</a>
                                            </h2>

                                            <div className="meta-top">
                                                <ul>
                                                    <li className="d-flex align-items-center"><i className="bi bi-person"></i> <a href="blog-details.html">John Doe</a></li>
                                                    <li className="d-flex align-items-center"><i className="bi bi-clock"></i> <a href="blog-details.html"><time datetime="2022-01-01">Jan 1, 2022</time></a></li>
                                                    <li className="d-flex align-items-center"><i className="bi bi-chat-dots"></i> <a href="blog-details.html">12 Comments</a></li>
                                                </ul>
                                            </div>

                                            <div className="content">
                                                <p>
                                                    Expedita et temporibus eligendi enim molestiae est architecto praesentium dolores. Illo laboriosam officiis quis. Labore officia quia sit voluptatem nisi est dignissimos totam. Et voluptate et consectetur voluptatem id dolor magni impedit. Omnis dolores sit.
                                                </p>
                                            </div>

                                            <div className="read-more mt-auto align-self-end">
                                                <a href="blog-details.html">Read More <i className="bi bi-arrow-right"></i></a>
                                            </div>

                                        </article>
                                    </div> */}

                                        </div>
                                        {/* <div className="blog-pagination">
                                    <ul className="justify-content-center">
                                        <li><a href="#">1</a></li>
                                        <li className="active"><a href="#">2</a></li>
                                        <li><a href="#">3</a></li>
                                    </ul>
                                </div> */}

                                    </div>

                                    {/* <div className="col-lg-4" data-aos="fade-up" data-aos-delay="400">

                                <div className="sidebar ps-lg-4">

                                    <div className="sidebar-item search-form">
                                        <h3 className="sidebar-title">Search</h3>
                                        <form action="" className="mt-3">
                                            <input type="text" />
                                            <button type="submit"><i className="bi bi-search"></i></button>
                                        </form>
                                    </div>

                                    <div className="sidebar-item categories">
                                        <h3 className="sidebar-title">Categories</h3>
                                        <ul className="mt-3">
                                            <li><a href="#">General <span>(25)</span></a></li>
                                            <li><a href="#">Lifestyle <span>(12)</span></a></li>
                                            <li><a href="#">Travel <span>(5)</span></a></li>
                                            <li><a href="#">Design <span>(22)</span></a></li>
                                            <li><a href="#">Creative <span>(8)</span></a></li>
                                            <li><a href="#">Educaion <span>(14)</span></a></li>
                                        </ul>
                                    </div>

                                    <div className="sidebar-item recent-posts">
                                        <h3 className="sidebar-title">Recent Posts</h3>

                                        <div className="mt-3">

                                            <div className="post-item mt-3">
                                                <img src="assets/img/blog/blog-recent-1.jpg" alt="" className="flex-shrink-0" />
                                                <div>
                                                    <h4><a href="blog-post.html">Nihil blanditiis at in nihil autem</a></h4>
                                                    <time datetime="2020-01-01">Jan 1, 2020</time>
                                                </div>
                                            </div>

                                            <div className="post-item">
                                                <img src="assets/img/blog/blog-recent-2.jpg" alt="" className="flex-shrink-0" />
                                                <div>
                                                    <h4><a href="blog-post.html">Quidem autem et impedit</a></h4>
                                                    <time datetime="2020-01-01">Jan 1, 2020</time>
                                                </div>
                                            </div>

                                            <div className="post-item">
                                                <img src="assets/img/blog/blog-recent-3.jpg" alt="" className="flex-shrink-0" />
                                                <div>
                                                    <h4><a href="blog-post.html">Id quia et et ut maxime similique occaecati ut</a></h4>
                                                    <time datetime="2020-01-01">Jan 1, 2020</time>
                                                </div>
                                            </div>

                                            <div className="post-item">
                                                <img src="assets/img/blog/blog-recent-4.jpg" alt="" className="flex-shrink-0" />
                                                <div>
                                                    <h4><a href="blog-post.html">Laborum corporis quo dara net para</a></h4>
                                                    <time datetime="2020-01-01">Jan 1, 2020</time>
                                                </div>
                                            </div>

                                            <div className="post-item">
                                                <img src="assets/img/blog/blog-recent-5.jpg" alt="" className="flex-shrink-0" />
                                                <div>
                                                    <h4><a href="blog-post.html">Et dolores corrupti quae illo quod dolor</a></h4>
                                                    <time datetime="2020-01-01">Jan 1, 2020</time>
                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                    <div className="sidebar-item tags">
                                        <h3 className="sidebar-title">Tags</h3>
                                        <ul className="mt-3">
                                            <li><a href="#">App</a></li>
                                            <li><a href="#">IT</a></li>
                                            <li><a href="#">Business</a></li>
                                            <li><a href="#">Mac</a></li>
                                            <li><a href="#">Design</a></li>
                                            <li><a href="#">Office</a></li>
                                            <li><a href="#">Creative</a></li>
                                            <li><a href="#">Studio</a></li>
                                            <li><a href="#">Smart</a></li>
                                            <li><a href="#">Tips</a></li>
                                            <li><a href="#">Marketing</a></li>
                                        </ul>
                                    </div>

                                </div>

                            </div> */}

                                </div>

                            </div>
                        </section>
                    </div>
                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                        <section id="services-cards" className="services-cards">
                            <div className="container" data-aos="fade-up">
                                <div className="section-header">
                                    <h2>Our Services</h2>
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
                                                        <h4 className="card-title">Strategic Resourcing</h4>
                                                        <p>Novisync works with our customers to find the right resources fast.</p>
                                                        <p>Our Strategic Resourcing division is made up of a team of our Resource Advisors, Recruiters, and Project Managers who work together to deliver the best customer experience possible.</p>
                                                        <p>We maintain a relationship with our customers from start to finish to ensure expectations are being met, and value is being delivered.</p>
                                                        <br />
                                                        <p><strong>Offerings: </strong></p>
                                                        <br />
                                                        <ul style={{ listStyle: 'none' }}>
                                                            <li><i className="bi bi-check-circle-fill"></i>{" "}Contracted Resources – Niche and Highly Skilled.</li>
                                                            <li><i className="bi bi-check-circle-fill"></i>{" "}Interim Hiring</li>
                                                            <li><i className="bi bi-check-circle-fill"></i>{" "}Contract To Hire</li>
                                                            <li><i className="bi bi-check-circle-fill"></i>{" "}Consulting  / Training</li>
                                                            <li><i className="bi bi-check-circle-fill"></i>{" "}Direct Hire / Headhunting</li>
                                                            <li><i className="bi bi-check-circle-fill"></i>{" "}Managed Services</li>
                                                            <li><i className="bi bi-check-circle-fill"></i>{" "}Program and Team Buildouts</li>
                                                            <li><i className="bi bi-check-circle-fill"></i>{" "}Workforce Development</li>
                                                            <li><i className="bi bi-check-circle-fill"></i>{" "}Multi Consultant Objective Deliverables</li>

                                                        </ul>
                                                        <br />
                                                        <p><strong>Pre Engagement: </strong></p>
                                                        <p>
                                                            Novisync conducts customer intake calls to fully understand our customers needs and culture of their business.  By having a full understanding of the requirements and the work environment we can commit to finding the right resources fast.
                                                        </p>
                                                        <br />
                                                        <p>We conduct two interviews of every resource before presenting to our customers. We conduct a Cultural Fit and Technical Interview before summitting resources so we can deliver two resumes per role instead of twenty. Better qualified resources and faster turnaround help our customers save time and money.
                                                        </p>
                                                        <br />
                                                        <p><strong>Resource Selection: </strong></p>
                                                        <p>
                                                            Once a resource is selected and onboarded, they will be assigned to a project manager who will have regular contact with the resource and their manager throughout the entire engagement to ensure mutual customer and resource satisfaction.
                                                        </p>
                                                        <br />
                                                        <p>
                                                            Everyone of our resources have access to Upskilling, Training, and Certification programs through industry leading training programs and partners
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