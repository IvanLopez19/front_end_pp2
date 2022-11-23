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
import {TodosTorneos} from "./Components/Torneos/TodosTorneos.js";
import {MisTorneos} from "./Components/Torneos/MisTorneos.js"
import {NotFoundPage} from "./pages/NotFound.js";
import { BuscarCancha } from "./pages/BuscarCancha.js";
import {ReservaResultado} from "./pages/ReservaResultado.js";
import { Pagar } from "./pages/Pagar.js";
import { ReservaUsuario } from "./pages/ReservaUsuario.js";
import {TorneoUsuario} from "./pages/TorneoUsuario.js"
import {PerfilUser} from "./pages/PerfilUser.js";


//imports servoces
import service_torneos from "./data/torneo.json"
//import service_torneosm from "./data/torneosm.json"
import service_perfil from "./data/perfilData.json"

function App() {
  //console.log(service_torneos)

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar/>}>
            <Route index element={<HomePage/>}/>
            <Route path="/reserva" element={<BuscarCancha/>}/>
            <Route path="/reserva/:slug" element={<Reserva/>}/>
            <Route path="/reserva/pagar" element={<Pagar/>}/>
            <Route path="/reserva/pagar/exitoso" element={<ReservaResultado/>}/>
            <Route path="/torneos/*" element={<Torneos/>}>
              <Route path="todos" element={<TodosTorneos torneo={service_torneos}/>}/>
              <Route path="mis-torneos" element={<MisTorneos torneo="torneos"/>}/>
              {/*<Route path="mis-torneos" element={<TodosTorneos torneo={service_torneosm}/>}/>*/}
            </Route>
            <Route path="/user/reserva" element={<ReservaUsuario/>}></Route>
            <Route path="/user/torneos" element={<TorneoUsuario/>}></Route>

            <Route path="/user/perfil" element={<PerfilUser Perf={service_perfil} />}></Route>

            <Route path="*" element={<NotFoundPage/>} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
