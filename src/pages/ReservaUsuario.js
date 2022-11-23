import React from "react";
import { Reservas, Horas } from "../data/canchasdata.js";

//const reservas = [1,2,3];
function ReservaUsuario(){
    console.log('resultado');
    console.log(Reservas[0])

    const handleCancelar = (id)=>{
        const reservaindex = Reservas.findIndex((reserva)=>(reserva.id == id));
        Reservas.slice(reservaindex,reservaindex);
        //const mesindex = Horas.findIndex((mes)=>(mes.mes == props.fecha.mes));
        //const horaIndex = Horas[mesindex].dias[props.fecha.dia -1].horario.forEach((element)=>{Horas[mesindex].dias[diaindex].horario[element].disponible = false});
    }
    return(
        <div>
            <h1>Reservaciones usuario</h1>
            <ul>
                {Reservas.map(r=>(<Reservacard fecha={r.Fecha} cancha={r.Cancha} horas={r.Horas} funcion={()=>handleCancelar(r.id)}/>))}
            </ul>
        </div>
    )
}

function Reservacard(props){
    return(
        <li class="card">
            <div class="card-body">
                <h5 class="card-title">Dia:{props.fecha.dia}      Mes:{props.fecha.mes}</h5>
                <p>Negocio: {props.cancha.Negocio}</p>
                <p>Direccion: {props.cancha.Direccion}</p>
                <p>Monto total: {props.cancha.Precio}</p>
                <p>Horas: {props.horas}</p>
                <button class="btn btn-primary" onClick={props.funcion}>Cancelar reservacion</button>
            </div>
        </li>
    )
}

export {ReservaUsuario};