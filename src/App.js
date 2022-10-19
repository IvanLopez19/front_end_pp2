//imports
import{
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

//imports pages
import NavBar from "./Components/NavBar.js";
import HomePage from './pages/HomePage.js';
import Reserva from './pages/Reserva.js';
import NotFoundPage from "./pages/NotFound.js";

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/reserva" element={<Reserva/>}/>
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
