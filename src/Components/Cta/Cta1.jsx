import { Link } from "react-router-dom";
import AOS from "aos";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

const Cta1 = () => {
  const textRef = useRef(null); // Reference for the heading

  useEffect(() => {
    AOS.init({ duration: 1000, once: false, offset: 100 });

    // Initialize the typing effect
    const typed = new Typed(textRef.current, {
      strings: ["At Zigma Technologies, We are Committed To Businesses"],
      typeSpeed: 50,
      backSpeed: 25,
      showCursor: false,
      loop: false,
    });

    return () => {
      typed.destroy(); // Cleanup when unmounting
    };
  }, []);

  return (
    <div className="cta">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="heading1-w" data-aos="fade-right">
              <h2 className="arrowbg tg-element-title">
                <span ref={textRef}></span> {/* Typing effect applied here */}
              </h2>
              <div className="space16"></div>
              <p data-aos="fade-right">
                Take the first step towards achieving your business goals by contacting us today.
                Schedule a consultation with one of our IT specialists to discuss your objectives
                and explore how our innovative solutions can propel.
              </p>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="buttons">
              <Link className="cta-btn1" to="/service">
                Request a Consultation{" "}
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="bi bi-arrow-right-short"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                    />
                  </svg>
                </span>
              </Link>
              <Link className="cta-btn2" to="/service">
                Explore Solution{" "}
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="bi bi-arrow-right-short"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta1;
