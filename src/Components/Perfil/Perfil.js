import React from 'react';
import './perfil.css';

export default function Perfiles ({ perfil }) {
    const array_perfil = perfil.Perfiles;
    return (
        <div className='container'>
            <ul>
                {
                    array_perfil.map((perfil) => {
                        return (
                            <li key={perfil.id}>
                                <div className="card text-center">
                                    <div className="card-header">
                                        PERFIL
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Nombre:</h5>
                                        <p>
                                            {perfil.nombre}
                                        </p>
                                        <h5 className="card-title">Edad:</h5>
                                        <p>
                                            {perfil.edad}
                                        </p>
                                        <h5 className="card-title">Correo:</h5>
                                        <p>
                                            {perfil.correo}
                                        </p>
                                    </div>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
