import React from "react";
import "./Logos.css";

const Logos = ({ logoName1, logoName2, logoName3 }) => {
  return (
    <div className="logos-container">
      <div className={`img ${logoName1}`}></div>
      <div className={`img ${logoName2}`}></div>
      <div className={`img ${logoName3}`}></div>
    </div>
  );
};
export default Logos;
