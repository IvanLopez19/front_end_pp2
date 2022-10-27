import React from 'react'
//import subcomponentes
import Partidos from "./Partidos.js";

export default function TodosTorneos({ torneo }) {
    console.log(torneo);
    const torneos_array = torneo.torneos
    return (
        <div className='container'>
            <ul>
                {
                    torneos_array.map((torneo) => {
                        return (
                            <li key={torneo.id}>
                                <div className="card text-center">
                                    <div className="card-header">
                                        Featured
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">{torneo.nombre}</h5>
                                        <Partidos/>
                                    </div>
                                    <div className="card-footer text-muted">
                                        2 days ago
                                    </div>
                                </div>
                            </li>)
                    })
                }
            </ul>
        </div>
    )
}