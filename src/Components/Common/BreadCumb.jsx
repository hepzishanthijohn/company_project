import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const BreadCumb = ({ Title, banner }) => {
  return (
    <div className="common-hero">
      <motion.div
        className="hero-bg"
        initial={{ backgroundSize: "120%", opacity: 0 }} // Start zoomed in & faded out
        animate={{ backgroundSize: "100%", opacity: 1 }} // Zoom out to normal & fade in
        transition={{ duration: 1.5, ease: "easeOut" }} // Smooth transition
        style={{
          backgroundImage: `url('${banner}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1, // Keep it behind content
        }}
      />
      <div className="hero-container">
        <div className="row">
          <div className="col-lg-6">
            <div className="service-heading">
              <h1>{Title}</h1>
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
