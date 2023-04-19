import { ContextoProvider } from "./contexts";
import Principal from "./pages/Principal";

function App() {
  return <>
  <ContextoProvider><Principal/></ContextoProvider>
  </>
}

export default App;
