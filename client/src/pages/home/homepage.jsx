import React, { Component } from "react";
import Article from "../../articles/Articles.jsx";
import "./homepage.css";

class Homepage extends Component {
  sixTopArticles = this.props.sixTopArticles;
  render() {
    return (
      <div className="page">
        <h1>WorldWide News</h1>
        <span className="languges">
          <ul>
            <li id="he"></li>
            <li id="ru"></li>
            <li id="ar"></li>
            <li id="en"></li>
          </ul>
        </span>

        <Article sixTopArticles={this.sixTopArticles} />
      </div>
    );
  }
}

export default Homepage;

