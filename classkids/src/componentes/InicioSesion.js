import React from 'react';
import './../estilos/InicioSesion.css'

const InicioSesion = () => {
        return(
            <div className="contenedor">
                <div> 
                    <h2>Login</h2>                  
                    <form action="auth" method="POST" class="formulario_login">

                        <div className="elemento">
                            <label htmlFor="nombreUsuario">Nombre de usuario</label>
                            <input
                                type="text"
                                className="form-control"
                                name="nombreUsuario"

                            />

                            <label htmlFor="clave">Contraseña</label>
                            <input
                                type="password"
                                className="form-control"
                                name="clave"
                            />

                            <input
                                type="submit"
                                value="Acceder"
                            />
                        </div>

                        
                        
                    </form>
                </div>
            </div>
        );
    
}

export default InicioSesion;