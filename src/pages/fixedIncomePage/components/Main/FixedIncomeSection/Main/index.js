import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Content } from "./styles";
import { infoImg } from '../../../../../../shared/assets/img'

export function Main(){
  
  const [ data, setData ] = useState([])
  
  useEffect(() => {
    axios.get(`https://60b6ad6f17d1dc0017b882fd.mockapi.io/mock/getFixedIncomeClassData`)
    .then(response => {
      const snapshotDatas = response.data.data.snapshotByProduct;
      setData(snapshotDatas)
    })
  }, [])

  const dados = data.map(item => item)

  return(
    <>
      {dados.map(item => (
        <Container key={item.fixedIncome.portfolioProductId}>
          <Content>
            <div className="header">
              <h3>TÍTULO</h3>
              <img src={infoImg} alt="" />
            </div>
            <div className="content">
              <h3>{item.fixedIncome.name}</h3>
              <div>
                <p>CLASSE</p>
                <h4>{item.fixedIncome.bondType}</h4>
              </div>
            </div>
          </Content>
          <Content>
          <div className="header">
              <h3>RESULTADO</h3>
              <img src={infoImg} alt="" />
            </div>
            <div className="results-content">
              <div><p>VALOR INVES.</p><h3>{item.position.valueApplied}</h3></div>
              <div><p>SALDO BRUTO</p><h3>{item.position.equity}</h3></div>
              <div><p>RENT</p><h3>{item.position.profitability}</h3></div>
              <div><p>% DA CART.</p><h3>{item.position.portfolioPercentage}</h3></div>
              <div><p>CDI</p><h3>{item.position.indexerValue}</h3></div>
              <div><p>SOBRE CDI</p><h3>{item.position.percentageOverIndexer}</h3></div>
            </div>
          </Content>
          <Content>
          <div className="header">
              <h3>VENCIMENTO</h3>
              <img src={infoImg} alt="" />
            </div>
            <div className="venc-content">
              <div><p>DATA VENC</p><h3>{item.due.date}</h3></div>
              <div><p>DIAS ATÉ VENC</p><h3>{item.due.daysUntilExpiration}</h3></div>
            </div>
          </Content>
        </Container>
      ))}
    </>
  )
}