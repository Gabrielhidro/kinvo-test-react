import { Card, Container } from "./styles";

export function FixedIncomeCards(){
let card = [
  {
    saldo: 'saldo',
    valor: 1209898,
  },
  {
    saldo: 'saldo2',
    valor: 1209898,
  },
  {
    saldo: 'saldo3',
    valor: 1209898,
  },
  {
    saldo: 'saldo4',
    valor: 1209898,
  },
  {
    saldo: 'saldo5',
    valor: 1209898,
  },
  {
    saldo: 'saldo6',
    valor: 1209898,
  }
]


return (

    <Container>
        {card.map(item => (
            <Card>
              <div>
                <p>{item.saldo}</p>
                <h2>{item.valor}</h2>
              </div>
            </Card>
          )
        )}
    </Container>
  )
}