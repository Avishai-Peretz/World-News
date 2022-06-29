import React, { Component } from "react";
import "./articles.css"; 

const Article = ({ article, lang }) => {
  const getLang = () => {
    let data = "";
    if (lang === "he") {
      data = article.he;
    }
    if (lang === "en") {
      data = article.en;
    }
    if (lang === "ru") {
      data = article.ru;
    }
    if (lang === "ar") {
      data = article.ar;
    }
    return data;
  }
  const data = getLang();
console.log(article);  
    return (
      <div className="data = getLang();data = getLang();">
        <h1>{article.name}</h1>
        <img className="logo" src={article.img} alt="img" />
        <h2 className="title">
          {data.title}
        </h2>
        <p>
          {data.description}
        </p>
      </div>
    );
  
}

export default Article;
