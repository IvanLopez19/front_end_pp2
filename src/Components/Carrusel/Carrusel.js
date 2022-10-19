import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Carrusel.css';

function Carrusel(){
    return(
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner contprin">
                <div className="carousel-item contsec active">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMFHDPr23P2lI2BDkU6FzYEgJ2GWCSoZUl7A&usqp=CAU" className="d-block w-100 conttir" alt="..."/>
                </div>
                <div className="carousel-item contsec">
                <img src="https://donpotrero.com/img/posts/2/medidas_lg.jpg" className="d-block w-100 conttir" alt="..."/>
                </div>
                <div className="carousel-item contsec">
                <img src="https://www.competize.com/blog/wp-content/uploads/2020/10/cancha-futbol-sintetica-artifical-pasto-natural-750x500.jpg" className="d-block w-100 conttir" alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
    </div>
    )
}

export default Carrusel;