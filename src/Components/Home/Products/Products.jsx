import React from "react";
import Product from "./Product/Product";
import "./Products.scss";
function Products({ innerPage, headingText }) {
  return (
    <div className="productsContainer">
      {!innerPage && <div className="secHeading">{headingText}</div>}
      <div className="products">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}
export default Products;
