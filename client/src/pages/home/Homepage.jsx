import React, { useContext, useEffect } from "react";
import Article from "./articles/Articles.jsx";
import { Link } from "react-router-dom";
import { myContext } from "../../context/language.js";
import { Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/splide/css/sea-green';
import "./homepage.css";

const Homepage = () => {
  
  const { sixTopArticles, lang } = useContext(myContext);
  
  const getSixTopArticles = localStorage.getItem("localArticles") ? JSON.parse(localStorage.getItem("localArticles")) : sixTopArticles;
  console.log("sixTopArticles: " + sixTopArticles)
    
  useEffect(() => {
  }, [lang]);

  
  return (
    <div className="page">
      <div className="articles-container">
    <div>          
        <Splide
          options={{
          rewind: true,
          width: "100vw",
          height: "70vh",
          gap   : '3rem',
          type: 'loop',
          padding: '0rem',
          perPage: 3,
          // perMove: 3,
          focus  : 'start',
          arrow: "splide__arrows arrows-c",
          wheel: true,
        } }
        >
          {
            getSixTopArticles
            ?
            getSixTopArticles.map((article, index) => {
              if (index !== 0 )
                {const topArticle = article;
                  return (
                    <SplideSlide key={"slide" + topArticle._id}>
                      <Link key={"link" + topArticle._id} to={`/article/${topArticle._id}`} className="article-link" style={{ textDecoration: 'none' }}>
                        <Article
                          key={topArticle._id}
                          lang={lang}
                          article={topArticle}
                        />
                      </Link>
                    </SplideSlide>
                  );} else return false
            })
            :
            <div className="loader-container"><div className="loader"></div></div>
          }
        </Splide>
        </div>
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
