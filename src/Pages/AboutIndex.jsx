import { useParams } from "react-router-dom";
import ServiceDetailsLeft from "./ServiceDetailsLeft";
import ServiceDetailsRight from "./ServiceDetailsRight";
import ServiceDetailsCenter from "./ServiceDetailsCenter";

const aboutMap = {
  "about" :{ position: "left", aboutName: "Our Service", banner: "/assets/img/servicesImages/service.webp" },
  "team": { position: "left", aboutName: "Software Development", banner: "/assets/img/servicesImages/softdev3.jpeg" },
  "testimonal": { position: "left", aboutName: "Cloud Computing Solutions", banner: "/assets/img/servicesImages/cloud.png" },
  "contact": { position: "left", aboutName: "Data Analytics & Business Intelligence", banner: "/assets/img/servicesImages/dataAnalyst.webp" },
};

const AboutIndex = () => {
  const { aboutName } = useParams();

  console.log("Service Name from URL:", aboutName);  // Log the service name
  
  const about = aboutMap[aboutName] || {
    position: "left",
    aboutName: "about",
    // Default image
  };

  console.log("about Object:", about);  // Log the about object

  const renderComponent = () => {
    switch (about.position) {
      default:
        return <aboutDetailsLeft aboutName={about.aboutName} filter={aboutName} banner={service.banner} />;
    }
  };

  return <div>{renderComponent()}</div>;
};

export default AboutIndex;
