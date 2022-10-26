import React from "react";
import { Link, Router } from "react-router-dom";
import { Canchas } from "../data/canchasdata";

function BuscarCancha(){
    const [busqueda, setBusqueda] = React.useState('');
    const [canchas, setCanchas] = React.useState(Canchas);

    const onSearch = (event)=>{
        console.log(event.target.value);
        setBusqueda(event.target.value);
    }

    let newcanchas = [];
    
      if(busqueda.length == 0){
        newcanchas = canchas;
      }
      else{
        newcanchas = canchas.filter(cancha=>cancha.Negocio.toLowerCase().includes(busqueda.toLowerCase()));
      }
    /*const cambiarbusqueda = (a)=>{
        setBusqueda()
    }*/
    return(
        <div>
            <div className="container-fluid">
                <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={busqueda} onChange={onSearch}/>
                <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                <ul>
                {newcanchas.map((cancha)=>(<Cancha key={cancha.slug} slug={cancha.slug} nombre={cancha.Negocio} direccion={cancha.Direccion}/>))}
                </ul>
            </div>

        </div>
    )
}

function Cancha({slug, nombre, direccion}){
    return(<li>
            <Link to={`/reserva/${slug}`} className="list-group-item list-group-item-action d-flex gap-3 py-3" >
          
                <img src="https://github.com/twbs.png" alt="twbs" width="32" height="32" className="rounded-circle flex-shrink-0"/>
                <div className="d-flex gap-2 w-100 justify-content-between">
                    <div>
                        <h6 className="mb-0">{nombre}</h6>
                        <p className="mb-0 opacity-75">{direccion}</p>
                    </div>
                </div>
            </Link>
            </li>
    )
}

export {BuscarCancha};