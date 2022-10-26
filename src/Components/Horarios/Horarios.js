import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Horarios.css";

const Horas = [{'tiempo':'12:00-1:00', 'checked':false}, {'tiempo':'1:00-2:00', 'checked': false} , {'tiempo':'3:00-4:00', 'checked': false}, {'tiempo':'4:00-5:00','checked': false}];

function Horarios(props){
  const [horas, setHoras] = React.useState(Horas);

  const checkedhours = horas.filter(hora=>hora.checked).length;

  const checkhour = (tiempo)=>{
    const horaIndex = horas.findIndex(hora => hora.tiempo === tiempo);
    const newhoras = [...horas];
    newhoras[horaIndex].checked = !(newhoras[horaIndex].checked);
    setHoras(newhoras);
  };

    return(
      <div className="contprinhor">
        <ul className="list-group">
          {horas.map( hora=> <Horario key={hora.tiempo} data={hora} checkhour={ () =>checkhour(hora.tiempo) }/>)}
        </ul>
        <div className='contenedor'>
          <span className="badge rounded-pill text-bg-light monto">{'$'+checkedhours*10}</span>
          <button type="button" className="btn btn-primary btn-lg boton">Large button</button>
        </div>
      </div>
    )
}

function Horario(props){
  return(<li className="list-group-item card" >
  {/* <div className="form-check-input me-1" type="checkbox" value="" id="firstCheckbox" onClick={props.checkhour}>{props.data.tiempo}</div> */}
  <div className="form-check-label" for="firstCheckbox" onClick={props.checkhour}>{props.data.tiempo}</div>
</li>)
}


export default Horarios;