import BreadCumb from "../Components/Common/BreadCumb";
import Cta1 from "../Components/Cta/Cta1";
import MarqueeText from "../Components/MarqueeText/MarqueeText";
import Team4 from "../Components/Team/Team4";

const TeamPage = () => {
    return (
        <div>
            <BreadCumb Title="Our Team" banner={"/assets/img/servicesImages/service.webp"}></BreadCumb>
            <MarqueeText></MarqueeText>
            <Team4></Team4>
            <Cta1></Cta1>
        </div>
    );
};

export default TeamPage;