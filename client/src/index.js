import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import ContextProvider from "./context/language.js";

const root = ReactDOM.createRoot(document.getElementById("root"));



// const { setTopArticles, URI } = useContext(myContext);
// const topArticles = async () => {
//     localStorage.removeItem("sixTopArticles");
//     const articles = await axios.get(`${URI}`);
//     const topSix = JSON.stringify(articles.data)
//     localStorage.setItem("sixTopArticles", topSix);
//     setTopArticles(articles.data);
// };
// topArticles();


root.render(
  <React.StrictMode>
    <ContextProvider>  
      <App />
    </ContextProvider>
  </React.StrictMode>
);
