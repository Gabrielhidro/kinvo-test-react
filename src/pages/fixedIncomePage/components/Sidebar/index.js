// Images
import { 
resumeImg,
productsImg,
earningsImg,
classesImg,
realRentImg,
projectionImg,
returnImg,
fgcImg }
from '../../../../shared/assets/img/index'

// Styles
import { Container } from "./styles";

export function Sidebar (){
  return(
    <Container>
      <ul>
        <li>
          <img src={resumeImg} alt=""/>
          <div>
            <p>Resumo <br />Da Carteira</p>
            <i className="fas fa-chevron-right"></i>
          </div>
        </li>

        <li>
          <img src={productsImg} alt=""/>
          <div>
            <p>Meus <br />Produtos</p>
            <i className="fas fa-chevron-right"></i>
          </div>
        </li>

        <li>
          <img src={earningsImg}alt=""/>
          <div>
            <p>Meus <br />Proventos</p>
            <i className="fas fa-chevron-right"></i>
          </div>
        </li>

        <li className="dropdown">
            <img src={classesImg} alt=""/>
            <div>
              <p>Classe <br />De Ativos</p>
              <i className="fas fa-chevron-right"></i>
            </div>
          {/* <div class="dropdown-content">
            <ul>
              <li><a href="#">Ação</a></li>
              <li><a href="#">Fundo</a></li>
              <li><a href="#">Fundo Imobiliário</a></li>
              <li onclick="showContent()"><a href="#">Fundo Renda Fixa</a></li>
            </ul>
          </div> */}
        </li>

        <li>
          <img src={realRentImg} alt=""/>
          <div>
            <p>Rentabilidade <br />Real</p>
            <i className="fas fa-chevron-right"></i>
          </div>
        </li>

        <li>
          <img src={projectionImg} alt=""/>
          <div>
            <p>Projeção <br />Da Carteira</p>
            <i className="fas fa-chevron-right"></i>
          </div>
        </li>

        <li>
          <img src={returnImg} alt=""/>
          <div>
            <p>Risco <br />x Retorno</p>
            <i className="fas fa-chevron-right"></i>
          </div>
        </li>

        <li>
          <img src={fgcImg} alt=""/>
          <div>
            <p>Cobertura <br />Do FGC</p>
            <i className="fas fa-chevron-right"></i>
          </div>
        </li>
      </ul>
    </Container>
  )
}