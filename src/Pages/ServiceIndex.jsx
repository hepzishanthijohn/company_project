import { useParams } from "react-router-dom";
import ServiceDetailsLeft from "./ServiceDetailsLeft";
import ServiceDetailsRight from "./ServiceDetailsRight";
import ServiceDetailsCenter from "./ServiceDetailsCenter";

const serviceMap = {
  "service" :{ position: "left", serviceName: "Our Service", banner: "/assets/img/servicesImages/service.webp" },
  "software-development": { position: "left", serviceName: "Software Development", banner: "/assets/img/servicesImages/softdev3.jpeg" },
  "cloud-computing-solutions": { position: "left", serviceName: "Cloud Computing Solutions", banner: "/assets/img/servicesImages/cloud.png" },
  "data-analytics-business-intelligence": { position: "left", serviceName: "Data Analytics & Business Intelligence", banner: "/assets/img/servicesImages/dataAnalyst.webp" },
  "IT-consulting-support": { position: "left", serviceName: "IT Consulting & Support", banner: "/assets/img/servicesImages/consulting3.jpg" },
  "cybersecurity-compliance": { position: "left", serviceName: "Cybersecurity & Compliance", banner: "/assets/img/servicesImages/cybersecurity.jpg" },
  "enterprise-integration": { position: "left", serviceName: "Enterprise Integration", banner: "/assets/img/servicesImages/enterprise.jpg" },
  "intelligent-automation": { position: "left", serviceName: "Intelligent Automation", banner: "/assets/img/servicesImages/intelAutomation.webp" },
  "digital-transformation": { position: "left", serviceName: "Digital Transformation", banner: "/assets/img/servicesImages/digitalTransformation.jpg" }
};

const ServiceIndex = () => {
  const { serviceName } = useParams();

  
  const service = serviceMap[serviceName] || {
    position: "left",
    serviceName: "Service",
    // Default image
  };

  console.log("Service Object:", service);  // Log the service object

  const renderComponent = () => {
    switch (service.position) {
      default:
        return <ServiceDetailsLeft serviceName={service.serviceName} filter={serviceName} banner={service.banner} />;
    }
  };

  return <div>{renderComponent()}</div>;
};

export default ServiceIndex;
