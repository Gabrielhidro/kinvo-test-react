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
            <p>Saldo bruto</p>
            <h2>130.908.332,09</h2>
          </div>
        </div>

        <div>
          <img src={arrowUpImg} alt="" />
          <div>
            <p>Saldo bruto</p>
            <h2>130.908.332,09</h2>
          </div>
        </div>

        <div>
          <img src={rentImg} alt="" />
          <div>
            <p>Saldo bruto</p>
            <h2>130.908.332,09</h2>
          </div>
        </div>

        <div>
          <img src={arrowDownImg} alt="" />
          <div>
            <p>Saldo bruto</p>
            <h2>130.908.332,09</h2>
          </div>
        </div>

        <div>
          <img src={menuImg} alt="" />
        </div>
      </section>
    </Container>
  )
}