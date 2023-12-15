import { AllRoutes } from "routes";
import "bootstrap/dist/js/bootstrap.bundle";
import { useToken } from "lib/utils/useToken";

import "./App.css";

function App() {
  const { getToken } = useToken();
  const auth = getToken();

  return <AllRoutes restricted={auth} />;
}

export default App;
