import axios from "axios";
import { useEffect, useState } from "react";
import { formCurrency, formPercent, formPercentInt } from "../../../../../utils/formats";
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
            <h2>{formCurrency(data.equity)}</h2>
          </div>
        </Card>
        <Card>
          <div>
            <p>VALOR APLICADO</p>
            <h2>{formCurrency(data.valueApplied)}</h2>
          </div>
        </Card>
        <Card>
          <div>
            <p>RESULTADO</p>
            <h2>{formCurrency(data.equityProfit)}</h2>
          </div>
        </Card>
        <Card>
          <div>
            <p>RENTABILIDADE</p>
            <h2>{formPercent(data.percentageProfit / 100)}</h2>
          </div>
        </Card>
        <Card>
          <div>
            <p>CDI</p>
            <h2>{formPercent(data.indexerValue / 100)}</h2>
          </div>
        </Card>
        <Card>
          <div>
            <p>% SOBRE CDI</p>
            <h2>{formPercentInt(data.percentageOverIndexer / 100)}</h2>
          </div>
        </Card>
    </Container>
  )
}