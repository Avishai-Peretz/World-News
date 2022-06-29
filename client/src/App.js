import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";
import "./App.css";
import Main from "./pages/Main.js";
import About from "./About/About.js";
import Header from "./Header/Header.js";
import ArticlePage from "./ArticlePage/ArticlePage.js";
import ContextProvider from "./context/language.js";

function App() {
  // const { setTopArticles, URI } = useContext(myContext);

  // const topArticles = async () => {
  //   const articles = await axios.get(`${URI}`);
  //   setTopArticles(articles.data);
  // };

  // useEffect(() => {
  //   topArticles();
  // }, []);

  return (
    <ContextProvider>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/about" exact component={About} />
          <Route path="/article/:id" exact component={ArticlePage} />
        </Switch>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
