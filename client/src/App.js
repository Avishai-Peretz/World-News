import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./pages/Main.js";
import About from "./About/About.js";
import Header from "./Header/Header.js";
import ArticlePage from "./ArticlePage/ArticlePage.js";

function App() {
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
