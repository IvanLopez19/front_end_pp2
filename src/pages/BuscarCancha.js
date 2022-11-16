import axios from "axios";
import React, { useEffect } from "react";
import { Link, Router } from "react-router-dom";
import {useCanchas} from "../Components/useCanchas.js"
//import { Canchas } from "../data/canchasdata";

function BuscarCancha(){
    const {functions, variables} = useCanchas();

    useEffect(()=>{
        setTimeout( ()=>{
            axios({
                method:'get',
                url:'http://localhost:8000/api/cancha/getAll',
                timeout: 9000,
            })
            .then(res => {
                functions.setCanchas (res.data);
                //setLoading(false);
            } )
            .catch(e => console.log(e))},
            "3000")
    },[])

    console.log(variables.newcanchas);
    
    return(
        <div>
            {variables.newcanchas ? (
                <div className="container-fluid">
                    <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={useCanchas.busqueda} onChange={useCanchas.onSearch}/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    <ul>
                    {variables.newcanchas.map((cancha)=>(<Cancha key={cancha.id} slug={cancha.id} nombre={cancha.Negocio.name} direccion={cancha.direccion} precio={cancha.precio}/>))}
                    </ul>
                </div>)
            :(<div class="d-flex justify-content-center">
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>)
            }

        </div>
    )
}

function Cancha({slug, nombre, direccion, precio}){
    return(<li>
            <Link to={`/reserva/${slug}`} className="list-group-item list-group-item-action d-flex gap-3 py-3" >
          
                <img src="/static/media/logo.5688c03dbd4cddfb43ab.png" alt="twbs" width="32" height="32" className="rounded-circle flex-shrink-0"/>
                <div className="d-flex gap-2 w-100 justify-content-between">
                    <div>
                        <h6 className="mb-0">{nombre}</h6>
                        <p className="mb-0 opacity-75">{direccion}</p>
                    </div>
                </div>
                <div>${precio}</div>
            </Link>
            </li>
    )
}

export {BuscarCancha};