import { createContext, useContext, useState } from "react";

export const searchContext = createContext('')

export const SearchProvider = ({children}) => {

  const [ search, setSearch ] = useState('');
  
  function handleSearch(event){
     setSearch(event.target.value)
  }

  return (
    <searchContext.Provider value={{search, handleSearch}}>
      {children}  
    </searchContext.Provider>
  )
}

export function useSearch(){
  const context = useContext(searchContext)
  return context
}


