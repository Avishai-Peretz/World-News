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
  
  const { setTopArticles, URI, sixTopArticles, lang, refreshLocal, saveToContext } = useContext(myContext);
  
  const topArticles = async () => {
    console.log("topArticles start")
    const getLocalArticles =async () => {
      const local =localStorage.getItem('localArticles')? JSON.parse(localStorage.getItem('localArticles')) : [];
      console.log("sadasd",local)
      if (!local || local.length < 7) {
        console.log("true")
        return true
      }
      if (local && ((new Date()).getTime() - (new Date(local[0].localUpdateTime)).getTime()) / 60000 > 10) {
        console.log("true")
        return true
      }
      else {
        console.log("false")
        return false;
      }
    };
    if ( getLocalArticles() ) {
      // await refreshLocal()
    }
    setTopArticles(saveToContext());
  };

  useEffect(() => {topArticles()},[lang]);


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
