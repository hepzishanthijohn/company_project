import BreadCumb from "../Components/Common/BreadCumb";
import Cta1 from "../Components/Cta/Cta1";
import MarqueeText from "../Components/MarqueeText/MarqueeText";
import IndustriesRight1 from "../Components/ProjectDetails/IndustriesDetailsRight1";
import Service7 from "../Components/Services/Service7";

const IndustriesDetailsRight = ({industriesName,filter,banner}) => {
    return (
        <div>
            <BreadCumb Title={`${industriesName}` } banner={`${banner}`}></BreadCumb>
            <MarqueeText></MarqueeText>
            <IndustriesRight1 filter={filter}></IndustriesRight1>
            <Service7></Service7>
            <Cta1></Cta1>
        </div>
    );
};

export default IndustriesDetailsRight;