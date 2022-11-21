import React from "react";
import {Link} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import "./Horarios.css";
import { Reservas, Horas } from "../../data/canchasdata.js";


function Horarios(props){
  let Horas2 = [];
  if(props.fecha){
    const mesindex = Horas.findIndex((mes)=>(mes.mes == props.fecha.mes));
    Horas[mesindex].dias[props.fecha.dia - 1].horario.map((hora)=>
    {if(hora.disponible)
      { 
        Horas2.push({'tiempo':hora.tiempo, 'checked':false});}
     });
    console.log('hola');
    console.log(Horas2);
  }
  else{
    Horas[0].dias[0].horario.map((hora)=>{
      if(hora.disponible)
      { 
        Horas2.push({'tiempo':hora.tiempo, 'checked':false});}
    });
  }
  const [horas, setHoras] = React.useState(Horas2);


  console.log('estado');
  console.log(horas);

  const checkedhours = horas.filter(hora=>hora.checked);
  const checkedhoursHoras = checkedhours.map(hora=>hora.tiempo);

  const checkhour = (tiempo)=>{
    const horaIndex = horas.findIndex(hora => hora.tiempo === tiempo);
    const newhoras = [...horas];
    newhoras[horaIndex].checked = !(newhoras[horaIndex].checked);
    setHoras(newhoras);
  };

  console.log(Reservas);
  const reserva = {
    'id': Reservas.length==0? 1: Reservas[Reservas.length - 1].id++,
    'Fecha': props.fecha,
    'Horas': checkedhoursHoras,
    'Cancha': props.cancha
  };
  console.log(reserva);
  /*const sendHoras = ()=>{
    const reserva = {
      'id': Reservas.isEmpty()? 0: Reservas[Reservas.length - 1]++,
      'Fecha': 'hola',
      'Horas': checkedhoursHoras,
      'Cancha': props.cancha
    }
    Reservas.push(reserva);
  }*/

    return(
      <div className="contprinhor">
        <ul className="list-group">
          {horas.map( hora=> <Horario key={hora.tiempo} data={hora} checkhour={ () =>checkhour(hora.tiempo) }/>)}
        </ul>
        <div className='contenedor'>
          <span className="badge rounded-pill text-bg-light monto">{'$'+checkedhours.length*10}</span>
          <Link to={'/reserva/pagar'} state={reserva}>
            <button type="button" className="btn btn-primary btn-lg boton">Reservar</button>
          </Link>
        </div>
      </div>
    )
}

function Horario(props){
  return(<li className="list-group-item card horario" >
  {/* <div className="form-check-input me-1" type="checkbox" value="" id="firstCheckbox" onClick={props.checkhour}>{props.data.tiempo}</div> */}
  <div className="form-check-label" for="firstCheckbox" onClick={props.checkhour}>{props.data.tiempo}</div>
</li>)
}


export default Horarios;