import React from 'react';
import { NavLink,  Outlet, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import logo from "../../src/img/logo.png"
import '../index.css'


function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/"> <img alt='logo connect gol' src={logo} style={{width:50, height:45}}/> </NavLink> 
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                            <li className="nav-item">
                                <NavLink activeStyle={(active)=>active?{backgroundColor:"black"}:null} className="nav-link" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/reserva">Canchas</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/torneos">Torneos</NavLink>
                            </li>
                        </ul>
                        {/**/}
                        <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Usuario
                                </a>
                                <ul className="dropdown-menu dropdown-menu-white">
                                    <li><Link className="dropdown-item" to="/user/perfil">Perfil</Link></li>
                                    <li><Link className="dropdown-item" to="/user/reserva">Reservas</Link></li>
                                    <li><Link className="dropdown-item" to="/user/equipo">Equipos</Link></li>
                                    <li><Link className="dropdown-item" to="/user/torneos">Torneos</Link></li>
                                    <div className="dropdown-divider"></div>
                                    <li><Link className="dropdown-item" to="/">Log Out</Link></li>
                                </ul>
                                </li>
                            </ul>
                        </div>
                        {/**/}
                        {/* <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button className="btn btn-outline-success" type="submit">Search</button>
                        </form> */}
                    </div>
                </div>
            </nav>
            <div><Outlet/></div>
        </div>
    )
}

export {NavBar};
