import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home.js";
import AppContext from "./Utils/Content.js";
import Header from "./Components/Header/Header.js";
import Newsletter from "./Components/Footer/Newsletter/Newsletter.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Category from "./Components/Category/Category.jsx";
import SingleProduct from "./Components/SingleProduct/SingleProduct.jsx";
function App() {
  return (
    <BrowserRouter>
      <AppContext>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="/product/:id" element={<SingleProduct />} />
        </Routes>
        <Newsletter />
        <Footer />
      </AppContext>
    </BrowserRouter>
  );
}
export default App;
