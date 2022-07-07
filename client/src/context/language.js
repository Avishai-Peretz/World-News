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

  
  const [lang, setLang] = useState("he");
  const [sixTopArticles, setTopArticles] = useState([]);
  

  return (
    <myContext.Provider
      value={{ lang, setLang, sixTopArticles, setTopArticles, URI }}
    >
      {children}
    </myContext.Provider>
  )
}

export default ContextProvider;

