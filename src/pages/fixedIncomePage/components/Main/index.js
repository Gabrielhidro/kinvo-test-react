import { FixedIncomeCards } from "./FixedIncomeCards";
import { Container } from "./styles";
import { RentGraphic } from "./RentGraphic";
import { FixedIncomeSection } from "./FixedIncomeSection";

export function Main(){

  return (
    <Container>
      <h1>Renda Fixa</h1>
      <FixedIncomeCards />
      <RentGraphic />
      <FixedIncomeSection />
    </Container>
  )
}