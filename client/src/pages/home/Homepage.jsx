import React, { useContext } from "react";
import Article from "./articles/Articles.jsx";
import { Link } from "react-router-dom";
import { myContext } from "../../context/language.js";
import "./homepage.css";

const Homepage = () => {
  const { lang, sixTopArticles } = useContext(myContext);

  return (
    <div className="page">
      <div className="articles-container">
        {sixTopArticles
          ? sixTopArticles.map((article) => {
              const topArticle = article;
              return (
                <Link key={"link" + topArticle._id} to={`/article/${article._id}`} className="article-link" style={{ textDecoration: 'none' }}>
                  <Article
                    key={topArticle._id}
                    lang={lang}
                    article={topArticle}
                  />
                </Link>
              );
            })
          : <div className="loader-container"><div class="loader"></div></div>}
      </div>
    </div>
  );
};

export default Homepage;
