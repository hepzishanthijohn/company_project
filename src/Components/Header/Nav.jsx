import { useState } from 'react';
import DropDown from './DropDown';
import { Link } from 'react-router-dom';

export default function Nav({ setMobileToggle }) {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  return (
    <ul className="cs_nav_list fw-medium">
      {/* <li className="menu-item">
        <Link to="/">Home</Link> */}
        {/* <DropDown>
          <ul>
            <li>
              <Link to="/" onClick={() => setMobileToggle(false)}>
              Home Version 1
              </Link>
            </li>
            <li>
              <Link to="/home2" onClick={() => setMobileToggle(false)}>
              Home Version 2
              </Link>
            </li>
            <li>
              <Link to="/home3" onClick={() => setMobileToggle(false)}>
                Home Version 3
              </Link>
            </li>  
            <li>
              <Link to="/home4" onClick={() => setMobileToggle(false)}>
                Home Version 4
              </Link>
            </li>
            <li>
              <Link to="/home5" onClick={() => setMobileToggle(false)}>
                Home Version 5
              </Link>
            </li>                                     
          </ul>
        </DropDown> */}
      {/* </li> */}

      <li className="menu-item-has-children">
        <Link to="/about" onClick={() => setMobileToggle(false)}>
        About Us  
        </Link>
        <DropDown>
          <ul>
          <li>
              <Link to="/team" onClick={() => setMobileToggle(false)}>
               Our Team
              </Link>
            </li>            
            <li>
              <Link to="/testimonial" onClick={() => setMobileToggle(false)}>
              Testimonial
              </Link>
            </li>      
            <li>
              <Link to="/contact" onClick={() => setMobileToggle(false)}>
              Contact
              </Link>
            </li>                      
          </ul>
        </DropDown>

      </li>      

      <li className="menu-item-has-children">
  <Link to="/service">Services</Link>
  <DropDown>
    <ul>
      <li>
        <Link to="/service/software-development" onClick={() => setMobileToggle(false)}>Software Development</Link>
      </li>
      <li>
        <Link to="/service/cloud-computing-solutions" onClick={() => setMobileToggle(false)}>Cloud Computing Solutions</Link>
      </li>
      <li>
        <Link to="/service/data-analytics-business-intelligence" onClick={() => setMobileToggle(false)}>Data Analytics & Business Intelligence</Link>
      </li>
      <li>
        <Link to="/service/IT-consulting-support" onClick={() => setMobileToggle(false)}>IT Consulting & Support</Link>
      </li>
      <li>
        <Link to="/service/cybersecurity-compliance" onClick={() => setMobileToggle(false)}>Cybersecurity & Compliance</Link>
      </li>
      <li>
        <Link to="/service/enterprise-integration" onClick={() => setMobileToggle(false)}>Enterprise Integration</Link>
      </li>
      <li>
        <Link to="/service/intelligent-automation" onClick={() => setMobileToggle(false)}>Intelligent Automation</Link>
      </li>
      <li>
        <Link to="/service/digital-transformation" onClick={() => setMobileToggle(false)}>Digital Transformation</Link>
      </li>
    </ul>
  </DropDown>
</li>

{/* 
<li className="menu-item-has-children mega-menu" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
        <Link to="/service">Services</Link>
        {servicesOpen && (
          <div className="mega-menu-content">
            <div className="mega-menu-column">
              <h6>Software & Cloud</h6>
              <Link to="/service/software-development">Software Development</Link>
              <Link to="/service/cloud-computing-solutions">Cloud Computing</Link>
              <Link to="/service/data-analytics-business-intelligence">Data Analytics & BI</Link>
            </div>
            <div className="mega-menu-column">
              <h6>IT & Security</h6>
              <Link to="/service/IT-consulting-Support">IT Consulting & Support</Link>
              <Link to="/service/cybersecurity-compliance">Cybersecurity & Compliance</Link>
              <Link to="/service/enterprise-integration">Enterprise Integration</Link>
            </div>
            <div className="mega-menu-column">
              <h6>Automation & Transformation</h6>
              <Link to="/service/intelligent-automation">Intelligent Automation</Link>
              <Link to="/service/digital-transformation">Digital Transformation</Link>
            </div>
          </div>
        )}
      </li> */}
      <li className="menu-item-has-children">
        <Link to="/industries" onClick={() => setMobileToggle(false)}>
        Industries  
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link to="/industries/retail"   onClick={() => setMobileToggle(false)}>
              Retail
              </Link>
            </li>
            <li>
              <Link to="/industries/banking-finance" onClick={() => setMobileToggle(false)}>
              Banking & Finance
              </Link>
            </li>
            <li>
              <Link to="/industries/e-governance"   onClick={() => setMobileToggle(false)}>
              E-governance
              </Link>
            </li>
            <li>
              <Link to="/industries/software-Hi-Tech"   onClick={() => setMobileToggle(false)}>
              Software & Hi-Tech
              </Link>
            </li>
            <li>
              <Link to="/industries/healthcare"  onClick={() => setMobileToggle(false)}>
              Healthcare
              </Link>
            </li>
            <li>
              <Link to="/industries/consumer-technology"  onClick={() => setMobileToggle(false)}>
              Consumer Technology
              </Link>
            </li>
          </ul>
        </DropDown>

      </li>      
     
      <li className="menu-item-has-children">
        <Link to="/blog" onClick={() => setMobileToggle(false)}>
        Insights
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link
                to="/blog/blog-details"
                onClick={() => setMobileToggle(false)}
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                to="/blog/blog-details"
                onClick={() => setMobileToggle(false)}
              >
                Newsletters
              </Link>
            </li>
            <li>
              <Link
                to="/blog/blog-details"
                onClick={() => setMobileToggle(false)}
              >
                Our Partner Ecosystem
              </Link>
            </li>
          </ul>
        </DropDown>
      </li>


      <li className="menu-item-has-children">
        <Link to="/blog" onClick={() => setMobileToggle(false)}>
        Products
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link
                to="/product/cyber-kavach-solutions#top"
                onClick={() => setMobileToggle(false)}
              >
                Cyber Kavach Solutions
              </Link>
            </li>
            <li>
              <Link
                to="/product/gen-AI-solutions#top"
                onClick={() => setMobileToggle(false)}
              >
                Gen AI Solutions
              </Link>
            </li>
            <li>
              <Link
                to="/product/ZPulse-infrastructure-solutions#top"
                onClick={() => setMobileToggle(false)}
              >
                ZPulse Infrastructure Solutions
              </Link>
            </li>
            <li>
              <Link
                to="/product/healthcare-solutions"
                onClick={() => setMobileToggle(false)}
              >
                Healthcare Solutions
              </Link>
            </li>
            <li>
              <Link
                to="/product/ERP-solutions"
                onClick={() => setMobileToggle(false)}
              >
                ERP Solutions
              </Link>
            </li>
            
          </ul>
        </DropDown>
      </li>
    </ul>
  );
}
