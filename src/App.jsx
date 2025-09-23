// import Navbar from './components/Navbar';
import { BrowserRouter } from "react-router";
import AppRoutes from "./router/AppRoutes";

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
