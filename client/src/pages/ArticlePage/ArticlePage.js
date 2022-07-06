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
    const getLocalArticles =localStorage.getItem('localArticles') ? JSON.parse(localStorage.getItem('localArticles')).slice(1): false; 
    const articlePage = getLocalArticles ? getLocalArticles.find(({ _id }) => _id === articleId) : false;
    getLocalArticles ? setArticle(articlePage) : fetchArticle();
  };

  const getLang = () => {
    let data = "";
    if (article) {
      if (lang === "he") {
        data ={
          lang: article.he,
          button : "לחץ לכתבה המקורית",
        } 
      }
      if (lang === "en") {
        data ={
          lang: article.en,
          button: "Click here for the original article",
        } 
      }
      if (lang === "ru") {
        data ={
          lang: article.ru,
          button: "Нажмите здесь для просмотра оригинальной статьи",
        } 
      }
      if (lang === "ar") {
        data ={
          lang: article.ar,
          button: "انقر هنا للحصول على المادة الأصلية",
        } 
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
            <a href={article.url} className="original-link" ><button href={article.url} className="btn">{data.button}</button> </a>
          </div>
          <div>
            <img className="article-page-img" src={article.img} alt="img" />
          </div>
          <div>
            <h2 className="title">{data.lang.title}</h2>
          </div>
          <div>
            <h3>{data.lang.description}</h3>
          </div>
          <div>
            <p
              style={{
                whiteSpace: "pre-wrap",
                direction: lang === "he" || lang === "ar" ? "rtl" : "ltr",
              }}
            >
              {data.lang.content}
            </p>
          </div>
        </div>
      </div>
    );
  } else return <div className="loader-container"><div className="loader"></div></div>;
}
