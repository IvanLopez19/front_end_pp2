import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Calendario from '../Components/Calendario/Calendario.js';
import Carrusel from '../Components/Carrusel/Carrusel.js';
import Horarios from '../Components/Horarios/Horarios.js';
import {Descripcion} from '../Components/Descripcion/Descripcion.js';
import { Canchas, Horas } from '../data/canchasdata.js';
import '../Styles/Reserva.css';
import "bootstrap/dist/css/bootstrap.css";

function Reserva() {
  const [fecha, Setfecha] = React.useState();
  const {slug} = useParams();


  const index = Canchas.findIndex((cancha)=>(cancha.slug == slug));
  const cancha = Canchas[index];
  // TODO: Validar que reservas tenga algo
  return (
    <div className="container-fluid">
      <Carrusel/>
        <Descripcion cancha={cancha.Negocio} descripcion={cancha.Direccion} precio={cancha.Precio} suelo={cancha.Suelo}/>
          <Calendario fecha = {Setfecha}/>
          <Horarios cancha={cancha} fecha={fecha}/>
    </div>
  );
}

export {Reserva};