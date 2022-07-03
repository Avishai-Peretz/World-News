import React, { useContext, useEffect } from "react";
import axios from "axios";
import Article from "./articles/Articles.jsx";
import { Link } from "react-router-dom";
import { myContext } from "../../context/language.js";
import "./homepage.css";
import { Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const Homepage = () => {
  
  const { setTopArticles, sixTopArticles, URI, lang } = useContext(myContext);
  
  const topArticles = async () => {
    localStorage.removeItem("sixTopArticles");
    const articles = await axios.get(`${URI}`);
    const topSix = JSON.stringify(articles.data)
    localStorage.setItem("sixTopArticles", topSix);
    setTopArticles(articles.data);
  };
  
  useEffect(() => {
    topArticles();
  }, []);

  const getSixTopArticles = localStorage.getItem("sixTopArticles") ? JSON.parse(localStorage.getItem("sixTopArticles")) : sixTopArticles; 
  
  return (
    <div className="page">
      <div className="articles-container">
        <Splide
        options={ {
          rewind: true,
          width: "95vw",
          gap   : '1rem',
          type   : 'loop',
          perPage: 3,
          focus  : 'center',
          arrow: "splide__arrows arrows-c",
          wheel: true,
        } }
        >
        {getSixTopArticles
          ? getSixTopArticles.map((article) => {
              const topArticle = article;
              return (
                  <SplideSlide>
                  <Link key={"link" + topArticle._id} to={`/article/${article._id}`} className="article-link" style={{ textDecoration: 'none' }}>
                    <Article
                      key={topArticle._id}
                      lang={lang}
                      article={topArticle}
                      />
                  </Link>
                    </SplideSlide>
              );
            })
            : <div className="loader-container"><div className="loader"></div></div>}
            </Splide>
      </div>
      <div className="articles-container-mobile">
        {getSixTopArticles
          ? getSixTopArticles.map((article) => {
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
            : <div className="loader-container"><div className="loader"></div></div>
            }
      </div>
    </div>
  );
};

export default Homepage;
