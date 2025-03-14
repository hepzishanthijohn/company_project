import { useParams, useLocation } from "react-router-dom";
// import ProjectDetailsLeft from "./ProjectDetailsLeft";
// import ProejctDetailsCenter from "./ProejctDetailsCenter";
// import ProjectDetailsRight from "./IndustriesDetailsRight";
import IndustriesDetailsRight from "./IndustriesDetailsRight";
const industriesMap = {
  "retail": { position: "left", industriesName: "Retail" },
  "banking-finance": { position: "center", industriesName: "Banking & Finance" },
  "e-governance": { position: "right", industriesName: "E-governance" },
  "software-Hi-Tech": { position: "center", industriesName: "Software & Hi-Tech" },
  "healthcare": { position: "right", industriesName: "Healthcare" },
  "consumer-technology": { position: "left", industriesName: "Consumer Technology" },
  };

const IndustriesIndex = () => {
 
  // const location = useLocation();
  // const position = location.state?.position || "left"; 
  // const industriesName = location.state?.industriesName || "project"; 
 
  const { industriesName } = useParams();

  const industries = industriesMap[industriesName] || { position: "left", industriesName: "industries" };


  const renderComponent = () => {
    switch (industries.position) {
      // case "left":
      //   return <ProjectDetailsLeft serviceName={serviceName} />;
      // case "center":
      //   return <ProejctDetailsCenter serviceName={serviceName}/>;
      default:
        return <IndustriesDetailsRight industriesName={industries.industriesName} filter={industriesName}/>;
    }
  };

  return (
    <div >
    
      {renderComponent()}
    </div>
  );
}
export default IndustriesIndex;