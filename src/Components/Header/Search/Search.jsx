import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import "./Search.scss";
import prod from "../../../Assets/My project-2.png";
import { useNavigate } from "react-router";
import useFetch from "../../../Hooks/useFetch";
function Search({ setShowSearch }) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const onChange = (e) => {
    setQuery(e.target.value);
  };
  let { data } = useFetch(
    `/api/products?populate=*&filters[Title][$contains]=${query}`
  );
  console.log();
  if (!query.length) {
    data = null;
    console.log();
  }
  return (
    <div className="searchModal">
      <div className="formField">
        <input
          type="text"
          autoFocus
          placeholder="Search for Products"
          value={query}
          onChange={onChange}
        />
        <MdClose onClick={() => setShowSearch(false)} />
      </div>
      <div className="searchResultContent">
        <div className="searchResult">
          {data?.data?.map((item) => (
            <div
              key={item.id}
              className="searchResultItem"
              onClick={() => {
                navigate("/product/" + item.id);
                setShowSearch(false);
              }}
            >
              <img
                className="imageContainer"
                src={
                  process.env.REACT_APP_DEV_URL +
                  item.attributes.Image.data[0].attributes.url
                }
                alt=""
              />
              <div className="productDetails">
                <span className="name">{item.attributes.Title}</span>
                <span className="desc">{item.attributes.Description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Search;
