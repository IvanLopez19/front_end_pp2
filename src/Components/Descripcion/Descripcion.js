import React from "react";
import './Descripcion.css';

function Descripcion(props){
    return(
      <div className="descripcion">
        <h2>{props.cancha}</h2>
        <p>{props.descripcion}</p>
        <p>precio por hora: ${props.precio}</p>
      </div>
    )
}

export {Descripcion};