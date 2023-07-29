import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import "./Newsletter.scss";
function Newsletter() {
  return (
    <div className="newsletterSection">
      <div className="newsletterContent">
        <span className="smallText">Newsletter</span>
        <span className="bigText">Sign up for latest updates and offers</span>
        <div className="form">
          <input type="text" className="" placeholder="Email Address" />
          <button>Subscribe</button>
        </div>
        <div className="text">
          Will be used in accordance with our privacy policy
        </div>
        <div className="socialIcons">
          <div className="icon">
            <FaFacebookF size={14} />
          </div>
          <div className="icon">
            <FaInstagram size={14} />
          </div>
          <div className="icon">
            <FaLinkedin size={14} />
          </div>
          <div className="icon">
            <FaTwitter size={14} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Newsletter;
