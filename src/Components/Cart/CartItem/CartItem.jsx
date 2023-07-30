import React from "react";
import prod from "../../../Assets/My project-2.png";
import { MdClose } from "react-icons/md";
import "./CartItem.scss";
function CartItem() {
  return (
    <div className="cartProducts">
      <div className="cartProduct">
        <div className="imageContainer">
          <img src={prod} alt="" />
        </div>
        <div className="productDetails">
          <span className="name">Product Name</span>
          <MdClose className="closeBtn" />
          <div className="quantityButtons">
            <span>-</span>
            <span>5</span>
            <span>+</span>
          </div>
          <div className="text">
            <span>1</span>
            <span>x</span>
            <span>&#8377;4999</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CartItem;
