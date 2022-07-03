import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";
import "./App.css";
import About from "./pages/About/About.js";
import Header from "./pages/Header/Header.js";
import ArticlePage from "./pages/ArticlePage/ArticlePage.js";
import ContextProvider from "./context/language.js";
import Homepage from "./pages/home/Homepage";

function App() {
  
  return (
    <ContextProvider>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/about" exact component={About} />
          <Route path="/article/:id" exact component={ArticlePage} />
        </Switch>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
