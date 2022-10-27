import React, {useEffect} from 'react';
import {NavLink, Outlet, useNavigate} from "react-router-dom";

export default function Torneos() {
    const navigate = useNavigate();
    useEffect(()=>{
        navigate('/torneos/todos')
    },[])

    //navegar()
    return (
        <div className="container-fluid">
            Lista de partidos por torneos
            <div className="card text-center">
                <div className="card-header">
                    <ul className="nav nav-tabs card-header-tabs" role="tablist">
                        <li className="nav-item" role="presentation">
                            <NavLink className="nav-link" aria-current="page" to="todos" aria-selected="false">Todos los torneos</NavLink>
                        </li>
                        <li className="nav-item" role="presentation">
                            <NavLink className="nav-link" to="mis-torneos" aria-selected="false">Mis torneos</NavLink>
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