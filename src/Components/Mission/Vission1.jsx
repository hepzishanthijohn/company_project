import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Vission1 = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="solution about-solution sp">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="images" data-aos="fade-right">
              <div className="row">
                <div className="col-lg-12">
                  <div className="image">
                    <img src="/assets/img/about/service4.webp" alt="" />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="space30"></div>
                  <div className="image">
                    <img src="/assets/img/about/service5.webp" alt="" />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="space30"></div>
                  <div className="image">
                    <img src="/assets/img/about/service6.webp" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="heading1" data-aos="fade-left">
              <span className="span">Our Vision</span>
              <h2>Driving Innovation: Our Vision at Zigma</h2>
              <div className="space16"></div>
              <p>At Zigma, our vision is to be the leading force driving digital transformation and innovation worldwide. We envision a future where businesses of all sizes have the tools and expertise they need to thrive in an increasingly digital world.</p>

              <div className="item-box">
                <div className="icon">
                  <div className="">
                    <img src="/assets/img/icons/about-solution-iocn1.png" alt="" />
                  </div>
                </div>
                <div className="">
                  <h3><a href="#">Network Infrastructure Solutions</a></h3>
                  <div className="space10"></div>
                  <p>Build a reliable and secure network infrastructure that <br/> supports your business operations enables seamless</p>
                </div>
              </div>

              <div className="item-box">
                <div className="icon">
                  <div className="">
                    <img src="/assets/img/icons/about-solution-iocn2.png" alt="" />
                  </div>
                </div>
                <div className="">
                  <h3><a href="#">Managed IT Services</a></h3>
                  <div className="space10"></div>
                  <p>Focus on your core business activities while we take <br/> care of your IT needs with our managed IT services.</p>
                </div>
              </div>

              <div className="space30"></div>
              <div className="animationButton fade-bottom reveal active">
                <div className="knowMoreButton">
                  <div className="circle"><span className="icon" style={{ fontSize: "40px" }}>→</span></div>
                  <p>
                    <Link className="theme-btn1" to="/contact">Get A Quote <span><i className="bi bi-arrow-right"></i></span></Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vission1;
