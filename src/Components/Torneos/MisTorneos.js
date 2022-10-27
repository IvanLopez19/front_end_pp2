import React from 'react';
import './index.css';

function MisTorneos({name}) {

    return (
        <div>
            <h5 className="card-title">Mis torneos</h5>
            <p className="card-text">Listado de los torneos en los que estoy suscrito</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
    )
}

export {MisTorneos};