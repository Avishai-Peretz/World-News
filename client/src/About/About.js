import "./About.css";
import Logos from "../Logos/Logos.js";
import { useState } from "react";
const MainPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const wait = () => {
    setTimeout(() => {
      return <div>hola</div>;
    }, 1000);
  };
  return isLoading ? (
    <div className="spinner">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  ) : (
    <div className="main-container">
      <div className="logos-container">
        {/* <Logos logoName1="Ynet" logoName2="Albayan" logoName3="Panet" /> */}
      </div>
      <div className="content">
        <div class="intro"></div>
        <div class="aboutUs"></div>
      </div>
      <div className="logos-container">
        {/* <Logos logoName1="Themoscowtimes" logoName2="Jansatta" logoName3="ue" /> */}
      </div>
    </div>
  );
};

export default MainPage;
