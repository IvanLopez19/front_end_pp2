import React from 'react'
import './partidos.css';
export default function Partidos({ partidos }) {
    const array_partidos = partidos;
    return (
        <ol className="list-group">
            {
                array_partidos.map((partido) => {
                    return (
                        <li key={partido.id} className="list-group-item d-flex-column justify-content-center align-items-center">
                            <div className="container partido d-flex justify-content-center align-items-center">
                                <div className="equipo ms-5 me-5">
                                    <div className="fw-bold">{partido.equipo1}</div>
                                    Content for list item
                                </div>
                                <span className="badge bg-primary rounded-pill">vs</span>
                                <div className="equipo ms-5 me-5">
                                    <div className="fw-bold">{partido.equipo2}</div>
                                    Content for list item
                                </div>
                            </div>
                            <div className="mt-1">
                                {partido.fecha}
                            </div>
                        </li>
                    )
                })
            }
        </ol>
    )
}