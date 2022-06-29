import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Homepage from "./home/Homepage.jsx";
import ContextProvider from "../context/language.js";

const URI = (() => {
  if (process.env.NODE_ENV === "production") {
    return "/api";
  } else {
    return "http://localhost:5050/api";
  }
})();

function Main() {

  const [sixTopArticles, setTopArticles] = useState();
  const topArticles = async () => {
    const articles = await axios.get(`${URI}`);
    setTopArticles(articles.data);
  };

  useEffect(() => {
    topArticles();
  }, []);
console.log(sixTopArticles)

  return (
    <ContextProvider>
      <Homepage sixTopArticles={sixTopArticles} />
    </ContextProvider>
  );
}

export default Main;
