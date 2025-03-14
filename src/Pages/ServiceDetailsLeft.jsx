import BreadCumb from "../Components/Common/BreadCumb";
import Cta1 from "../Components/Cta/Cta1";
import MarqueeText from "../Components/MarqueeText/MarqueeText";
import ServiceDetailsLeft1 from "../Components/ServiceDetails/ServiceDetailsLeft1";

const ServiceDetailsLeft = ({serviceName,filter}) => {
    
    return (
        <div>
            <BreadCumb Title={`${serviceName}`}></BreadCumb>
            <MarqueeText></MarqueeText>
            <ServiceDetailsLeft1 filter={filter}></ServiceDetailsLeft1>
            <Cta1></Cta1>
        </div>
    );
};

export default ServiceDetailsLeft;