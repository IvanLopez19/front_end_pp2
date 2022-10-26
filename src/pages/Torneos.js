import React from 'react'
import {Link, Outlet} from "react-router-dom"

function Torneos() {
    return (
        <div className="container-fluid">
            Lista de partidos por torneos
            <div className="card text-center">
                <div className="card-header">
                    <ul className="nav nav-tabs card-header-tabs">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="true" to="todos">Todos los torneos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="mis-torneos">Mis torneos</Link>
                        </li>
                    </ul>
                </div>
                <div className="card-body">
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}

export {Torneos};