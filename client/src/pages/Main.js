import React, { useContext, useEffect } from "react";
import axios from "axios";
import "../App.css";
import Homepage from "./home/Homepage.jsx";
import { myContext } from "../context/language.js";

function Main() {
  const { setTopArticles, sixTopArticles, URI } = useContext(myContext);

  const topArticles = async () => {
    const articles = await axios.get(`${URI}`);
    setTopArticles(articles.data);
  };

  useEffect(() => {
    topArticles();
  }, []);
  console.log(sixTopArticles);

  return (
    
      <Homepage sixTopArticles={sixTopArticles} />
    
  );
}

export default Main;
