import { useParams, useLocation } from "react-router-dom";
import ServiceDetailsLeft from "./ServiceDetailsLeft";
import ServiceDetailsRight from "./ServiceDetailsRight";
import ServiceDetailsCenter from "./ServiceDetailsCenter";
const serviceMap = {
  "software-development": { position: "left", serviceName: "Software Development" },
  "cloud-computing-solutions": { position: "center", serviceName: "Cloud Computing Solutions" },
  "data-analytics-business-intelligence": { position: "right", serviceName: "Data Analytics & Business Intelligence" },
  "IT-consulting-support": { position: "left", serviceName: "IT Consulting & Support" },
  "cybersecurity-compliance": { position: "center", serviceName: "Cybersecurity & Compliance" },
  "enterprise-integration": { position: "right", serviceName: "Enterprise Integration" },
  "intelligent-automation": { position: "left", serviceName: "Intelligent Automation" },
  "digital-transformation": { position: "center", serviceName: "Digital Transformation" }
};

const ServiceIndex = () => {
 
 
  const { serviceName } = useParams();

  const service = serviceMap[serviceName] || { position: "left", serviceName: "Service" };


  const renderComponent = () => {
    switch (service.position) {

      default:
        return <ServiceDetailsLeft serviceName={service.serviceName} filter={serviceName} />;
    }
  };
  return (
    <div >
    
      {renderComponent()}
    </div>
  );
}
export default ServiceIndex;