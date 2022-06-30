import React, { useRef, useContext, useEffect } from "react";
import { myContext } from "../../context/language.js";
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
  const handleLanguage = (event) => {
    setLang(event.target.name);
  };
  const getLang = () => {
    let title = "";
    let newsLink = "";
    let aboutLink = "";
    if (lang === "he") {
        title = "חדשות העולם";
        newsLink = "חדשות עדכניות";
        aboutLink ="קצת עלינו"
      }
    if (lang === "en") {
        title = "WorldWide News";
        aboutLink = "About Us";
        newsLink = "Recent News";
      }
      if (lang === "ru") {
        title = "Новости мира";
        aboutLink = "О нас";
        newsLink = "Последние новости";
    }
    if (lang === "ar") {
        title = "أخبار العالم";
        aboutLink = "قصتنا";
        newsLink = "أخبار حديثة";
      }
    return {newsLink, aboutLink, title};
  };
  const { newsLink, aboutLink, title } = getLang();
  useEffect(() => {
    getLang()
  });

  return (
    <>
    <nav className="header-continer">
      <ul ref={navRef}>
        <li>
          <Link to="/" style={{ textDecoration: 'none' }}>{newsLink}</Link>
        </li>
        <li>
          <Link to="/about" style={{ textDecoration: 'none' }}>{aboutLink}</Link>
        </li>


        <button onClick={showNavBar} className="nav-btn nav-close-btn"></button>
      </ul>
      <Link to="/" className="main-link" ><h1>{title}</h1></Link>
      <span>
        <button className="lang-btn" onClick={handleLanguage} name="en"></button>
        <button className="lang-btn" onClick={handleLanguage} name="he"></button>
        <button className="lang-btn" onClick={handleLanguage} name="ru"></button>
        <button className="lang-btn" onClick={handleLanguage} name="ar"></button>
      </span>

      <button onClick={showNavBar} className="nav-btn"></button>
      </nav>
      <div>
        <Link to="/about" className="link-display" style={{ textDecoration: 'none' }}>{aboutLink}</Link>
        <div className="copyright">© Copyright AppleSeeds || jun 2022</div>
      </div>
      </>
  );
};

export default Header;
