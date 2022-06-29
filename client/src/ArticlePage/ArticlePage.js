import React, { useEffect, useContext } from "react";
import ContextProvider from "../context/language.js";
import { myContext } from "../context/language.js";
import Page from './Page.js';



export default function ArticlePage() {

    return (
        <ContextProvider>
            <Page />
        </ContextProvider>
        );
}
