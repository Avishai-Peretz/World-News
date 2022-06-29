import React, { useRef, useContext } from "react";
import { myContext } from "../context/language.js";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  const { lang, setLang } = useContext(myContext);

  const { navToggle, setNavToggle } = false;
  const navRef = useRef();
  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
    setNavToggle(!navToggle);
  };
  const showLinks = () => {
    navRef.current.classList.toggle("responsive_nav");
    setNavToggle(!navToggle);
  };
  const handleLanguage = (event) => {
    setLang(event.target.name);
  };

  return (
    <nav className="header-continer">
      <ul ref={navRef}>
        <li>
          <Link to="/">Main</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          {/* <span className="languages"> */}
          <button onClick={handleLanguage} name="en">
            english
          </button>
          <button onClick={handleLanguage} name="he">
            hebrew
          </button>
          <button onClick={handleLanguage} name="ru">
            russian
          </button>
          <button onClick={handleLanguage} name="ar">
            arabic
          </button>
          {/* </span> */}
        </li>

        <button onClick={showNavBar} className="nav-btn nav-close-btn"></button>
      </ul>

      <button onClick={showNavBar} className="nav-btn"></button>
    </nav>
  );
};

export default Header;
