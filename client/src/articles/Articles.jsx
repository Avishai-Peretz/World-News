import React, { useContext, useEffect } from "react";
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
  };
  const data = getLang();
  console.log(article);
  return (
    <div className="article-container">
      <div>
        <h1>{article.name}</h1>
      </div>
      <div>
        <img className="article-img" src={article.img} alt="img" />
      </div>
      <div>
        <h2
          className="title"
          style={{
            whiteSpace: "pre-wrap",
            direction: lang === "he" || lang === "ar" ? "rtl" : "ltr",
          }}
        >
          {data.title}
        </h2>
      </div>
      <div>
        <p
          style={{
            whiteSpace: "pre-wrap",
            direction: lang === "he" || lang === "ar" ? "rtl" : "ltr",
          }}
        >
          {data.description}
        </p>
      </div>
    </div>
  );
};

export default Article;
