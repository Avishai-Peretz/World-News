import React,{ useContext, useEffect} from "react";
import { myContext } from "../../../context/language.js";
import  "../../../media/albayan.png"
import  "../../../media/ynet.png"
import  "../../../media/dw.png"
import  "../../../media/moscowtimes.png"
import "../../../media/panet.png"
import "./articles.css";


const Article = ({ article }) => {
  const { lang } = useContext(myContext);
  const getLang = () => {
    let data = "";
    if (lang === "he") {
      data={ lang: article.he,
      created: " :נוצר בתאריך"
    };
    }
    if (lang === "en") {
      data={ lang: article.en,
      created: "Created at: "
    };
    }
    if (lang === "ru") {
      data={ lang: article.ru,
      created: "Создано на: "
    };
    }
    if (lang === "ar") {
      data={ lang: article.ar,
      created: " :تم إنشاؤها على"
    };
    }
    return data;
  };
  const day = `${new Date(article.createdAt)}`;
  const data = getLang();
  useEffect(() => {
  }, [lang]);

  const checkLang = (lang) => { if (lang === "he" || lang ===  "ar" ) { return day + data.created } else { return data.created + day } }
  
  return (
    <>
      <div className="article-container">
        <div className="website-img-container">
          <div className="created-at">{checkLang(lang)}</div>
          <div className="home-website-img" article-name={article.name}></div>
        </div>
      <div>
        <img className="article-img" src={article.img} alt="img" />
      </div>
      <div>
        <h3
          className="title"
          style={{
            whiteSpace: "pre-wrap",
            direction: lang === "he" || lang === "ar" ? "rtl" : "ltr",
          }}
        >
          {data.lang.title}
        </h3>
      </div>
    </div>
      <div className="article-container-mobile">       
        <div className="website-img-container">
          <div className="website-img" article-name={article.name}></div>
        </div>
        <img className="article-img" src={article.img} alt="img" />      
        <div>
          <h2
            className="title"
            style={{
              whiteSpace: "pre-wrap",
              direction: lang === "he" || lang === "ar" ? "rtl" : "ltr",
            }}
          >
            {data.lang.title}
          </h2>
        </div>
        </div>
    </>
  );
};

export default Article;
