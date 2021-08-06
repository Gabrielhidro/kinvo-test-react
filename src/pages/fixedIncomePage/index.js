import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Sidebar } from "./components/Sidebar";
import { Content } from "./styles";

export function FixedIncomePage(){
  return (
    <div>
      <Header />
      <Content>
        <Sidebar />
        <Main />
      </Content>
    </div>
  )
}
