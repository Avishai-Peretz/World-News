import React, {useContext, useEffect} from 'react'
import { myContext } from "../context/language.js";

export default function ArticlePage(props) {
    const { lang, sixTopArticles } = useContext(myContext);
    const articleId = props.match.params.id
    const article = sixTopArticles.findOne({_id: articleId});
    console.log("---------------------------------------------------------------------------",articleId);
    
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
        );
}
