import React, { useReducer } from "react";
import UsuariosContext from "./UsuariosContext";
import UsuariosReducer from "./UsuariosReducer";
import db from 'db'

const UsuariosState = (props) => {
  const initialState = {
    usuarios: [],
    isAuth: true,
    usuarioLogueado: null,
  };

  const [state, dispatch] = useReducer(UsuariosReducer, initialState);

  const logearUsuario = (usuario)=>{
    console.log('Sign In',usuario)
    dispatch({
      type: "LOGEAR_USUARIO",
      payload: usuario
    })
  }

  const obtenerUsuarios = ()=>{
    const usuarios = db.models.Usuario.findMany()
    console.log("Get users",usuarios)
    dispatch({
      type:"OBTENER_USUARIOS",
      payload: usuarios
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
        usuarios: state.usuarios,
        //Fn
        logearUsuario,
        obtenerUsuarios
      }}
    >
      {props.children}
    </UsuariosContext.Provider>
  );
};

export default UsuariosState;
