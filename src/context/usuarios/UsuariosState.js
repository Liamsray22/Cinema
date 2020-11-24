import React, { useReducer } from "react";
import UsuariosContext from "./UsuariosContext";
import UsuariosReducer from "./UsuariosReducer";
import db from 'db'

const UsuariosState = (props) => {
  const initialState = {
    usuarios: [],
    isAuth: false,
    usuarioLogueado: null,
    error: false,
    isAdmin:null
  };

  const [state, dispatch] = useReducer(UsuariosReducer, initialState);

  const loguearUsuario = (usuario)=>{
    const usuarioLogged = db.models.Usuario.findOne(usuario)
    console.log('Sign In',usuarioLogged.length==0||usuarioLogged[0].length == 0)
    if(usuarioLogged.length ==0||usuarioLogged[0].length == 0) {
      return dispatch({
        type: "ERROR",
      })
    }  
    dispatch({
      type: "LOGUEAR_USUARIO",
      payload: {
        usuario,
        admin: true
      }
    })
  }

 const desloguearUsuario=()=>{
    db.models.Usuario.logOut()
    dispatch({
      type: "DESLOGUEAR_USUARIO"
    })
  }

  const obtenerUsuarios = ()=>{
    const resultado = db.models.Usuario.findMany()
    dispatch({
      type:"OBTENER_USUARIOS",
      payload: resultado
    })
  }

  // const removerUsuario = (id)=>{
  //   dispatch({
  //     type: "REMOVER_USUARIO",
  //     payload: id
  //   })
  // }

  // const editarUsuario = (usuario)=>{
  //     dispatch({
  //     type: "EDITAR_USUARIO",
  //     payload: usuario
  //   })
  // }

  return (
    <UsuariosContext.Provider
      value={{
        //State
        isAuth: state.isAuth,
        isAdmin: state.isAdmin,
        usuarios: state.usuarios,
        error: state.error,
        //Fn
        loguearUsuario,
        desloguearUsuario,
        obtenerUsuarios
      }}
    >
      {props.children}
    </UsuariosContext.Provider>
  );
};

export default UsuariosState;
