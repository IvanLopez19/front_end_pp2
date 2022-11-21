import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './Calendario.css';
import { Horas } from "../../data/canchasdata";
//import 'bootstrap/js/dist/dropdown.js';

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
function Calendario(props){
    const [mes, setMes] = React.useState(meses[0]);
    //const [fecha, Setfecha] = React.useState();

    const handleMes = (bool)=>{
        const index = meses.findIndex((mes2)=> mes == mes2);
        let newmes;
        if(bool){
            if(index==12){
                newmes = meses[0];
            }
            else{
                newmes = meses[index+1];
            }
        }
        else{
            if(index==0){
                newmes = meses[11];
            }
            else{
                newmes = meses[index-1];
            }
        }
        setMes(newmes);
    }

    const mesindex = Horas.findIndex((mes3)=>mes3.mes == mes);
    const newmes2 = Horas[mesindex].dias;


    const handleFecha = (e)=>{
        console.log(e);
        const fecha = {
            'dia':e.target.textContent,
            'mes':mes
        }
        //console.log(props);
        props.fecha(fecha);
    }

    return(
        <div className="dropdown-menu d-block position-static p-2 shadow rounded-3 w-340px">
        <div className="d-grid gap-1">
            <div className="cal">
            <div className="cal-month">
                <button className="btn cal-btn" type="button" onClick={()=>handleMes(false)}>
                <svg className="bi" width="16" height="16"><use href="#arrow-left-short"></use></svg>
                </button>
                <strong className="cal-month-name">{mes}</strong>
                <button className="btn cal-btn" type="button" onClick={()=>handleMes(true)}>
                <svg className="bi" width="16" height="16"><use href="#arrow-right-short"></use></svg>
                </button>
            </div>
            <div className="cal-weekdays text-muted">
                <div className="cal-weekday">Sun</div>
                <div className="cal-weekday">Mon</div>
                <div className="cal-weekday">Tue</div>
                <div className="cal-weekday">Wed</div>
                <div className="cal-weekday">Thu</div>
                <div className="cal-weekday">Fri</div>
                <div className="cal-weekday">Sat</div>
            </div>
            <div className="cal-days">

                {newmes2.map((dia)=>(
                <button className="btn cal-btn" type="button" onClick={(e)=>handleFecha(e)} >{dia.dia}</button>))}
            </div>
            </div>
        </div>
    </div>
    )
}

export default Calendario;