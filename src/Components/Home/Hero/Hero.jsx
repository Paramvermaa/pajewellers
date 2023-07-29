import React from "react";
import bannerImg from "../../../Assets/My project.png";
import "./Hero.scss";
function Hero() {
  return (
    <div className="heroBanner">
      <div className="content">
        <div className="textContent">
          <h1>SALES</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo qui
            obcaecati, porro facere doloribus repellendus illo vel dicta
            delectus eaque iure repudiandae. Nesciunt obcaecati consectetur esse
            aspernatur? Error, vel facilis.
          </p>
          <div className="ctas">
            <div className="bannerCta">Read More</div>
            <div className="bannerCta v2">Shop Now</div>
          </div>
        </div>
        <img className="bannerImg" src={bannerImg} alt="" />
      </div>
    </div>
  );
}
export default Hero;
