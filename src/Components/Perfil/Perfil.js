import React from 'react';
import './perfil.css';
import '../../data/perfilData.json'


export default function Perfiles ({Perf}) {
    return (
        <div className='container'>
            <div className="card text-center">
                <div className="card-header">
                    PERFIL
                </div>
                <div className="card-body">
                    <p>informacion usuario</p>
                </div>
            </div>
        </div>
    )
}

export {Perfiles};