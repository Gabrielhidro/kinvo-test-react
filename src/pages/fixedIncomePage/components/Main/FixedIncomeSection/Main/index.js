import axios from "axios";
import { useEffect, useState } from "react";

export function Main(){
  
  const [ data, setData ] = useState([])
  
  useEffect(() => {
    axios.get(`https://60b6ad6f17d1dc0017b882fd.mockapi.io/mock/getFixedIncomeClassData`)
    .then(response => {
      const snapshotDatas = response.data.data.snapshotByProduct;
      setData(snapshotDatas)
    })
  }, [])

  console.log(data);

  return(
    <p></p>
  )
}