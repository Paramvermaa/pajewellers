import React from "react";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../Assets/payments.png";
import "./Footer.scss";
function Footer() {
  return (
    <footer className="footer">
      <div className="footerContent">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
            laudantium reiciendis aliquam expedita saepe dolorem unde cumque
            sapiente laborum voluptatem.
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="cItem">
            <FaLocationArrow />
            <div className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
              iusto! Facilis iste nostrum atque architecto.
            </div>
          </div>
          <div className="cItem">
            <FaMobileAlt />
            <div className="text">Phone: XXX XXX XXXX</div>
          </div>
          <div className="cItem">
            <FaEnvelope />
            <div className="text">Email: xxx@example.com</div>
          </div>
        </div>
        <div className="col">
          <div className="title">Categories</div>
          <span className="text">Rings</span>
          <span className="text">Pendants</span>
          <span className="text">Necklace</span>
          <span className="text">Ear Rings</span>
          <span className="text">Tops</span>
          <span className="text">Bangles</span>
        </div>
        <div className="col">
          <div className="title">Pages</div>
          <span className="text">Home</span>
          <span className="text">About</span>
          <span className="text">Privacy Policy</span>
          <span className="text">Returns</span>
          <span className="text">Terms & Conditions</span>
          <span className="text">Contact Us</span>
        </div>
      </div>
      <div className="bottomBar">
        <div className="bottomBarContent">
          <div className="text">
            PAJewellers 2023 CREATED BY PAJewellers PREMIUM JEWELLERY STORES.
          </div>
          <img src={Payment} alt="" />
        </div>
      </div>
    </footer>
  );
}
export default Footer;
