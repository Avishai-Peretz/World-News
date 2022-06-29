import React, { useEffect, useContext } from "react";
import axios from "axios";
import ContextProvider from "../context/language.js";
import { myContext } from "../context/language.js";
import Page from './Page.js';



export default function ArticlePage() {
    const { setTopArticles, URI } = useContext(myContext);

  const topArticles = async () => {
    const articles = await axios.get(`${URI}`);
    setTopArticles(articles.data);
  };

  useEffect(() => {
    topArticles();
  });
    return (
        <ContextProvider>
            <Page />
        </ContextProvider>
        );
}
