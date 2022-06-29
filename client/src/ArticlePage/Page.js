import React, {useContext, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { myContext } from "../context/language.js";

export default function Page(props) {
    const { lang, sixTopArticles } = useContext(myContext);
    const {id:articleId} = useParams();
    console.log("---------------------------------------------------------------------------",sixTopArticles);
    const article = sixTopArticles.find(({id}) => id === articleId);
    
    const getLang = () => {
        let data = "";
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
      const data = getLang();
    console.log(article);  

  return (
    <div className="article-container">
    <div>
      <h1>{article.name}</h1>
    </div>
    <div>
      <img className="article-img" src={article.img} alt="img" />
    </div>
    <div>
      <h2 className="title">
        {data.title}
      </h2>
    </div>
    <div>
      <h3>
        {data.description}
      </h3>
    </div>
    <div>
      <p>
        {data.content}
      </p>
    </div>
  </div>
  )
}
