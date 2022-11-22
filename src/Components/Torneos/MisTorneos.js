import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './index.css'
//import subcomponentes
import Partidos from "./Partidos.js";

function MisTorneos({ torneo }) {
    const [torneos, setTorneos] = useState([])
    
    useEffect(() => {
        console.log("Effect")
        try {
            axios.get(`http://localhost:3001/${torneo}`).then(
                response => {
                    console.log(response)
                    setTorneos(response.data)
                }
            )
        } catch (e) {
            console.log(e)
        } finally {
            console.log("arreglo de torneos: ", torneos);
        }
    }, [])

    return (
        <div className='container'>
            <ul>
                {
                    torneos.map((torneo) => {
                        return (
                            <li key={torneo.id}>
                                <div className="card text-center">
                                    <div className="card-header">
                                        Featured
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">{torneo.nombre}</h5>
                                        <Partidos partidos={torneo.partidos} />
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

export { MisTorneos };