import React from "react";
import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import "./Cart.scss";
import CartItem from "./CartItem/CartItem";
function Cart({ setShowCart }) {
  return (
    <div className="cartPanel">
      Shree Ram
      <div className="opacLayer"></div>
      <div className="cartContent">
        <div className="cartHeader">
          <span className="heading">Shopping Cart</span>
          <span className="closeButton" onClick={() => setShowCart(false)}>
            <MdClose />
            <span className="text">close</span>
          </span>
        </div>
        {/* <div className="emptyCart">
            <BsCartX />
            <span>Np Products in the cart.</span>
            <button className="returnCta">RETURN TO SHOP</button>
        </div> */}
        <>
          <CartItem />
          <div className="cartFooter">
            <div className="subtotal">
              <div className="text">Subtotal</div>
              <div className="text total">&#8377;4999</div>
            </div>
            <div className="button">
              <button className="checkoutCta">Checkout</button>
            </div>
          </div>
        </>
      </div>
    </div>
  );
}
export default Cart;
