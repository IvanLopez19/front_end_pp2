import React from "react";

function FormCreateTorneo({numero=1}) {
    const fecha_hora = numero;
    if(numero === 1){
        numero = 1
    }else{
        numero= numero+1
    }
    console.log("prop en el formulario: ", numero)
    return (
        <div>
            <div className="card text-bg-secondary mb-3 col-12 g-3">
                <div className="card-header">{`Partido ${fecha_hora}`}</div>
                <div className="card-body row">
                    <div className="col-6">
                        <label htmlFor="inputPassword4" className="form-label">
                            {`equipo ${numero}`}
                        </label>
                        <input name={`equipo${numero}`} type="text" className="form-control" id="inputPassword4" />
                    </div>
                    <div className="col-6">
                        <label htmlFor="inputAddress" className="form-label">
                            {`equipo ${numero+1}`}
                        </label>
                        <input
                            name={`equipo${numero+1}`}
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="inputAddress2" className="form-label">
                            Fecha
                        </label>
                        <input
                            type="date"
                            name={`fecha${fecha_hora}`}
                            className="form-control"
                            id="inputAddress2"
                        />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="inputCity" className="form-label">
                            Hora
                        </label>
                        <input type="time" name={`hora${fecha_hora}`} className="form-control" id="inputCity" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export { FormCreateTorneo };