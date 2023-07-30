import React from "react";
import Products from "../Home/Products/Products";
import "./Category.scss";
function Category() {
  return (
    <div className="categoryMainContent">
      <div className="layout">
        <div className="categoryTitle">Category Title</div>
        <Products innerPage={true} />
      </div>
    </div>
  );
}
export default Category;
