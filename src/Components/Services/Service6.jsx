import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import data from '../../Data/sercicePage.json';

const Service6 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
    });
  }, []);

  return (
    <div className="service2 service-page sp">
    <div className="container">
      <div className="row">
      {data.map((item, i) => (
        <div key={i} className="col-lg-4 col-md-8" data-aos="fade-up">
          <div className="service2-box">
            <div className="image">
              <img src={item.image} alt="" />
            </div>
            <div className="heading">
              
              <h3 className='text-center'><Link to={item.btnLink}>{item.title}</Link></h3>
              <div className="space15"></div>
              <p>{item.desc}</p>
              
              <div className="d-flex flex-column h-0 ">
  <div className="mt-auto text-end ">
    <Link to={item.btnLink} className='learn'>
      Read More <span><i className="bi bi-arrow-right "></i></span>
    </Link>
  </div>
</div>
            </div>
          </div>
        </div>
    
    ))}
    
    
      
    
      </div>
    
    
    </div>
    </div>
  );
};

export default Service6;
