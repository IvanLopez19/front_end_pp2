import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Calendario from '../Components/Calendario/Calendario.js';
import Carrusel from '../Components/Carrusel/Carrusel.js';
import Horarios from '../Components/Horarios/Horarios.js';
import {Descripcion} from '../Components/Descripcion/Descripcion.js';
import { Canchas } from "../data/canchasdata.js";

function Reserva() {
  const {slug} = useParams();
  const reservas = Canchas.find(cancha=>cancha.slug == slug);
  // TODO: Validar que reservas tenga algo
  return (
    <div className="container-fluid">
      <Carrusel/>
        <Descripcion cancha={reservas.Negocio} descripcion={reservas.Direccion} precio={reservas.Precio}/>
      <Calendario/>
      <Horarios/>
    </div>
  );
}

export {Reserva};