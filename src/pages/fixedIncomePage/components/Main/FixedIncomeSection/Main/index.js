import { Container, Content, PaginationButtons } from "./styles";
import { infoImg, rightPagImg, leftPagImg } from '../../../../../../shared/assets/img'
import { useSearch } from "../../../../../../context";
import { formPercent, formNotCurrency } from "../../../../../../utils/formats";

export function Main(){

  const { search, handleSort, data } = useSearch()
  const filteredProducts = data.filter((e) => e.fixedIncome.name.toUpperCase().includes(search.toUpperCase())).sort(handleSort);

  return(
    <>
      {filteredProducts.map(item => (
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
              <div><p>VALOR INVES.</p><h3>{formNotCurrency(item.position.valueApplied)}</h3></div>
              <div><p>SALDO BRUTO</p><h3>{formNotCurrency(item.position.equity)}</h3></div>
              <div><p>RENT</p><h3>{formPercent(item.position.profitability / 100)}</h3></div>
              <div><p>% DA CART.</p><h3>{formPercent(item.position.portfolioPercentage / 100)}</h3></div>
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
      <PaginationButtons>
        <button disabled><img src={leftPagImg} alt="" /></button>
        <button disabled className="active">1</button>
        <button disabled>2</button>
        <button disabled><img src={rightPagImg} alt="" /></button>
      </PaginationButtons>
    </>
  )
}