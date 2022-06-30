import React, { useContext, useEffect } from "react";
import axios from "axios";
import "../App.css";
import Homepage from "./home/Homepage.jsx";
import { myContext } from "../context/language.js";

function Main() {
  const { setTopArticles, sixTopArticles, URI } = useContext(myContext);

  const topArticles = async () => {
    const articles = await axios.get(`${URI}`);
    const topSix = JSON.stringify(articles.data)
    localStorage.setItem("sixTopArticles", topSix);
    setTopArticles(articles.data);
  };

  useEffect(() => {
    topArticles();
  });

  return (
    
      <Homepage sixTopArticles={sixTopArticles} />
    
  );
}

export default Main;
