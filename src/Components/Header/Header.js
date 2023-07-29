import React from "react";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import { Context } from "../../Utils/Content";
import "./Header.scss";
function Header() {
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className={`mainHeader ${scrolled ? "stickyHeader" : ""}`}>
      <div className="headerContent">
        <ul className="left">
          <li>Home</li>
          <li>About</li>
          <li>Categories</li>
        </ul>
        <div className="center">
          <p>
            PA<span>Jewellers</span>
          </p>
        </div>
        <div className="right">
          <TbSearch />
          <AiOutlineHeart />
          <span className="cartIcon">
            <CgShoppingCart />
            <span>5</span>
          </span>
        </div>
      </div>
    </header>
  );
}
export default Header;
