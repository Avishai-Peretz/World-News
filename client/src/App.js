import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { useEffect, useContext } from "react";
import axios from "axios";
import Main from "./pages/Main.js";
import About from "./About/About.js";
import Header from "./Header/Header.js";
import ArticlePage from "./ArticlePage/ArticlePage.js";
import { myContext } from "./context/language.js";


function App() {
  const { setTopArticles, URI } = useContext(myContext);

  const topArticles = async () => {
    const articles = await axios.get(`${URI}`);
    setTopArticles(articles.data);
  };

  useEffect(() => {
    topArticles();
  }, []);

  return (
    <BrowserRouter forceRefresh={true}>
      <Header />

      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/about" exact component={About} />
        <Route path="/article/:id" exact component={ArticlePage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
