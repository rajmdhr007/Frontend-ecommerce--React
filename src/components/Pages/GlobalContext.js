import React, { createContext } from 'react'
export const GlobalContext= createContext()

const GlobalContextProvider = ( props) => {
  return (
    <GlobalContext.Provider value='This is Global Context'>
        {props.children}
    </GlobalContext.Provider>
  )
}

export default GlobalContextProvider