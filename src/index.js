import React,{useContext} from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

// core components
import Admin from "layouts/Admin.js";
import RTL from "layouts/RTL.js";
import Login from "layouts/Login.js";
import "assets/css/material-dashboard-react.css?v=1.9.0";
//Providers
import VentasProvider from './context/ventas/VentasState'
import UsuariosProvider from './context/usuarios/UsuariosState'
//contexts
import UsuariosContext from './context/usuarios/UsuariosContext'

import db from './db'

const hist = createBrowserHistory();

const App =()=>{
  const usuariosContext = useContext(UsuariosContext)
  const {isAuth}=usuariosContext 
  // const isAuth = true
  
  return(
  <Router history={hist}>
        <Switch>
          {isAuth 
          ? 
          <>
            <Route path="/admin" component={Admin} />
            <Redirect from="/" to="/admin/dashboard" />
          </>
          :
            <Login/>
          }   
        </Switch>
  </Router>
  )
}


ReactDOM.render(
  <UsuariosProvider>
  <VentasProvider>
  <App/>
  </VentasProvider>
  </UsuariosProvider>,
  document.getElementById("root")
);
