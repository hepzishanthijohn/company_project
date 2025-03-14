import { useParams, useLocation } from "react-router-dom";
// import ProjectDetailsLeft from "./ProjectDetailsLeft";
// import ProductDetailsCenter from "./ProejctDetailsCenter";
// import ProjectDetailsRight from "./ProejctDetailsCenter";
import ProductDetailsCenter from "./ProductDetailsCenter";
const productMap = {
  "cyber-kavach-solutions": { position: "left", productName: "Cyber Kavach Solutions" },
  "gen-AI-solutions": { position: "center", productName: "Gen AI Solutions" },
  "ZPulse-infrastructure-solutions": { position: "right", productName: "ZPulse Infrastructure Solutions" },
  "healthcare-solutions": { position: "center", productName: "Healthcare Solutions" },
  "ERP-solutions": { position: "right", productName: "ERP Solutions" },
   };

const ProductIndex = () => {
 
  // const location = useLocation();
  // const position = location.state?.position || "left"; 
  // const industriesName = location.state?.industriesName || "project"; 
 
  const { productName } = useParams();

  const product = productMap[productName] || { position: "left", productName: "product" };


  const renderComponent = () => {
    switch (product.position) {
      // case "left":
      //   return <ProjectDetailsLeft serviceName={serviceName} />;
      // case "center":
      //   return <ProductDetailsCenter serviceName={serviceName}/>;
      default:
        return <ProductDetailsCenter productName={product.productName} filter={productName}/>;
    }
  };

  return (
    <div >
    
      {renderComponent()}
    </div>
  );
}
export default ProductIndex;