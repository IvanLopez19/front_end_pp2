import Calendario from './Components/Calendario/Calendario.js';
import Carrusel from './Components/Carrusel/Carrusel.js';
import Horarios from './Components/Horarios/Horarios.js';
import Descripcion from './Components/Descripcion/Descripcion.js';

function App() {
  return (
    <div className="App">
      <Carrusel/>
      <Descripcion cancha="Cancha hola" descripcion="Esta cancha es bien chiva"/>
      <Calendario/>
      <Horarios/>
    </div>
  );
}

export default App;
