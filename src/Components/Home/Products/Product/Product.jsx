import React from "react";
import "./Product.scss";
import prod from "../../../../Assets/My project-2.png";
import { Link } from "react-router-dom";
function Product() {
  return (
    <div className="productCard">
      <div className="thumbnail">
        <img src={prod} alt="" />
      </div>
      <div className="productDetails">
        <span className="name">Product Name</span>
        <span className="price">&#8377;4999</span>
      </div>
    </div>
  );
}
export default Product;
