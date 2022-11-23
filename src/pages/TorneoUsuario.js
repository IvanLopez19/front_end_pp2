import React from "react";
import '../Styles/TorneoUsuario.css';
import axios from 'axios';

//Componentes
import { FormCreateTorneo } from "../Components/Torneos/FormCreateTorneo.js"

function TorneoUsuario() {
    const handleAddNew = (event) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget);
        function getRandomInt() {
            const min = Math.ceil(2);
            const max = Math.floor(100);
            return Math.floor(Math.random() * (max - min) + min);
        }
        const array_partidos = [
            {
                id: getRandomInt(),
                equipo1: data.get('equipo1'),
                equipo2: data.get('equipo2'),
                fecha: data.get('fecha1'),
                hora: data.get('hora1')

            },
            {
                id: getRandomInt(),
                equipo1: data.get('equipo3'),
                equipo2: data.get('equipo4'),
                fecha: data.get('fecha2'),
                hora: data.get('hora2')

            }
        ]
        const object_torneo = {
            id: getRandomInt(),
            nombre: data.get('torneo'),
            partidos: array_partidos
        }
        console.log(array_partidos);
        //console.log(object_torneo);

        
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
                <FormCreateTorneo />
                <FormCreateTorneo numero={2} />
                <div className="row">
                    <div class="col-11">
                        <button type="submit" className="btn btn-primary" >Agregar partidos</button>
                    </div>
                    <div class="col-1">
                        <button type="submit" className="btn btn" aria-label="Mute">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                            </svg>
                        </button>
                    </div>
                    <span> </span>

                </div>
            </form>
        </div>
    )
}

export { TorneoUsuario };