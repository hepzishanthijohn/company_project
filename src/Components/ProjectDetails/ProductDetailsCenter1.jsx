import { useEffect, useState } from "react";
import productsData from "../../Data/product/products.json";

const ProductDetailsCenter1 = ({ filter }) => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    if (filter && productsData[filter]) {
      setContent(productsData[filter]);
    } else {
      setContent(null);
    }
  }, [filter]);

  return (
    <div className="service-details-area-all sp py-5" style={{ background: "#f4f7fc" }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-10 m-auto">
            <div className="service-details-post">
              <article>
                <div className="details-post-area">
                  <div className="row g-4">
                    {content?.product?.map((product, index) => (
                      <div key={index} className="col-md-12">
                        <div
                          className="card shadow-lg rounded-4 p-5 overflow-hidden position-relative"
                          style={{
                            transition: "0.3s",
                            border: "4px solid transparent",
                            background: "white",
                            color: "black",
                          }}
                          onMouseOver={(e) => {
                            e.currentTarget.style.background = "linear-gradient(135deg, #0c63e4, #0048a1)";
                            e.currentTarget.style.color = "white";
                            e.currentTarget.style.transform = "scale(1.05)";
                            e.currentTarget.style.boxShadow = "0px 12px 25px rgba(0, 0, 0, 0.3)";
                          }}
                          onMouseOut={(e) => {
                            e.currentTarget.style.background = "white";
                            e.currentTarget.style.color = "black";
                            e.currentTarget.style.transform = "scale(1)";
                            e.currentTarget.style.boxShadow = "none";
                          }}
                        >
                          <div className="row g-4 align-items-center">
                            <div className={`col-md-4 ${index % 2 === 0 ? 'order-md-1' : 'order-md-2'}` }>
                              <img
                                src={product.image}
                                alt={product.name}
                                className="img-fluid rounded border border-light shadow-lg"
                              />
                            </div>
                            <div className={`col-md-8 ${index % 2 === 0 ? 'order-md-2 text-md-start' : 'order-md-1 text-md-end'}` }>
                              <h2 className="h2 fw-bold text-uppercase" style={{ letterSpacing: "1px" }}>
                                {product.name}
                              </h2>
                              <p className="mt-3 fw-bold " style={{ lineHeight: "1.8" }}>{product.details}</p>
                              <ul className="list-unstyled mt-4">
                                {product.keyPoints.map((point, i) => (
                                  <li key={i} className="fw-medium" style={{ paddingBottom: "5px" }}>
                                    &#8226; {point}
                                  </li>
                                ))}
                              </ul>
                           
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsCenter1;
