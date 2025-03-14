import { Link } from "react-router-dom";

const Footer1 = () => {
    return (
        <div className="footer1 _relative">
        <div className="container">
             <div className="row">
                  <div className="col-lg-4 col-md-6 col-12">
                       <div className="single-footer-items footer-logo-area">
                            <div className="footer-logo">
                              {/* <a href=""><img src="/assets/img/logo/footer-logo1.png" alt="" /></a> */}
                                                          <a href=""><img src="/assets/img/logo2/brand12.png" alt="" /></a>

                            </div>
                            <div className="space20"></div>
                            <div className="heading1">
                              <p>At Zigma Technologies, we are dedicated to delivering innovative technology solutions tailored to meet the unique needs of businesses like yours. </p>
                            </div>
                            <ul className="social-icon">
                                 <li><a href="#"><i className="bi bi-linkedin"></i></a></li>
                                 <li><a href="#"><i className="bi bi-twitter"></i></a></li>
                                 <li><a href="#"><i className="bi bi-youtube"></i></a></li>
                                 <li><a href="#"><i className="bi bi-instagram"></i></a></li>
                            </ul>
                       </div>
                  </div>

                  <div className="col-lg col-md-6 col-12">
                       <div className="single-footer-items">
                            <h3>Service We Offer</h3>

                            <ul className="menu-list">
                                 {/* <li><Link to="/service/service-details">Cloud Computing Solution</Link></li>
                                 <li><Link to="/service/service-details">Cybersecurity & Compliance</Link></li>
                                 <li><Link to="/service/service-details">Software Development</Link></li>
                                 <li><Link to="/service/service-details">It Consulting & Support</Link></li> */}

                                 <li><Link to="/service/service-details">Software Development</Link></li>
                                 <li><Link to="/service/service-details">Cloud Computing Solutions</Link></li>
                                 <li><Link to="/service/service-details">Data Analytics & Business Intelligence</Link></li>
                                 <li><Link to="/service/service-details">IT Consulting & Support</Link></li>
                                 
                                 <li><Link to="/service/service-details">Cybersecurity & Compliance</Link></li>
                                 <li><Link to="/service/service-details">Enterprise Integration</Link></li>
                                 <li><Link to="/service/service-details">Intelligent Automation</Link></li>
                                 <li><Link to="/service/service-details">Digital Transformation</Link></li>
                            </ul>
                       </div>
                  </div>

                  <div className="col-lg col-md-6 col-12">
                       <div className="single-footer-items">
                            <h3>Useful Links</h3>

                            <ul className="menu-list">
                                 <li><Link to="/about">About Us </Link></li>
                                 <li><Link to="/service">Our Services</Link></li>
                                 <li><Link to="/blog">Blog & News</Link></li>
                                 <li><Link to="/project">Project</Link></li>
                                 <li><Link to="/contact">Contact Us</Link></li>
                            </ul>
                       </div>
                  </div>


                  <div className="col-lg-3 col-md-6 col-12">
                       <div className="single-footer-items">
                            <h3>Contact Us</h3>

                            <div className="contact-box">
                              <div className="icon">
                                <img src="/assets/img/icons/footer1-icon1.png" alt="" />
                              </div>
                              <div className="pera">
                                <a href="tel:0500222333">12345 67788</a>
                              </div>
                            </div>

                            <div className="contact-box">
                              <div className="icon">
                                <img src="/assets/img/icons/footer1-icon2.png" alt="" />
                              </div>
                              <div className="pera">
                                <a href="tel:0356588547">12345 67788</a>
                              </div>
                            </div>

                            <div className="contact-box">
                              <div className="icon">
                                <img src="/assets/img/icons/footer1-icon3.png" alt="" />
                              </div>
                              <div className="pera">
                                <a href="mailto:admin@Zigma.org">admin@zigma.com</a>
                              </div>
                            </div>

                            <div className="contact-box">
                              <div className="icon">
                                <img src="/assets/img/icons/footer1-icon4.png" alt="" />
                              </div>
                              <div className="pera">
                                <a href="mailto:admin@Zigma.org">www.zigmaindia.com</a>
                              </div>
                            </div>

                       </div>
                  </div>

             </div>

             <div className="space40"></div>
        </div>

        <div className="copyright-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-5">
                   <div className="coppyright">
                     <p>Copyright @2025 Zigma Technologies. All Rights Reserved</p>
                   </div>
              </div>
              <div className="col-md-7">
                   <div className="coppyright right-area">
                        <a href="#">Terms & Conditions</a>
                        <a href="#">Privacy Policy</a>
                   </div>
              </div>
         </div>
          </div>
     </div>

      </div>
    );
};

export default Footer1;