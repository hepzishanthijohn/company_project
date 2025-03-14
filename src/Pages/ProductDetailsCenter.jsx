import BreadCumb from "../Components/Common/BreadCumb";
import Cta1 from "../Components/Cta/Cta1";
import MarqueeText from "../Components/MarqueeText/MarqueeText";
import ProductDetailsCenter1 from "../Components/ProjectDetails/ProductDetailsCenter1";
import Service7 from "../Components/Services/Service7";

const ProductDetailsCenter = ({productName,filter}) => {
    return (
        <div className="top">
            <BreadCumb Title={`${productName}`}></BreadCumb>
            <MarqueeText></MarqueeText>
            <ProductDetailsCenter1 filter={filter}></ProductDetailsCenter1>
            <Service7></Service7>
            <Cta1></Cta1>
        </div>
    );
};

export default ProductDetailsCenter;