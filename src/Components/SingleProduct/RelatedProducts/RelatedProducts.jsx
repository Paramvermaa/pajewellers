import React from "react";
import Products from "../../Home/Products/Products";
import useFetch from "../../../Hooks/useFetch";
import { useParams } from "react-router";
function RelatedProducts({ productId, categoryId }) {
  const { id } = useParams();
  const { data } = useFetch(
    `/api/products?populate=*&[filters][id][&ne]=${productId}&filters[categories][id]=${categoryId}&pagination[start]=0&pagination[limit]=4`
  );
  return (
    <div className="RelatedProducts">
      <Products headingText="Related Products" products={data} />
    </div>
  );
}
export default RelatedProducts;
