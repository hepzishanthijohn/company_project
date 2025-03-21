import BreadCumb from "../Components/Common/BreadCumb";
import Cta1 from "../Components/Cta/Cta1";
import MarqueeText from "../Components/MarqueeText/MarqueeText";
import ServiceDetailsRight2 from "../Components/ServiceDetails/ServiceDetailsRight2";

const ServiceDetailsRight = ({serviceName}) => {
    return (
        <div>
            <BreadCumb Title={`${serviceName}`}></BreadCumb>
            <MarqueeText></MarqueeText>
            <ServiceDetailsRight2></ServiceDetailsRight2>
            <Cta1></Cta1>
        </div>
    );
};

export default ServiceDetailsRight;