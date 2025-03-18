import About1 from "../Components/About/About1";
import Award1 from "../Components/Award/Award1";
import Blog1 from "../Components/Blog/Blog1";
import Blog2 from "../Components/Blog/Blog2";
import Blog3 from "../Components/Blog/Blog3";
import Blog5 from "../Components/Blog/Blog5";
import Brand1 from "../Components/Brand/Brand1";
import Choose1 from "../Components/Choose/Choose1";
import Cta1 from "../Components/Cta/Cta1";
import Cta4 from "../Components/Cta/Cta4";
import Faq2 from "../Components/Faq/Faq2";
import HeroBanner1 from "../Components/HeroBanner/HeroBanner1";
import Pricing1 from "../Components/Pricing/Pricing1";
import Project1 from "../Components/Project/Project1";
import Project2 from "../Components/Project/Project2";
import Project3 from "../Components/Project/Project3";
import Project4 from "../Components/Project/Project4";
import Services1 from "../Components/Services/Services1";
import Services3 from "../Components/Services/Services3";
import Skill1 from "../Components/Skill/Skill1";
import Team3 from "../Components/Team/Team3";
import Testimonial1 from "../Components/Testimonial/Testimonial1";
import Testimonial2 from "../Components/Testimonial/Testimonial2";
import Testimonial4 from "../Components/Testimonial/Testimonial4";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {

  
  useEffect(() => {
    AOS.init();
  }, []);
  
  
  return (
    <div className="home-page1">
      <HeroBanner1
        bgVideo={"/banner-video-webm.webm"}
        // subTitle="The Zigma Technologies India (P) Limited"
        title="Transform Your Business With Next Generation <span class='after'>IT Solutions</span>"
        content="Welcome to Zigma where we specialise in delivering tailored technology and IT solutions designed to propel your business forward. From streamlining operations to and driving growth."
        btnName="Get Started Now"
        btnUrl="/contact"
        image2="/assets/img/people/hero1-image2.webp"
        image1="/assets/img/people/image.webp"
        // image2="/assets/img/people/handsome-man-with-laptop.jpg"
        shapeImage1="/assets/img/hero/hero1-image3.png"
        // shapeiamge2="/assets/img/hero/hero1-image4.png"
        shape2="/assets/img/shapes/hero7-shape1.png"
        shape3="/assets/img/shapes/hero7-shape2.png"
        shape4="/assets/img/shapes/hero7-shape3.png"
        shape5="/assets/img/shapes/hero7-shape7.png"
      ></HeroBanner1>
      <Award1></Award1>
      <About1
        // image1="/assets/img/about/about1-img1.png"
        // image2="/assets/img/about/about1-img2.png"
        image1="/assets/img/people/side.webp"
        image2="/assets/img/people/pexels-fauxels.jpg"
        supIcon="/assets/img/icons/about1-shape-icon.png"
        supTitle="24/7 Support"
        // supCon="The Zigma Technologies India (P) Limited"
        subTitle="About Our Company"
        Title="Discover Our Story Empowering Business Through Innovation"
        content="Zigma pioneering force in the realm of technology and IT solutions, dedicated to revolutionising the way businesses thrive in the digital age. Our approach is rooted in collaboration, transparency, and a relentless pursuit of excellence. We believe that by staying ahead of the curve and embracing change, we can help our clients stay ahead of  competition."
        featurelist={[
          "Dramatically re-engineer value added IT system.",
          "Highlight any unique selling points or differentiators.",
          "Incorporate visuals such as team photos shots.",
        ]}
        btnName="Discover More"
        btnUrl="/about"
      ></About1>

      <Services1></Services1>
      <Services3></Services3>
      <Choose1></Choose1>
      <Project1></Project1>
      {/* <Project3></Project3> */}
      <Testimonial4></Testimonial4>
      <Blog1></Blog1>
      <Brand1></Brand1>
      <Team3></Team3>
      <Skill1></Skill1>
      <Faq2></Faq2>
      <Cta1></Cta1>
    </div>
  );
};

export default Home;
