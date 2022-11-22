import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import { Reservas, Horas } from '../data/canchasdata.js';

function Pagar(){
    const Location = useLocation();
    console.log(Location);
    
    const sendHoras = (Location)=>{
        const mesindex = Horas.findIndex((hora)=>(hora.mes == Location.state.Fecha.mes));
        const diaindex = Horas[mesindex].dias.findIndex((dia)=>(dia.dia == Location.state.Fecha.dia));
        let horarioindex = [];
        Location.state.Horas.forEach((element)=>{horarioindex.push(Horas[mesindex].dias[diaindex].horario.findIndex((hora)=>(hora.tiempo == element)));});
        horarioindex.forEach((element)=>{Horas[mesindex].dias[diaindex].horario[element].disponible = false});
        Reservas.push(Location.state);
        console.log('Estado');
        console.log(Location.state);
        //console.log('Hola');
        //console.log(Horas[mesindex].dias[diaindex].horario[horarioindex[0]]);
      }
    return(
        <form >
            <div class="mb-3">
                <label for="numerotarjeta" class="form-label">Numero de tarjeta</label>
                <input type="text" class="form-control" id="numerotarjeta" aria-describedby="emailHelp"/>
            </div>
            <div class="mb-3">
                <label for="codigotarjeta" class="form-label">Codigo de tarjeta</label>
                <input type="text" class="form-control" id="codigotarjeta"/>
            </div>
            <div class="mb-3">
                <label for="fechavencimiento" class="form-label">Fecha de vencimiento</label>
                <input type="text" class="form-control" id="fechavencimiento"/>
            </div>
            <Link to={`/reserva/pagar/exitoso`}>
                <button type="submit" class="btn btn-primary" onClick={sendHoras(Location)}>Reservar</button>
            </Link>
        </form>
    )
}

export {Pagar};