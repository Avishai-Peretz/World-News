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
  
  useEffect(() => {
  }, [lang]);

  
  return (
    <div className="page">
      <div className="articles-container">
    <div>          
        <Splide
          options={{
          rewind: false,
          width: "60vw",
          height: "70vh",
          gap   : '3rem',
          type: 'slide',
          padding: '0rem',
          perPage: 1,
          perMove: 1,
          focus  : 1,
          arrow: "splide__arrows arrows-c",
          wheel: true,
          speed: 100,
        } }
        >
          {
            getSixTopArticles
            ?
            getSixTopArticles.map((article, index) => {
              if (index !== 0 && article.name === "ynet")
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
    <div>          
        <Splide
          options={{
          rewind: false,
          width: "60vw",
          height: "70vh",
          gap   : '3rem',
          type: 'slide',
          padding: '0rem',
          perPage: 1,
          perMove: 1,
          focus  : 1,
          arrow: "splide__arrows arrows-c",
          wheel: true,
          speed: 100,
        } }
        >
          {
            getSixTopArticles
            ?
            getSixTopArticles.map((article, index) => {
              if (index !== 0 && article.name === "panet" )
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
    <div>          
        <Splide
          options={{
          rewind: false,
          width: "60vw",
          height: "70vh",
          gap   : '3rem',
          type: 'slide',
          padding: '0rem',
          perPage: 1,
          perMove: 1,
          focus  : 1,
          arrow: "splide__arrows arrows-c",
          wheel: true,
          speed: 100,
        } }
        >
          {
            getSixTopArticles
            ?
            getSixTopArticles.map((article, index) => {
              if (index !== 0 && article.name === "moscowtimes" )
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
    <div>          
        <Splide
          options={{
          rewind: false,
          width: "60vw",
          height: "70vh",
          gap   : '3rem',
          type: 'slide',
          padding: '0rem',
          perPage: 1,
          perMove: 1,
          focus  : 1,
          arrow: "splide__arrows arrows-c",
          wheel: true,
          speed: 100,
        } }
        >
          {
            getSixTopArticles
            ?
            getSixTopArticles.map((article, index) => {
              if (index !== 0 && article.name === "albayan" )
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
    <div>          
        <Splide
          options={{
          rewind: false,
          width: "60vw",
          height: "70vh",
          gap   : '3rem',
          type: 'slide',
          padding: '0rem',
          perPage: 1,
          perMove: 1,
          focus  : 1,
          arrow: "splide__arrows arrows-c",
          wheel: true,
          speed: 100,
        } }
        >
          {
            getSixTopArticles
            ?
            getSixTopArticles.map((article, index) => {
              if (index !== 0 && article.name === "dw" )
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
    <div>          
        <Splide
          options={{
          rewind: false,
          width: "60vw",
          height: "70vh",
          gap   : '3rem',
          type: 'slide',
          padding: '0rem',
          perPage: 1,
          perMove: 1,
          focus  : 1,
          arrow: "splide__arrows arrows-c",
          wheel: true,
          speed: 100,
        } }
        >
          {
            getSixTopArticles
            ?
            getSixTopArticles.map((article, index) => {
              if (index !== 0 && article.name === "jansatta" )
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
              if (index !== 0 && article.name === "moscowtimes" )
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
