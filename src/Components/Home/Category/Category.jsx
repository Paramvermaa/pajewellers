import React from "react";
import { useNavigate } from "react-router-dom";
import cat1 from "../../../Assets/IMG_3826.jpeg";
import "./Category.scss";
function Category({ categories }) {
  const navigate = useNavigate();
  return (
    <div className="shopByCategory">
      <div className="categories">
        {console.log(categories)}
        {categories?.data?.map((item) => (
          <div
            key={item.id}
            className="category"
            onClick={() => navigate(`/category/${item.id}`)}
          >
            <img
              src={
                process.env.REACT_APP_DEV_URL +
                item.attributes.categoryImage.data[0].attributes.url
              }
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
}
export default Category;
