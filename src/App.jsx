import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home.js";
import AppContext from "./Utils/Content.js";
import Header from "./Components/Header/Header.js";
import Newsletter from "./Components/Footer/Newsletter/Newsletter.jsx";
import Footer from "./Components/Footer/Footer.jsx";
function App() {
  return (
    <BrowserRouter>
      <AppContext>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Newsletter />
        <Footer />
      </AppContext>
    </BrowserRouter>
  );
}
export default App;
