import React from 'react';
import { Link, useParams } from 'react-router-dom';

//const resultados = [{"slug":"exitoso","imagen":"../img/check.jpg","texto":"Reserva exitosa"}, {"slug":"rechazado","imagen":"../img/check.jpg", "texto":"Reserva rechazada"}];

function ReservaResultado(){
    const {slug} = useParams();
    //const resultado = resultados.find(r=>r.slug == slug);
    //console.log(resultado);
    return(
        <div>
            <p>Hola</p>
        </div>
    )
}

export {ReservaResultado}