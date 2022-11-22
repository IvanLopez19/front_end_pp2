import React from 'react';
import { NavLink,  Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import logo from "../../src/img/logo.png"


function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/"> <img src={logo} style={{width:50, height:45}}/> </NavLink> 
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/reserva">Canchas</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/torneos">Torneos</NavLink>
                            </li>
                        </ul>
                        {/**/}
                        <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
                            <ul class="navbar-nav">
                                <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Usuario
                                </a>
                                <ul class="dropdown-menu dropdown-menu-white">
                                    <li><a class="dropdown-item" href="/">Perfil</a></li>
                                    <li><a class="dropdown-item" href="/user/reserva">Reservas</a></li>
                                    <li><a class="dropdown-item" href="/user/equipo">Equipos</a></li>
                                    <li><a class="dropdown-item" href="/user/torneos">Torneos</a></li>
                                    <div class="dropdown-divider"></div>
                                    <li><a class="dropdown-item" href="/">Log Out</a></li>
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