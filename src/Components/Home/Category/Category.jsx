import React from "react";
import cat1 from "../../../Assets/IMG_3826.jpeg";
import "./Category.scss";
function Category() {
  return (
    <div className="shopByCategory">
      <div className="categories">
        <div className="category">
          <img src={cat1} alt="" />
        </div>
        <div className="category">
          <img src={cat1} alt="" />
        </div>
        <div className="category">
          <img src={cat1} alt="" />
        </div>
        <div className="category">
          <img src={cat1} alt="" />
        </div>
      </div>
    </div>
  );
}
export default Category;
