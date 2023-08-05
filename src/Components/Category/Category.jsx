import React from "react";
import Products from "../Home/Products/Products";
import "./Category.scss";
import { useParams } from "react-router";
import useFetch from "../../Hooks/useFetch";
function Category() {
  const { id } = useParams();
  const { data } = useFetch(
    `/api/products?populate=*&[filters][categories][id]=${id}`
  );
  console.log(data);
  return (
    <div className="categoryMainContent">
      <div className="layout">
        <div className="categoryTitle">
          {
            data?.data?.[0]?.attributes?.categories?.data?.[0]?.attributes
              ?.Title
          }
        </div>
        <Products innerPage={true} products={data} />
      </div>
    </div>
  );
}
export default Category;
