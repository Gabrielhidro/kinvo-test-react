import { Container } from "./styles";
import { searchImg } from '../../../../../../shared/assets/img/index'
import { useSearch } from "../../../../../../context";

export function Header (){

  const { search, handleSearch, handleOrder } = useSearch()

  return (
    <Container>
      <h1>Minhas Rendas Fixas</h1>
      <div>
        <select id="orderByName" onChange={handleOrder}>
          <option value="random">Ordenar por</option>
          <option value="a">A-Z</option>
          <option value="z">Z-A</option>
        </select>
        <div>
          <input type="text" onChange={handleSearch} value={search} />
          <img src={searchImg} alt="" />
        </div>
      </div>
    </Container>
  )
}