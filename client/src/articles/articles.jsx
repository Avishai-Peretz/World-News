import React, { Component } from "react";

class Article extends Component {
  render() {
    return (
      <div className="articleContainer">
        <img className="logo" src="https://play-lh.googleusercontent.com/aFWiT2lTa9CYBpyPjfgfNHd0r5puwKRGj2rHpdPTNrz2N9LXgN_MbLjePd1OTc0E8Rl1" alt="img" />
        <h2 className="title">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima eius
          </h2>
        <img className="articleImg" src="https://play-lh.googleusercontent.com/aFWiT2lTa9CYBpyPjfgfNHd0r5puwKRGj2rHpdPTNrz2N9LXgN_MbLjePd1OTc0E8Rl1" alt="img" />
      </div>
    );
  }
}

export default Article;
