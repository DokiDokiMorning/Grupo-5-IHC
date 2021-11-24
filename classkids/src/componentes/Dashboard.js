import React from 'react'
import dinos from './../images/dinos.jpg'
import './../estilos/Imagen_dino.css'

const Dashboard = () => {
    return (
            <div className="contenedor">
                <div> 
                    <h2>Haz una pregunta</h2>                  
                    <form >

                        <div className="elemento">
                            <label htmlFor="nombreUsuario">Usuario: </label>
                            <input
                                type="text"
                                className="form-control"
                                name="OpenQuery"

                            />

                            <input
                                type="submit"
                                value="Preguntar"
                            />
                        </div>

                        
                        
                    </form>
                </div>
            </div>
    )
}

export default Dashboard;