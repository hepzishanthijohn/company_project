import React from "react";
import productsData from "./products.json";

const Product = () => {
  return (
    <div className="container py-5  mt-5">
      {/* <h1 className="text-center fw-bold mb-4 text-primary mt-5">Cyber Kavach Solutions</h1> */}
      <div className="row g-4 mt-5">
        {productsData.map((product, index) => (
          <div key={index} className="col-md-12">
            <div 
              className="card shadow-lg rounded-3 p-4 overflow-hidden position-relative" 
              style={{ 
                transition: "0.3s", 
                border: "3px solid transparent", 
                background: "white",
                color: "black"
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = "linear-gradient(135deg, #0c63e4, #0048a1)";
                e.currentTarget.style.color = "white";
                e.currentTarget.style.transform = "scale(1.03)";
                e.currentTarget.style.boxShadow = "0px 8px 20px rgba(0, 0, 0, 0.2)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "white";
                e.currentTarget.style.color = "black";
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div className="row g-3 align-items-center">
                <div className={`col-md-4 ${index % 2 === 0 ? 'order-md-1' : 'order-md-2'}` }>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="img-fluid rounded border border-light shadow"
                  />
                </div>
                <div 
                  className={`col-md-8 ${index % 2 === 0 ? 'order-md-2 text-md-start' : 'order-md-1 text-md-end'}` }
                >
                  <h2 className="h4 fw-bold text-uppercase">{product.name}</h2>
                  <p className="mt-2" style={{ fontSize: "1.1rem" }}>{product.details}</p>
                  <ul className="list-unstyled mt-3">
                    {product.keyPoints.map((point, i) => (
                      <li key={i} className="fw-light" style={{ fontSize: "1rem" }}>&#8226; {point}</li>
                    ))}
                  </ul>
                  {/* <button className="btn btn-light text-primary fw-bold mt-3 px-4 py-2 shadow">Learn More</button> */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;