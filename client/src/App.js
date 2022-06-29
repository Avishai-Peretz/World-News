import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Homepage from "./pages/home/Homepage.jsx";

const URI = (() => {
  if (process.env.NODE_ENV === "production") {
    return "/api";
  } else {
    return "http://localhost:5050/api";
  }
})();

function App() {

  const [sixTopArticles, setTopArticles] = useState();
  const topArticles = async () => {
    const articles = await axios.get(`${URI}`);
    setTopArticles(articles.data);
  };

  useEffect(() => {
    topArticles();
  }, []);


  return (
    <Homepage sixTopArticles={sixTopArticles} />
  );
}

export default App;
