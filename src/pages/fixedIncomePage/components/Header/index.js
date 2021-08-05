//Logo
import logoImg from '../../../../shared/assets/img/logo.svg'
import totalImg from '../../../../shared/assets/img/total.svg'
import arrowUpImg from '../../../../shared/assets/img/arrow-up.svg'
import rentImg from '../../../../shared/assets/img/rent.svg'
import arrowDownImg from '../../../../shared/assets/img/arrow-down-purple.svg'
import menuImg from '../../../../shared/assets/img/menu.svg'

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