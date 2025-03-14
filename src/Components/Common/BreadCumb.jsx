import { Link } from "react-router-dom";



const BreadCumb = ({ Title, banner }) => {

  
  return (
    <div
      className="common-hero"      
       style={{
        backgroundImage: `url('${banner}')`,  // Dynamically set the background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: "70vh"
        
      }}
    >
      <div className="hero-container">
        <div className="row">
          <div className="col-lg-6 m-auto">
            <div className="service-heading" >
              <h1 >{Title}</h1>
              <div className="space16"></div>
              <span className="span">
                <Link to="/">Home</Link>
                <span className="arrow">
                  <i className="bi bi-chevron-right"></i>
                </span>{" "}
                {Title}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadCumb;
