import React, { Component } from "react";
import "./homepage.css";

class Homepage extends Component {
  render() {
    return (
      <div className="page">
        <h1>WorldWide News</h1>
        <span className="languges">
          <ul>
            <li id="he" img></li>
            <li id="ru"></li>
            <li id="ar"></li>
            <li id="en"></li>
          </ul>
        </span>
      </div>
    );
  }
}

export default Homepage;

