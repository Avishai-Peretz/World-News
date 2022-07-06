import React, { useContext, useEffect } from "react";
import Article from "./articles/Articles.jsx";
import { Link } from "react-router-dom";
import { myContext } from "../../context/language.js";
import '@splidejs/splide/css/sea-green';
import "./homepage.css";

const Homepage = () => {
  
  const { sixTopArticles, lang } = useContext(myContext);
 
  const getSixTopArticles = localStorage.getItem("localArticles") ? JSON.parse(localStorage.getItem("localArticles")) : sixTopArticles;
  
  useEffect(() => {
  }, [lang]);

  
  return (
    <div className="page">
      <div className="articles-container">
          {
            getSixTopArticles
            ?
            getSixTopArticles.map((article, index) => {
              if (index !== 0 )
                {const topArticle = article;
                  return ( 
                      <Link key={"link" + topArticle._id} to={`/article/${topArticle._id}`} className="article-link" style={{ textDecoration: 'none' }}>
                        <Article
                          key={topArticle._id}
                          lang={lang}
                          article={topArticle}
                        />
                      </Link>
                  );} else return false
            })
            :
            <div className="loader-container"><div className="loader"></div></div>
          }
      </div>
      <div className="articles-container-mobile">
      {
            getSixTopArticles
            ?
            getSixTopArticles.map((article, index) => {
              if (index !== 0 )
                {const topArticle = article;
                  return (
                      <Link key={"link" + topArticle._id} to={`/article/${topArticle._id}`} className="article-link" style={{ textDecoration: 'none' }}>
                        <Article
                          key={topArticle._id}
                          lang={lang}
                          article={topArticle}
                        />
                      </Link>
                ) 
              }else return false
            })
            :
            <div className="loader-container"><div className="loader"></div></div>
          }
      </div>
    </div>
  );
};

export default Homepage;
