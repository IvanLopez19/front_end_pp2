import React from 'react';
import './perfil.css';
import perfiles from "../../data/perfilData.json";
import imagenUsuario from "../../img/usuario.png"


export default function Perfiles () {
    return (
        <div>
            {
                perfiles.map (infoPerfil => {
                    return(
                        <div className='container'>
                            <div className="card text-center">
                                <div className="card-header">
                                    PERFIL
                                </div>
                                <div className="card-body">
                                <img src={imagenUsuario} style={{width:100, height:100}}/>
                                <p></p>
                                    <div>
                                        NOMBRE :
                                        { infoPerfil.nombre}
                                    </div>
                                    <div>
                                        EDAD :
                                        { infoPerfil.edad}
                                    </div>
                                    <div>
                                        CORREO :
                                        { infoPerfil.correo}
                                    </div>
                                    <div>
                                        TELEFONO :
                                        { infoPerfil.telefono}
                                    </div>
                                    <div>
                                        DIRECCION :
                                        { infoPerfil.direccion}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
