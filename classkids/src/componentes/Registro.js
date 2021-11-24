import React from 'react'
import './../estilos/Registro.css'

const Registro = () => {
    return (
        <div className="contenedor">
          <div>      
             <h2>Registro</h2>    
            <form action="reg" method="POST" class="formulario_register">
              
                <div >
                  <div className="elemento">
                    <label htmlFor="nombre_niño">Nombres del Niño</label>
                    <input
                      type="text"
                      className="form-control"
                      name="nombre_menor"
                     
                    />
                  </div>
  
                  <div className="elemento">
                    <label htmlFor="apellido_niño">Apellidos del Niño</label>
                    <input
                      type="text"
                      className="form-control"
                      name="apellido_menor"
                      
                    />
                  </div>
  
                  <div className="elemento">
                    <label htmlFor="nombre_apoderado">Nombres del Apoderado</label>
                    <input
                      type="text"
                      className="form-control"
                      name="nombre_mayor"
                      
                    />
                  </div>
  
                  <div className="elemento">
                    <label htmlFor="apellido_apoderado">Apellidos del Apoderado</label>
                    <input
                      type="text"
                      className="form-control"
                      name="apellido_mayor"
                      
                    />
                  </div>
  
                  <div className="elemento">
                    <label htmlFor="correo">Correo Electronico</label>
                    <input
                      type="text"
                      className="form-control"
                      name="correo"
                     
                    />
                  </div>

                  <div className="elemento">
                    <label htmlFor="contrasenia">Contraseña</label>
                    <input
                      type="password"
                      className="form-control"
                      name="contrasenia"
                     
                    />
                  </div>                
                 
                  <div className="elemento">
                    <input
                      type="submit"
                      value="Registrarse"
                    />
                  </div>
                </div>
              
              

            </form>
          </div>
        </div>
      );
}

export default Registro;