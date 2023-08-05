import React, { useContext, useState } from "react";
import { useParams } from "react-router";
import useFetch from "../../Hooks/useFetch";
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
import { Context } from "../../Utils/Content";
function SingleProduct() {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const { data } = useFetch(`/api/products?populate=*&[filters][id]=${id}`);
  const { handleAddToCart } = useContext(Context);
  const increment = () => {
    setQuantity((prevState) => prevState + 1);
  };
  const decrement = () => {
    setQuantity((prevState) => {
      if (prevState === 1) return 1;
      else return prevState - 1;
    });
  };
  if (!data) return;
  const product = data.data[0].attributes;
  return (
    <div className="singleProductMainContent">
      <div className="layout">
        <div className="singleProductPage">
          <div className="left">
            <img
              src={
                process.env.REACT_APP_DEV_URL +
                product.Image.data[0].attributes.url
              }
              alt=""
            />
          </div>
          <div className="right">
            <span className="name">{product.Title}</span>
            <span className="price">
              &#8377;&nbsp;{(product.Weight * 6112).toFixed(2)}
            </span>
            <span className="desc">{product.Description}</span>
            <div className="cartButtons">
              <div className="quantityButtons">
                <span onClick={decrement}>-</span>
                <span>{quantity}</span>
                <span onClick={increment}>+</span>
              </div>
              <button
                className="addToCartButton"
                onClick={() => {
                  handleAddToCart(data.data[0], quantity);
                  setQuantity(1);
                }}
              >
                <FaCartPlus size={20} />
                &nbsp;ADD TO CART
              </button>
            </div>
            <span className="divider"></span>
            <div className="infoItem">
              <span className="textBold">
                Category:&nbsp;
                <span>{product.categories.data[0].attributes.Title}</span>
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
        <RelatedProducts
          productId={id}
          categoryId={product.categories.data[0].id}
        />
      </div>
    </div>
  );
}
export default SingleProduct;
