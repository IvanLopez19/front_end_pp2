import axios from "axios";
import React, { useEffect } from "react";
import { Link, Router } from "react-router-dom";
//import {useCanchas} from "../Components/useCanchas.js"
import { Canchas } from "../data/canchasdata";
import logo from "../../src/img/logo.png"


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
    //const {functions, variables} = useCanchas();

    /*useEffect(()=>{
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
    },[])*/

    //console.log(variables.newcanchas);
    
    return(
        <div>
            {newcanchas ? (
                <div className="container-fluid">
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={busqueda} onChange={onSearch} />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    <div class="jumbotron jumbotron-fluid">
        
    </div>
                    <ul>
                        {newcanchas.map((cancha) => (<Cancha key={cancha.slug} slug={cancha.slug} nombre={cancha.Negocio} direccion={cancha.Direccion} precio={cancha.Precio} suelo={cancha.Suelo} />))}
                        {/*variables.newcanchas.map((cancha)=>(<Cancha key={cancha.id} slug={cancha.id} nombre={cancha.Negocio.name} direccion={cancha.direccion} precio={cancha.precio}/>))*/}
                    </ul>
                </div>)
                : (<div class="d-flex justify-content-center">
                    <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>)
                }
                
        </div>
        
        
    )
}

function Cancha({slug, nombre, direccion, precio, suelo}){
    return(
        <li>
            <Link to={`/reserva/${slug}`} class="list-group-item list-group-item-action d-flex gap-3 py-3" >
                <img src={logo} alt="twbs" width="40" height="32" className="rounded-circle flex-shrink-0"/>
                <div className="d-flex gap-2 w-100 justify-content-between">
                    <div>
                        <h6 className="mb-0">{nombre}</h6>
                        <p className="mb-0 opacity-75">{direccion}</p>
                    </div>
                </div>
                <div >${precio}</div>
                <div>{suelo}</div>
            </Link>
        </li>
    )
}

export {BuscarCancha};