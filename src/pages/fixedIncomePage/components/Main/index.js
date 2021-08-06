import { FixedIncomeCards } from "./FixedIncomeCards";
import { Container } from "./styles";
import axios from 'axios';
import { useEffect, useState } from "react";

export function Main(){

  return (
    <Container>
      <h1>Renda Fixa</h1>
      <FixedIncomeCards />
    </Container>
  )
}