import { useEffect, useState } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import parse from "html-react-parser";
import VideoModal from "../VideoModal/VideoModal";
import { Link } from "react-router-dom";

const HeroBanner1 = ({
  bgVideo,
  subTitle,
  title,
  content,
  btnName,
  btnUrl,
  image1,
  image2,
  shapeImage1,
  shapeiamge2,
  shape2,
  shape3,
  shape4,
  shape5,
}) => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  const [iframeSrc, setIframeSrc] = useState("about:blank");
  const [toggle, setToggle] = useState(false);

  const handelClick = () => {
    setIframeSrc("https://www.youtube.com/embed/rRid6GCJtgc");
    setToggle(!toggle);
  };
  const handelClose = () => {
    setIframeSrc("about:blank");
    setToggle(!toggle);
  };

  return (
    <div className="hero_main_area1">
     <div className="hero1">
      {/* Background Video */}
      <video autoPlay loop muted playsInline className="video-bg">
        <source src={bgVideo} type="video/webm" loading="lazy"/>
        Your browser does not support the video tag.
      </video>

        <div className="container">
          <div className="row">
            <div className="col-lg-5">
            <div className="main-headding" data-aos="fade-left" data-aos-duration="1000">
  <span className="span" data-aos="zoom-in-left" data-aos-duration="700">
    {subTitle}
  </span>
  <h1 className="title tg-element-title">{parse(title)}</h1>
  <div className="space16"></div>
  <p>{content}</p>

  <div className="space30"></div>
  <div className="buttons">
    <Link className="theme-btn1" to={btnUrl}>
      {btnName}{" "}
      <span>
        <i className="bi bi-arrow-right"></i>
      </span>
    </Link>
  </div>
</div>
</div>



            <div className="col-lg-7">
              <div className="hero1-all-images">
                <div className="image1 ">
                  <img src={image1} alt="" />
                </div>
                <div className="image2">
                  <img src={image2} alt="" />
                </div>
                {/* <div className="image3 shape-animaiton3">
                  <img src={shapeImage1} alt="" />
                </div> */}
                <div className="image4 shape-animaiton3">
                  <img src={shapeiamge2} alt="" />
                </div>
                <div className="shape2 shape-animaiton3">
                  <img src={shape3} alt="" />
                </div>
                {/* <div className="shape3 animate3">
                  <img src={shape4} alt="" />
                </div> */}
                <div className="shape4 animate1">
                  <img src={shape5} alt="" />
                </div>
                <div className="shape1">
                  <img src={shape4} alt="" />
                  </div>
                  {/* <div className="shape2">
                    <img src="/assets/img/shapes/header1-shape2.png" alt="" />
                  </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <VideoModal
        isTrue={toggle}
        iframeSrc={iframeSrc}
        handelClose={handelClose}
      ></VideoModal>
    </div>
  );
};

export default HeroBanner1;
