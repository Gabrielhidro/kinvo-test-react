// Images
import { useState } from 'react';
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
  const [ isOpen, setIsOpen ] = useState(false)  
  
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
        
        <div className="dropdown" onClick={() =>  setIsOpen(value => !value)}>
          <img src={classesImg} alt=""/>
          <div>
            <p>Classe <br />De Ativos</p>
            <i className="fas fa-chevron-right"></i>
          </div>
        </div>
        <div className={`drop-content ${isOpen ? 'active' : '' }`} >
          <ul>
            <li><a href="#">Ação</a><i className="fas fa-chevron-right"></i></li>
            <li><a href="#">Fundo</a><i className="fas fa-chevron-right"></i></li>
            <li><a href="#">Fundo Imobiliário</a><i className="fas fa-chevron-right"></i></li>
            <li><a href="#">Fundo Renda Fixa</a><i className="fas fa-chevron-right"></i></li>
          </ul>
        </div>

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