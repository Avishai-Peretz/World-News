import React, { useContext, useEffect } from "react";
import Article from "./articles/Articles.jsx";
import { Link } from "react-router-dom";
import { myContext } from "../../context/language.js";
import '@splidejs/splide/css/sea-green';
import "./homepage.css";

const Homepage = () => {
  
  const { sixTopArticles, lang } = useContext(myContext);
 
  const getSixTopArticles = localStorage.getItem("localArticles") ? JSON.parse(localStorage.getItem("localArticles")) : sixTopArticles;
  console.log(getSixTopArticles);
  const articlesListByDate = () => {
    const articleByDate1 = [];
    for (let i = getSixTopArticles.length - 1 ; i > 0 ; i--){                            
      articleByDate1.push(getSixTopArticles[i]);                
    }
    return articleByDate1;
  }
  const articlesByDate = articlesListByDate(); 

  useEffect(() => {
  }, [lang]);

  
  return (
    <div className="page">
      <div className="articles-container">
      {
        getSixTopArticles.length > 0 
            ?
            articlesByDate.map((article) =>                       
                {const topArticle = article;
                  return (
                      <Link key={"link" + topArticle._id} to={`/article/${topArticle._id}`} className="article-link" style={{ textDecoration: 'none' }}>
                        <Article
                          key={topArticle._id}
                          lang={lang}
                          article={topArticle}
                        />
                      </Link>
              )})
            :
            <div className="loader-container"><div className="loader"></div></div>
          }
      </div>
      <div className="articles-container-mobile">
      {
        getSixTopArticles.length > 0 
            ?
            articlesByDate.map((article) =>                       
              {
                const topArticle = article;
                return (
                  <Link
                    key={"link" + topArticle._id}
                    to={`/article/${topArticle._id}`}
                    className="article-link"
                    style={{ textDecoration: 'none' }}
                  >
                      <Article
                        key={topArticle._id}
                        lang={lang}
                        article={topArticle}
                      />
                    </Link>
                  )
              }
            )
            :
            <div className="loader-container"><div className="loader"></div></div>
          }
      </div>
    </div>
  );
};

export default Homepage;
