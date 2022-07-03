import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { myContext } from "../../context/language.js";
import "./ArticlePage.css";

export default function ArticlePage({ sixTopArticles }) {
  
  const { lang, URI } = useContext(myContext);
  const { id: articleId } = useParams();

  const [article, setArticle] = useState();
  
  const topArticles = async () => {
    const fetchArticle = async () =>{
      const articles = await axios.get(`${URI}`);
      const articlePage = articles
      ? articles.data.find(({ _id }) => _id === articleId)
      : null;
      setArticle(articlePage);
    }
    const getLocalArticles = JSON.parse(localStorage.getItem('localArticles')).slice(1); 
    const articlePage = getLocalArticles ? getLocalArticles.find(({ _id }) => _id === articleId) : null;
    getLocalArticles ? setArticle(articlePage) : fetchArticle();
  };

  const getLang = () => {
    let data = "";
    if (article) {
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
  };
  const data = getLang();

  useEffect(() => {
    topArticles()
   },[lang])

  if (article) {
    return (
      <div className="article-page-container">
        <div className="content-container">
          <div>
            <div article-name={article.name}></div>
          </div>
          <div>
            <img className="article-page-img" src={article.img} alt="img" />
          </div>
          <div>
            <h2 className="title">{data.title}</h2>
          </div>
          <div>
            <h3>{data.description}</h3>
          </div>
          <div>
            <p
              style={{
                whiteSpace: "pre-wrap",
                direction: lang === "he" || lang === "ar" ? "rtl" : "ltr",
              }}
            >
              {data.content}
            </p>
          </div>
        </div>
      </div>
    );
  } else return <div className="loader-container"><div className="loader"></div></div>;
}
