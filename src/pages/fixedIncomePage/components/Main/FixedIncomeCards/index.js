import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Container } from "./styles";

export function FixedIncomeCards(){

  const [ data, setData ] = useState([])
  
  useEffect(() => {
    axios.get(`https://60b6ad6f17d1dc0017b882fd.mockapi.io/mock/getFixedIncomeClassData`)
    .then(response => {
      const snapshotDatas = response.data.data.snapshotByPortfolio;
      setData(snapshotDatas)
    })
  }, [])

  
  
  return (
    <Container>
        <Card>
          <div>
            <p>SALDO BRUTO</p>
            <h2>{data.equity}</h2>
          </div>
        </Card>
        <Card>
          <div>
            <p>VALOR APLICADO</p>
            <h2>{data.valueApplied}</h2>
          </div>
        </Card>
        <Card>
          <div>
            <p>RESULTADO</p>
            <h2>{data.equityProfit}</h2>
          </div>
        </Card>
        <Card>
          <div>
            <p>RENTABILIDADE</p>
            <h2>{data.percentageProfit}</h2>
          </div>
        </Card>
        <Card>
          <div>
            <p>CDI</p>
            <h2>{data.indexerValue}</h2>
          </div>
        </Card>
        <Card>
          <div>
            <p>% SOBRE CDI</p>
            <h2>{data.percentageOverIndexer}</h2>
          </div>
        </Card>
    </Container>
  )
}