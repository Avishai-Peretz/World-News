import React, { createContext, useState } from 'react'
import axios from 'axios';
export const myContext = createContext()

function ContextProvider({ children }) {
  const URI = (() => {
    if (process.env.NODE_ENV === "production") {
      return "/api";
    } else {
      return "http://localhost:5050/api";
    }
  })();
  const refreshLocal = async () => {
    localStorage.removeItem('localArticles')
    const articles = await axios.get(`${URI}`);
    const localArticles = JSON.stringify([{ localUpdateTime: new Date() }, ...articles.data]);
    localStorage.setItem("localArticles", localArticles);
  }
  const saveToContext = () => {
    const getLocalArticles = JSON.parse(localStorage.getItem('localArticles'));
    const articlesList = getLocalArticles.slice(1)
    return articlesList
  };
  
  const [lang, setLang] = useState("he");
  const [sixTopArticles, setTopArticles] = useState([]);
  

  return (
    <myContext.Provider
      value={{ lang, setLang, sixTopArticles, setTopArticles, URI, refreshLocal, saveToContext}}
    >
      {children}
    </myContext.Provider>
  )
}

export default ContextProvider;

