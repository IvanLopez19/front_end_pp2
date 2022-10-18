import Calendario from './Components/Calendario.js';
import Carrusel from './Components/Carrusel.js';
import Horarios from './Components/Horarios.js';

function App() {
  return (
    <div className="App">
      <Carrusel/>
      <Calendario/>
      <Horarios/>
      <button type="button" class="btn btn-primary btn-lg">Large button</button>
    </div>
  );
}

export default App;
