import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import About from "./About/About";
import Header from "./Header/Header";
import ArticlePage from "./ArticlePage/ArticlePage";

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
