import { useEffect, useContext } from "react";
import "./Home.scss";
import Hero from "./Hero/Hero";
import Category from "./Category/Category";
import Products from "./Products/Products";
import { fetchDataFromApi } from "../../Utils/api";
import { Context } from "../../Utils/Content";
function Home() {
  const { categories, setCategories, products, setProducts } =
    useContext(Context);
  useEffect(() => {
    getProducts();
    getCategories();
  }, []);
  const getCategories = () => {
    fetchDataFromApi("/api/categories?populate=*").then((res) => {
      setCategories(res);
    });
  };
  const getProducts = () => {
    fetchDataFromApi("/api/products?populate=*").then((res) => {
      setProducts(res);
    });
  };
  return (
    <div className="home">
      <Hero />
      <div className="mainContent">
        <div className="layout">
          <Category categories={categories} />
          <Products products={products} headingText="Popular Products" />
        </div>
      </div>
    </div>
  );
}
export default Home;
