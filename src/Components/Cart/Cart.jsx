import React, { useContext } from "react";
import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import "./Cart.scss";
import CartItem from "./CartItem/CartItem";
import { Context } from "../../Utils/Content";
function Cart({ setShowCart }) {
  const { cartItems, cartSubTotal } = useContext(Context);
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
        {!cartItems?.length && (
          <div className="emptyCart">
            <BsCartX />
            <span>Np Products in the cart.</span>
            <button className="returnCta">RETURN TO SHOP</button>
          </div>
        )}
        {!!cartItems?.length && (
          <>
            <CartItem />
            <div className="cartFooter">
              <div className="subtotal">
                <div className="text">Subtotal</div>
                <div className="text total">&#8377;{cartSubTotal}</div>
              </div>
              <div className="button">
                <button className="checkoutCta">Checkout</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
export default Cart;
