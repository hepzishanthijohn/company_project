import About6 from "../Components/About/About6";
import BreadCumb from "../Components/Common/BreadCumb";
import Cta1 from "../Components/Cta/Cta1";
import MarqueeText from "../Components/MarqueeText/MarqueeText";
import Mission1 from "../Components/Mission/Mission1";
import Vission1 from "../Components/Mission/Vission1";
import Team2 from "../Components/Team/Team2";
import Testimonial1 from "../Components/Testimonial/Testimonial1";

const AboutLight = () => {
    return (
        <div>
            <BreadCumb Title="About Us"></BreadCumb>
            <MarqueeText></MarqueeText>
            <About6
                image1="/assets/img/about/service1.webp"
                image2="/assets/img/about/service2.webp"
                image3="/assets/img/about/service3.webp"
                experienceNum="30+"
                experienceTitle="Years Of <br> Experience"
                subTitle="Our Service"
                title="Empower Your Business With Our Comprehensive IT Solutions"
                content="Welcome to Zigma, your premier destination for cutting-edge technology solutions and IT services. At Zigma, we are passionate about harnessing the power of technology to empower businesses a like."
                counName1="IT Consulting"
                CounNum1="100%"
                counName2="Cyber Security"
                CounNum2="98%"
            ></About6>
            <Mission1></Mission1>
            <Vission1></Vission1>
            <Testimonial1></Testimonial1>
            <Team2></Team2>
            <Cta1></Cta1>
        </div>
    );
};

export default AboutLight;