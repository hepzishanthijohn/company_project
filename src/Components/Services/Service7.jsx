import { Link } from "react-router-dom";
import data from '../../Data/sercicePage.json';
import AOS from 'aos';
import { useEffect } from "react";

const Service7 = () => {
   useEffect(() => {
      AOS.init({
        duration: 1000,
        once: false,
        offset: 100,
      });
    }, []);
    return (
        <div className="servcie2 sp bg1">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto text-center">
              <div className="heading1">
                <h2>More Service</h2>
              </div>
            </div>
          </div>

          <div className="space30"></div>
          <div className="row" data-aos="zoom-in-up">

          {data.slice(0,3).map((item, i) => (
            <div key={i} className="col-lg-4 col-md-6" >
            
                <div className="moreservice-box servcie2-box-2" >
                <div className="moreservice-image">
                       <div className="service-image">
                       <img src={item.image} alt="" />
                       </div>
                        <div className="icon">
                      <img src={item.icon} alt="" />
                         </div>
                     </div>

                  
                  <div className="heading1">
                  <h4><Link to={item.btnLink}>{item.title}</Link></h4>
                    <div className="space16"></div>
                    <p>{item.desc}</p>
                    <div className="text-center p-4">
                    <Link to={item.btnLink} className="arrow"><button>Explore <i className="bi bi-arrow-right"></i></button></Link>
                    </div>
                  </div>
                </div>
              </div>
           
            ))}

          </div>

          <div className="space40"></div>
          <div className="row">
            <div className="col-lg-12 text-center">
              <Link className="theme-btn1" to="/service">View All Services <span><i className="bi bi-arrow-right"></i></span></Link>
            </div>
          </div>

        </div>
      </div>
    );
};

export default Service7;