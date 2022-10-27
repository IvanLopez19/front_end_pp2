import React from 'react'
import { NavLink } from "react-router-dom";


export default function Banner() {
        return (
            <section
            className="custom-pt-1 custom-pb-2 bg-primary parallaxie position-relative"
            style={{
              backgroundImage: `url(${require(`../img/1.jpg`)}`,
              backgroundPosition: "center center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: 100,
            }}
            data-overlay={6}
          >
            <div className="container">
              <div className="row justify-content-center text-center">
                <div className="col-10 col-lg-10 col-xl-8">
                  {/* Heading */}
                  <h1 className="display-2 font-weight-bold">
                    CONECT GOL
                  </h1>
                  {/* Text */}
                  <p className="lead text-light">
                    Asegura tu cancha
                  </p>
                  {/* Buttons */}{" "}
                  <NavLink button to="/reserva" className="btn btn-danger btn-lg">
                    Reservar
                  </NavLink>
                 </div>
              </div>
              {/* / .row */}
            </div>
            {/* / .container */}
            <div
              className="shape-1 bottom"
              style={{ height: "100px", overflow: "hidden" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                style={{ height: "100%", width: "100%" }}
              >
                <polygon
                  className="svg--sm"
                  fill="white"
                  points="0,0 30,100 65,21 90,100 100,75 100,100 0,100"
                />
                <polygon
                  className="svg--lg"
                  fill="white"
                  points="0,0 15,100 33,21 45,100 50,75 55,100 72,20 85,100 95,50 100,80 100,100 0,100"
                />
              </svg>
            </div>
          </section>
        )
    
    }


