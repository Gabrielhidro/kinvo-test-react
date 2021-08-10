// Images
import { logoImg, totalImg, arrowUpImg, rentImg, arrowDownImg, menuImg } from '../../../../shared/assets/img/index'

// Styles
import { Container } from './styles'

export function Header(){
  return (
    <Container>
      <img src={logoImg} alt="" />

      <section>
        <div>
          <img src={totalImg} alt="" />
          <div>
            <p>SALDO BRUTO</p>
            <h2>130.521.232,02</h2>
          </div>
        </div>

        <div>
          <img src={arrowUpImg} alt="" />
          <div>
            <p>VALOR APLICADO</p>
            <h2>521.230,02</h2>
          </div>
        </div>

        <div>
          <img src={rentImg} alt="" />
          <div>
            <p>RENTABILIDADE</p>
            <h2>2,34%</h2>
          </div>
        </div>

        <div>
          <img src={arrowDownImg} alt="" />
          <div>
            <p>CARTEIRA</p>
            <h2>MINHA CARTEIRA</h2>
          </div>
        </div>

        <div>
          <img src={menuImg} alt="" />
        </div>
      </section>
    </Container>
  )
}