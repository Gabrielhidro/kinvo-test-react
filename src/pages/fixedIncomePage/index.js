import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

export function FixedIncomePage(){
  return (
    <div>
      <Header />
      <main>
        <Sidebar />
      </main>
    </div>
  )
}
