import React, { useEffect, useContext } from "react";
import Article from "../../articles/Articles.jsx";
import { Link } from "react-router-dom";

import { myContext } from "../../context/language.js";
import "./homepage.css";

const Homepage = () => {
  const { lang, sixTopArticles } = useContext(myContext);
  
  return (
    <div className="page">
      <h1>WorldWide News</h1>

      <div className="articles-container">
        {sixTopArticles
          ? sixTopArticles.map((article) => {
              const topArticle = article;
              return (
                <Link to={`/article/${article._id}`}>
                  <Article
                    key={topArticle._id}
                    lang={lang}
                    article={topArticle}
                  />
                </Link>
              );
            })
          : "none"}
      </div>
    </div>
  );
};

export default Homepage;
