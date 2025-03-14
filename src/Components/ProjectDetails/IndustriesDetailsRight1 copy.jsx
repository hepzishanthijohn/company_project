import { Link } from "react-router-dom";
import IndustriesData from '../../Data/Industries/IndustriesData.json';
import { useEffect, useState } from "react";
const IndustriesRight1 = ({filter}) => {
    const [content, setContent] = useState(null);

    useEffect(() => {
        if (filter && IndustriesData[filter]) {
            setContent(IndustriesData[filter]);
        }
      }, [filter]);
    return (
        <div className="service-details-area-all sp">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 details-left-space">
                        <div className="service-details-post">
                            <article>
                                <div className="details-post-area">
                                    <div className="image">
                                        <img src="/assets/img/others/project-details-img1.png" alt="" />
                                    </div>
                                    <div className="space30"></div>
                                    <div className="heading1">
                                          <h2>{content?.title || "Industry Solutions"}</h2>
                                    
                                        <div className="space16"></div>
                                        <p>{content?.description || "Explore our specialized solutions for different industries."}</p>
                                      </div>
                                </div>
                            </article>

                            <div className="space50"></div>
                            {content?.implementation_process && (
                            <article>
                                <div className="details-post-area">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="heading1">
                                            <h5>{content.implementation_process.title}</h5>
                                            <div className="space16"></div>
                                                <div className="boxs-area">
                                                <ul>
                                                            {content.implementation_process.steps.slice(0, 3).map((step, index) => (
                                                                <li key={index}>
                                                                    <span className="check"><i className="bi bi-check-lg"></i></span> {step}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                        <ul>
                                                            {content.implementation_process.steps.slice(3).map((step, index) => (
                                                                <li key={index}>
                                                                    <span className="check"><i className="bi bi-check-lg"></i></span> {step}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    {/* <ul>
                                                        <li><span className="check"><i className="bi bi-check-lg"></i></span> Needs Assessment</li>
                                                        <li><span className="check"><i className="bi bi-check-lg"></i></span> Solution Design</li>
                                                        <li><span className="check"><i className="bi bi-check-lg"></i></span> Data Migration </li>
                                                    </ul>
                                                    <ul>
                                                        <li><span className="check"><i className="bi bi-check-lg"></i></span> Change Management</li>
                                                        <li><span className="check"><i className="bi bi-check-lg"></i></span> Testing & Quality</li>
                                                        <li><span className="check"><i className="bi bi-check-lg"></i></span> Go Live & Support</li>
                                                    </ul> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
 )}
                            <div className="space50"></div>

                            <article>
                                <div className="details-post-area">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="heading1">
                                                <h5>Benefits of (ERP) Implementation</h5>
                                                <div className="space16"></div>
                                                <div className="row">
                                                    <div className="col-lg-6 col-md-6">
                                                        <div className="project-details-box heading1">
                                                            <h4><Link to="/project/project-details">Improved Efficiency</Link></h4>
                                                            <div className="space16"></div>
                                                            <p>Streamline business processes and workflows, reducing manual effort and improving productivity.</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6">
                                                        <div className="project-details-box heading1">
                                                            <h4><Link to="/project/project-details">Improved Efficiency</Link></h4>
                                                            <div className="space16"></div>
                                                            <p>Streamline business processes and workflows, reducing manual effort and improving productivity.</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6">
                                                        <div className="project-details-box heading1">
                                                            <h4><Link to="/project/project-details">Improved Efficiency</Link></h4>
                                                            <div className="space16"></div>
                                                            <p>Streamline business processes and workflows, reducing manual effort and improving productivity.</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6">
                                                        <div className="project-details-box heading1">
                                                            <h4><Link to="/project/project-details">Improved Efficiency</Link></h4>
                                                            <div className="space16"></div>
                                                            <p>Streamline business processes and workflows, reducing manual effort and improving productivity.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            <div className="space50"></div>

                            <div className="get-started-box">
                                <h3>Get Started with ERP Implementation Today</h3>
                                <div className="space16"></div>
                                <p>Ready to take your business to the next level with ERP implementation? Contact us today to learn more about our ERP services and how we can help you optimize your business operations for success.</p>
                                <div className="space30"></div>
                                <a href="contact.html" className="get-started-btn">Call Now <span><i className="bi bi-arrow-right"></i></span></a>
                            </div>


                        </div>
                    </div>

                    <div className="col-lg-4">
                      <div className="sidebar-box-area mb-40">
                          <h3>Search by Keyword</h3>
                          <div className="search">
                              <input type="text" placeholder="Type keyword here" />

                              <div className="button">
                                  <button><i className="bi bi-search"></i></button>
                              </div>
                          </div>
                      </div>

                      <div className="sidebar-box-area sidebar-bg mb-40">
                          <h3>Tags</h3>
                          <ul className="tags">
                              <li><a href="#">Software Development</a></li>
                              <li><a href="#">Cloud </a></li>
                              <li><a href="#">It Solution</a></li>
                              <li><a href="#">Data Analytics Service</a></li>
                              <li><a href="#">Technology</a></li>
                              <li><a href="#">Custom Development</a></li>
                              <li><a href="#">Cyber Security</a></li>
                              <li><a href="#">Consulting Service</a></li>
                          </ul>
                      </div>

                      <div className="sidebar-box-area sidebar-bg mb-40">
                          <h3>Get A Free Quote</h3>
                          <div className="contact-form">
                              <form action="#">
                                  
                                  <div className="single-input">
                                      <input type="text" placeholder="Your Name" />
                                  </div>

                                  <div className="single-input">
                                      <input type="email" placeholder="Email Address" />
                                  </div>

                                  <div className="single-input">
                                      <input type="number" placeholder="Phone Number" />
                                  </div>

                                  <div className="single-input">
                                      <textarea placeholder="Your Message" cols="30" rows="3"></textarea>
                                  </div>

                                  <div className="button">
                                      <button className="theme-btn1">Learn More <span><i className="bi bi-arrow-right"></i></span></button>
                                  </div>
                              </form>
                          </div>
                      </div>

                  </div>

                  
                </div>
            </div>
        </div>
    );
};

export default IndustriesRight1;