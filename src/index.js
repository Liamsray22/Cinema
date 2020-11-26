import React,{useContext} from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

// core components
import Admin from "layouts/Admin.js";
import Login from "layouts/Login.js";
import "assets/css/material-dashboard-react.css?v=1.9.0";
//Providers
import VentasProvider from 'context/ventas/VentasState'
import UsuariosProvider from 'context/usuarios/UsuariosState'
import CartelerasProvider from 'context/carteleras/CartelerasState'
import SalasProvider from 'context/salas/SalasState'
//contexts
import UsuariosContext from './context/usuarios/UsuariosContext'

const hist = createBrowserHistory();

const App =()=>{
  const usuariosContext = useContext(UsuariosContext)
  const {isAuth}=usuariosContext 
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
      <CartelerasProvider>
        <SalasProvider>
          <App/>
        </SalasProvider>
      </CartelerasProvider>
    </VentasProvider>
  </UsuariosProvider>,
  document.getElementById("root")
);
