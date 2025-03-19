import { Link } from "react-router-dom";
import IndustriesContent from '../../Data/Industries/IndustriesData.json';
import { useEffect, useState } from "react";
import AOS from 'aos'

const IndustriesRight1 = ({ filter }) => {
    const [content, setContent] = useState(null);

  
    useEffect(() => {
        if (filter && IndustriesContent[filter]) {
            setContent(IndustriesContent[filter]);
        } else {
            setContent(null);
        }
    }, [filter]);
    useEffect(() => {
        AOS.init({
          duration: 1000,
          once: false,
          offset: 100,
        });
      }, []);

    return (
        <div className="service-details-area-all sp">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 details-left-space">
                        <div className="service-details-post">
                            <article>
                                <div className="details-post-area">
                                    <div className="image image-anime" data-aos="fade-right" style={{borderRadius:"7px"}}>
                                        <img src={content?.image} alt="Industry Solutions" />
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

                            {/* ERP Implementation Process */}
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
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            )}

                           
                        </div>
                    </div>

                    {/* Sidebar */}
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
                                <li><a href="#">Cloud</a></li>
                                <li><a href="#">IT Solution</a></li>
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
                                        <input type="text" placeholder="Your Name" required />
                                    </div>
                                    <div className="single-input">
                                        <input type="email" placeholder="Email Address" required />
                                    </div>
                                    <div className="single-input">
                                        <input type="number" placeholder="Phone Number" required />
                                    </div>
                                    <div className="single-input">
                                        <textarea placeholder="Your Message" cols="30" rows="3" required></textarea>
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
            <div className="space50"></div>

{/* Benefits Section */}
{content?.benefits && (
    <article>
        <div className="benefits-container">
            <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="heading1">
                        <h5 className="text-center" data-aos="fade-up">{content.benefits.title}</h5>
                        <div className="space16"></div>
                        <div className="row">
                            {content.benefits.items.map((benefit, index) => (
                                <div className="col-lg-3 col-md-6" key={index} data-aos="zoom-in-up">
                                    <div className="project-details-box heading2" >
                                        <i className={benefit.icon}></i>
                                        <h4><Link to="/project/project-details">{benefit.title}</Link></h4>
                                        <div className="space16"></div>
                                        <p>{benefit.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </article>
)}

<div className="space50"></div>


{content?.cta && (
    <div className="get-started-box">
        <h3>{content.cta.title}</h3>
        <div className="space16"></div>
        <p>{content.cta.description}</p>
        <div className="space30"></div>
        <a href={content.cta.button_link} className="get-started-btn">
            {content.cta.button_text} <span><i className="bi bi-arrow-right"></i></span>
        </a>
    </div>
)}
        </div>
    );
};

export default IndustriesRight1;
