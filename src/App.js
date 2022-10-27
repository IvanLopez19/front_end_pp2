//imports
import{
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import React from "react";

//imports pages
import {NavBar} from "./Components/NavBar.js";
import {HomePage} from './pages/HomePage.js';
import {Reserva} from './pages/Reserva.js';
import {Torneos} from "./pages/Torneos.js";
import {MisTorneos} from "./Components/Torneos/MisTorneos.js";
import {TodosTorneos} from "./Components/Torneos/TodosTorneos.js";
import {NotFoundPage} from "./pages/NotFound.js";
import { BuscarCancha } from "./pages/BuscarCancha.js";
import {ReservaResultado} from "./pages/ReservaResultado.js";
import { Pagar } from "./pages/Pagar.js";


//imports servoces
import service_torneos from "./data/torneo.json"
import service_torneosm from "./data/torneosm.json"

function App() {
  //console.log(service_torneos)

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/reserva" element={<BuscarCancha/>}/>
        <Route path="/reserva/:slug" element={<Reserva/>}/>
        <Route path="/reserva/pagar" element={<Pagar/>}/>
        <Route path="/reserva/pagar/exitoso" element={<ReservaResultado/>}/>
        <Route path="/torneos/*" element={<Torneos/>}>
          <Route path="todos" element={<TodosTorneos torneo={service_torneos}/>}/>
          <Route path="mis-torneos" element={<TodosTorneos torneo={service_torneosm}/>}/>
        </Route>
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
