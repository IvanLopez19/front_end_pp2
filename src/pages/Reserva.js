import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Calendario from '../Components/Calendario/Calendario.js';
import Carrusel from '../Components/Carrusel/Carrusel.js';
import Horarios from '../Components/Horarios/Horarios.js';
import {Descripcion} from '../Components/Descripcion/Descripcion.js';
import {useCanchas} from '../Components/useCanchas.js';

function Reserva() {
  const {slug} = useParams();
  const {functions, variables} = useCanchas();
  //console.log("hola");
  //console.log(variables);
  //console.log(variables.newcanchas);
  console.log(slug);
  const cancha = functions.CanchaEspecifica(slug);
  // TODO: Validar que reservas tenga algo
  return (
    <div className="container-fluid">
      <Carrusel/>
        <Descripcion cancha={cancha.Negocio.name} descripcion={cancha.direccion} precio={cancha.precio}/>
        <Calendario/>
        <Horarios/>
    </div>
  );
}

export {Reserva};