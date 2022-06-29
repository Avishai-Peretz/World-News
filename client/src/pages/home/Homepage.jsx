import React, { useState, useContext } from "react";
import Article from "../../articles/Articles.jsx";
import { myContext } from "../../context/language.js";
import "./homepage.css";

const Homepage = ({ sixTopArticles }) => {
  const { lang, setLang } = useContext(myContext);

  const handleLanguage = (event) => {
    setLang(event.target.name);
  };
  return (
    <div className="page">
      <h1>WorldWide News</h1>

      <div className="articles-container">
        {sixTopArticles
          ? sixTopArticles.map((article) => {
              const topArticle = article;
              return (
                <Article
                  key={topArticle._id}
                  lang={lang}
                  article={topArticle}
                />
              );
            })
          : "none"}
      </div>
    </div>
  );
};

export default Homepage;
