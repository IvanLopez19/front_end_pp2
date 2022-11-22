import React from "react";
import '../Styles/TorneoUsuario.css';
import axios from 'axios';

//Componentes
import {FormCreateTorneo} from "../Components/Torneos/FormCreateTorneo.js"

function TorneoUsuario() {
    const handleAddNew = (event)=>{
        event.preventDefault()
        const data = new FormData(event.currentTarget);
        const array_partidos = [
            {
                id: 7,
                equipo1: data.get('equipo1'),
                equipo2: data.get('equipo2'),
                fecha: data.get('fecha1'),
                hora: data.get('hora1')

            }
        ]
        const object_torneo = {
            id: 6,
            nombre: data.get('torneo'),
            partidos: array_partidos 
        }
        console.log(array_partidos);
        console.log(object_torneo);
        try {
            axios.post(`http://localhost:3001/torneos`, object_torneo).then(
                response => {
                    console.log(response)
                }
            )
        } catch (e) {
            console.log(e)
        } finally {
            console.log("arreglo de torneos: ");
        }
    }

    return (
        <div className="container">
            <h1>Crear Torneo</h1>

            <form onSubmit={handleAddNew} className="row g-3">
                <div className="col-md-12">
                    <label htmlFor="inputEmail4" className="form-label">
                        Nombre del Torneo
                    </label>
                    <input name="torneo" type="text" className="form-control" id="inputEmail4" />
                </div>
                <FormCreateTorneo/>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary" >
                        Agregar partidos
                    </button>
                </div>
            </form>
        </div>
    )
}

export { TorneoUsuario };