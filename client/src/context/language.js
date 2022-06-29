import React, { createContext, useState, useEffect } from 'react'
import axios from "axios";

const URI = (() => {
  if (process.env.NODE_ENV === "production") {
    return "/api";
  } else {
    return "http://localhost:5050/api";
  }
})();


export const myContext = createContext()

function ContextProvider ({ children }) {
  
  const [lang, setLang] = useState("he");
  const [sixTopArticles, setTopArticles] = useState();
  const topArticles = async () => {
    const articles = await axios.get(`${URI}`);
    setTopArticles(articles.data);
  };
  useEffect(() => {
    topArticles();
  }, []);

  return (
    <myContext.Provider
      value={{ lang, setLang, sixTopArticles, setTopArticles, topArticles}}
    >
      {children}
    </myContext.Provider>
  )
}

export default ContextProvider;

