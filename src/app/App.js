import { SearchProvider } from "../context";
import { FixedIncomePage } from "../pages/fixedIncomePage";
import { GlobalStyle } from "../shared/styles/global";

function App() {
  return (
    <div className="App">
      <SearchProvider>
        <FixedIncomePage />
        <GlobalStyle />
      </SearchProvider>
    </div>
  );
}

export default App;
