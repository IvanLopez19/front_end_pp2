import React from "react";

function FormCreateTorneo() {
    return (
        <div>
            <div className="card text-bg-secondary mb-3 col-12 g-3">
                <div className="card-header">Partido 1</div>
                <div className="card-body row">
                    <div className="col-6">
                        <label htmlFor="inputPassword4" className="form-label">
                            Equipo 1
                        </label>
                        <input name="equipo1" type="text" className="form-control" id="inputPassword4" />
                    </div>
                    <div className="col-6">
                        <label htmlFor="inputAddress" className="form-label">
                            Equipo 2
                        </label>
                        <input
                            name="equipo2"
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
                            name="fecha1"
                            className="form-control"
                            id="inputAddress2"
                        />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="inputCity" className="form-label">
                            Hora
                        </label>
                        <input type="time" name="hora1" className="form-control" id="inputCity" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export { FormCreateTorneo };