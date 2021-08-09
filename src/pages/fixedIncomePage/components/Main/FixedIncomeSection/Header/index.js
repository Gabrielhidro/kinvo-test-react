import { Container } from "./styles";
import { searchImg } from '../../../../../../shared/assets/img/index'
import { useSearch } from "../../../../../../context";

export function Header (){

  const { search, handleSearch } = useSearch()

  return (
    <Container>
      <h1>Minhas Rendas Fixas</h1>
      <div>
        <select name="" id="">
          <option value="1">1</option>
        </select>
        <div>
          <input type="text" onChange={handleSearch} value={search} />
          <img src={searchImg} alt="" />
        </div>
      </div>
    </Container>
  )
}