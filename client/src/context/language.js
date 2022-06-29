import React, {createContext, useState} from 'react'



export const myContext = createContext()

function ContextProvider ({ children }) {
    const [lang, setLang] = useState("he");
  return (
    <myContext.Provider
      value={{ lang, setLang}}
    >
      {children}
    </myContext.Provider>
  )
}

export default ContextProvider;

