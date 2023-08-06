import React, { useContext } from "react";
import prod from "../../../Assets/My project-2.png";
import { MdClose } from "react-icons/md";
import { Context } from "../../../Utils/Content";
import "./CartItem.scss";
function CartItem() {
  const { cartItems, handleCartProductQuantity, handleRemoveFromCart } =
    useContext(Context);
  return (
    <div className="cartProducts">
      {cartItems.map((item) => (
        <div key={item.id} className="cartProduct">
          <div className="imageContainer">
            <img
              src={
                process.env.REACT_APP_DEV_URL +
                item.attributes.Image.data[0].attributes.url
              }
              alt=""
            />
          </div>
          <div className="productDetails">
            <span className="name">{item.attributes.Title}</span>
            <MdClose
              className="closeBtn"
              onClick={() => handleRemoveFromCart(item)}
            />
            <div className="quantityButtons">
              <span onClick={() => handleCartProductQuantity("dec", item)}>
                -
              </span>
              <span>{item.attributes.quantity}</span>
              <span onClick={() => handleCartProductQuantity("inc", item)}>
                +
              </span>
            </div>
            <div className="text">
              <span>{item.attributes.quantity}</span>
              <span>x</span>
              <span className="highlight">
                &#8377;{(item.attributes.Weight * 6112).toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default CartItem;
