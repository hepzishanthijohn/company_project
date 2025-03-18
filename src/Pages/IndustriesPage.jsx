import BreadCumb from "../Components/Common/BreadCumb";
import Cta1 from "../Components/Cta/Cta1";
import MarqueeText from "../Components/MarqueeText/MarqueeText";
import Project4 from "../Components/Project/Project4";

const IndustriesPage = () => {
    return (
        <div>
            <BreadCumb Title="Our Industries" banner={'public/assets/img/industryImage/industryBanner.jpg'}></BreadCumb>
            <MarqueeText></MarqueeText>
            <Project4></Project4>
            <Cta1></Cta1>
        </div>
    );
};

export default IndustriesPage;