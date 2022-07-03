import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { useContext, useEffect } from "react";
import axios from "axios";
import About from "./pages/About/About.js";
import Header from "./pages/Header/Header.js";
import ArticlePage from "./pages/ArticlePage/ArticlePage.js";
import Homepage from "./pages/home/Homepage";
import { myContext } from "./context/language.js";
import "./App.css";

function App() {
  
  const { setTopArticles, URI, sixTopArticles, lang } = useContext(myContext);
  
  const saveToContext = () => {
    const getLocalArticles = JSON.parse(localStorage.getItem('localArticles'));
    const articlesList = getLocalArticles.slice(1)
    return articlesList
  };

  const topArticles = async () => {
    const getLocalArticles = localStorage.getItem('localArticles') ? JSON.parse(localStorage.getItem('localArticles')) : false;
    if ( !getLocalArticles || ((new Date()).getTime() - (new Date(getLocalArticles[0].localUpdateTime)).getTime())/ 60000 > 20) {
      localStorage.removeItem('localArticles');
      const articles = await axios.get(`${URI}`);
      const localArticles = JSON.stringify([{ localUpdateTime: new Date() }, ...articles.data]);
      localStorage.setItem("localArticles", localArticles);
    }
    setTopArticles(saveToContext());
  };

  useEffect(() => {
    topArticles()
  }, [,lang]);


  return (
      <BrowserRouter>
        <Header />
        <Switch>
        
          <Route path="/" exact component={Homepage}  />
          <Route path="/about" exact component={About} />
          <Route path="/article/:id" exact ><ArticlePage sixTopArticles={sixTopArticles}  /></Route>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
