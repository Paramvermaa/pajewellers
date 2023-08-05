import React from "react";
import { useNavigate } from "react-router-dom";
import "./Product.scss";
function Product({ id, data }) {
  const navigate = useNavigate();
  return (
    <div className="productCard" onClick={() => navigate("/product/" + id)}>
      <div className="thumbnail">
        <img
          src={
            process.env.REACT_APP_DEV_URL + data.Image.data[0].attributes.url
          }
          alt=""
        />
      </div>
      <div className="productDetails">
        <span className="name">{data.Title}</span>
        <span className="price">&#8377;{(data.Weight * 6112).toFixed(2)}</span>
      </div>
    </div>
  );
}
export default Product;
