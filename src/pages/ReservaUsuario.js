import React from "react";

const reservas = [1,2,3];
function ReservaUsuario(){
    return(
        <div>
            {reservas.map(r=>(<Reservacard/>))}
        </div>
    )
}

function Reservacard(){
    return(
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}

export {ReservaUsuario};