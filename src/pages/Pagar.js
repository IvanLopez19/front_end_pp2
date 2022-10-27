import React from 'react';
import {Link, useParams} from 'react-router-dom';

function Pagar(){

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
                <button type="submit" class="btn btn-primary">Reservar</button>
            </Link>
        </form>
    )
}

export {Pagar};