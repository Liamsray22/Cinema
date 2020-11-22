import React, { useReducer } from "react";
import UsuariosContext from "./UsuariosContext";
import UsuariosReducer from "./UsuariosReducer";

const currentDate = new Date();
const UsuariosState = (props) => {
  const initialState = {
    usuarios: [
      [1,"admin","1234"],
      [2,"Marcos","1234"],
      [3,"Polo","1234"],
      [4,"Julio","1234"],
    ],
    isAuth:true,
    usuarioSeleccionado: null,
  };

  const [state, dispatch] = useReducer(UsuariosReducer, initialState);

  const registrarUsuario = (usuario)=>{
    dispatch({
          type: "REGISTRAR_USUARIO",
          payload: usuario
        })
  }

  const logearUsuario = (usuario)=>{
    dispatch({
      type: "LOGEAR_USUARIO",
      payload: usuario
    })
  }

  const obtenerUsuarios = ()=>{
    dispatch({
      type:"OBTENER_USUARIOS"
    })
  }

  const removerUsuario = (id)=>{
    dispatch({
      type: "REMOVER_USUARIO",
      payload: id
    })
  }

  const editarUsuario = (usuario)=>{
      dispatch({
      type: "EDITAR_USUARIO",
      payload: usuario
    })
  }
  
 

  return (
    <UsuariosContext.Provider
      value={{
        //State
        isAuth: state.isAuth,
        usuarios: state.usuarios,
        //Fn
        logearUsuario,
        registrarUsuario,
      }}
    >
      {props.children}
    </UsuariosContext.Provider>
  );
};

export default UsuariosState;
