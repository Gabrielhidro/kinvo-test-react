import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const searchContext = createContext('')

export const SearchProvider = ({children}) => {

  const [ search, setSearch ] = useState('');
  const [ order, setOrder ] = useState('a');
  const [ data, setData ] = useState([])
  
  useEffect(() => {
    axios.get(`https://60b6ad6f17d1dc0017b882fd.mockapi.io/mock/getFixedIncomeClassData`)
    .then(response => {
      const snapshotDatas = response.data.data.snapshotByProduct;
      const snapshotDatasOrder = snapshotDatas.map(item => item)
  
      setData(snapshotDatasOrder)
    })
  }, [])
  
  function handleSearch(event){
    setSearch(event.target.value)
  }
  
  function handleOrder(event) {
    setOrder(event.target.value);
  }

  function handleSort(a, b) {
    if (a.fixedIncome.name < b.fixedIncome.name) {
      if (order === 'a') {
        return -1;
      }

      return 1;
    }

    if (a.fixedIncome.name > b.fixedIncome.name) {
      if (order === 'z') {
        return -1;
      }

      return 1;
    }

    return 0;
  }

  return (
    <searchContext.Provider value={{search, order, data, handleSearch, handleOrder, handleSort}}>
      {children}  
    </searchContext.Provider>
  )
}

export function useSearch(){
  const context = useContext(searchContext)
  return context
}

