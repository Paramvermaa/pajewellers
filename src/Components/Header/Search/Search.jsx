import React from "react";
import { MdClose } from "react-icons/md";
import "./Search.scss";
import prod from "../../../Assets/My project-2.png";
function Search({ setShowSearch }) {
  return (
    <div className="searchModal">
      <div className="formField">
        <input type="text" autoFocus placeholder="Search for Products" />
        <MdClose onClick={() => setShowSearch(false)} />
      </div>
      <div className="searchResultContent">
        <div className="searchResult">
          <div className="searchResultItem">
            <img className="imageContainer" src={prod} alt="" />
            <div className="productDetails">
              <span className="name">Product Name</span>
              <span className="desc">Product Description</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Search;
