import React from 'react'
import dinos from './../images/dinos.jpg'
import './../estilos/Imagen_dino.css'

const MensajeInicio = () => {
    return (
        <div className="border">
            <div>
                <img className="mx-auto d-block imagen" src={dinos} alt=""/>
            </div>
        </div>
    )
}

export default MensajeInicio;