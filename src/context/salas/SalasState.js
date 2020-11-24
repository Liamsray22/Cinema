import React, { useReducer } from "react";
import SalasContext from "./SalasContext";
import SalasReducer from "./SalasReducer";
import db from 'db'

export default function SalasState(props) {

    const initialState = {
        salas:[],
        salaSeleccionada: null,
      };
    
      const [state, dispatch] = useReducer(SalasReducer, initialState);

    return (
       <SalasContext.Provider 
        value={{
            salas: state.salas
        }}
       >
           {props.children}
       </SalasContext.Provider>
    )
}
