import { useParams, useLocation } from "react-router-dom";
// import ProjectDetailsLeft from "./ProjectDetailsLeft";
// import ProejctDetailsCenter from "./ProejctDetailsCenter";
// import ProjectDetailsRight from "./IndustriesDetailsRight";
import IndustriesDetailsRight from "./IndustriesDetailsRight";
const industriesMap = {
  "retail": { position: "left", industriesName: "Retail",banner: "/assets/img/industryImage/retailbanner.jpg" },
  "banking-finance": { position: "left", industriesName: "Banking & Finance" ,banner: "/assets/img/industryImage/finance.jpg"},
  "e-governance": { position: "left", industriesName: "E-governance",banner: "/assets/img/industryImage/egovernance.jpg" },
  "software-Hi-Tech": { position: "left", industriesName: "Software & Hi-Tech",banner: "/assets/img/industryImage/retail.jpg" },
  "healthcare": { position: "left", industriesName: "Healthcare",banner: "/assets/img/industryImage/retail.jpg" },
  "consumer-technology": { position: "left", industriesName: "Consumer Technology",banner: "/assets/img/industryImage/retail.jpg" },
  };

const IndustriesIndex = () => {
 
  // const location = useLocation();
  // const position = location.state?.position || "left"; 
  // const industriesName = location.state?.industriesName || "project"; 
 
  const { industriesName } = useParams();

  const industries = industriesMap[industriesName] || { 
    position: "left",
     industriesName: "industries"
    };


  const renderComponent = () => {
    switch (industries.position) {
      // case "left":
      //   return <ProjectDetailsLeft serviceName={serviceName} />;
      // case "center":
      //   return <ProejctDetailsCenter serviceName={serviceName}/>;
      default:
        return <IndustriesDetailsRight industriesName={industries.industriesName} filter={industriesName} banner={industries.banner} />;
    }
  };

  return (
    <div >
    
      {renderComponent()}
    </div>
  );
}
export default IndustriesIndex;