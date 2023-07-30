import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaCartPlus,
} from "react-icons/fa";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import prod from "../../Assets/My project-2.png";
import "./SingleProduct.scss";
function SingleProduct() {
  return (
    <div className="singleProductMainContent">
      <div className="layout">
        <div className="singleProductPage">
          <div className="left">
            <img src={prod} alt="" />
          </div>
          <div className="right">
            <span className="name">Name</span>
            <span className="price">Price</span>
            <span className="desc">Product Description</span>
            <div className="cartButtons">
              <div className="quantityButtons">
                <span>-</span>
                <span>5</span>
                <span>+</span>
              </div>
              <button className="addToCartButton">
                <FaCartPlus size={20} />
                &nbsp;ADD TO CART
              </button>
            </div>
            <span className="divider"></span>
            <div className="infoItem">
              <span className="textBold">
                Category:&nbsp;
                <span>Pendants</span>
              </span>
              <span className="textBold">
                Share:
                <span className="socialIcons">
                  <FaFacebookF size={16} />
                  <FaTwitter size={16} />
                  <FaInstagram size={16} />
                  <FaLinkedinIn size={16} />
                  <FaPinterest size={16} />
                </span>
              </span>
            </div>
          </div>
        </div>
        <RelatedProducts />
      </div>
    </div>
  );
}
export default SingleProduct;
