import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import {Switch,Route,Link} from "react-router-dom"

import InicioSesion from './componentes/InicioSesion'
import Registro from './componentes/Registro'
import Principal from './componentes/Principal'
import MensajeInicio from './componentes/MensajeInicio'
import Nosotros from './componentes/Nosotros'

import "./estilos/App.css"
import classkid from './images/classkid.png'

const App = () => {
  return (
    <div>
        <h1 className="text-center bg-danger text-info">BIENVENIDOS A CLASSKID</h1>
        <Route>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark" data-target="menu">
            <span>
              <img src={classkid} alt="" />
            </span>
          <hr/>
          <div className="collapse navbar-collapse" id="menu">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
              <Link to={"/principal"} className="nav-link text-light">Pagina Principal</Link>            
              </li>     
              <li className="nav-item active">
              <Link to={"/inicio"} className="nav-link text-light">Inicio de sesión</Link>            
              </li>      
              <li className="nav-item active">
              <Link to={"/registro"} className="nav-link text-light">Registro</Link>            
              </li>
              <li className="nav-item active">
              <Link to={"/nosotros"} className="nav-link text-light">Nosotros</Link>            
              </li>
            </ul>
          </div>
          <hr/>
          </nav>   
        </div>
      <div>
        <Switch>    
          <Route exact path="/" component={MensajeInicio}/>      
          <Route exact path="/principal" component={Principal}/>
          <Route exact path="/inicio" component={InicioSesion}/>
          <Route exact path="/registro" component={Registro}/>
          <Route exact path="/nosotros" component={Nosotros}/>
        </Switch>
      </div>
      </Route>
    </div>
  );
}

export default App;