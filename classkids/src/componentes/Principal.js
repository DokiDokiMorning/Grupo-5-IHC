import React from 'react'
import classkid from './../images/classkid.png';
import ppp from './../images/ppp.jpg';
import "bootstrap/dist/css/bootstrap.min.css";

const Principal = () => {
    return (
        <div className="border">
          <div>
            <img className="mx-auto d-block" src={classkid} alt="" />
            <h1 className="text-center">Bienvenido niños</h1>
          </div>
          <div>
            <h3 className="text-center">¿Quieres aprender rápido y sencillo? </h3>
            <h3 className="text-center">Registrate y comienza a aprender </h3>
            <img className="mx-auto d-block" src={ppp} alt="" />
          </div>
          </div>
           
      )
}

export default Principal;