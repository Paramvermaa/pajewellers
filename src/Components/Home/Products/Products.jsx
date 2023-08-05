import React from "react";
import Product from "./Product/Product";
import "./Products.scss";
function Products({ innerPage, headingText, products }) {
  return (
    <div className="productsContainer">
      {!innerPage && <div className="secHeading">{headingText}</div>}
      <div className="products">
        {products?.data?.map((item) => (
          <Product key={item.id} id={item.id} data={item.attributes} />
        ))}
      </div>
    </div>
  );
}
export default Products;
