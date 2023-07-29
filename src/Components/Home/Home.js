import React from "react";
import "./Home.scss";
import Hero from "./Hero/Hero";
import Category from "./Category/Category";
function Home() {
  return (
    <div className="home">
      <Hero />
      <div className="mainContent">
        <div className="layout">
          <Category />
        </div>
      </div>
    </div>
  );
}
export default Home;
