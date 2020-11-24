import React, { useReducer } from "react";
import SalasContext from "./SalasContext";
import SalasReducer from "./SalasReducer";
import db from 'db'

export default function SalasState(props) {

    const initialState = {
        salas:[],
        salaSeleccionada: [],
      };
    
      const [state, dispatch] = useReducer(SalasReducer, initialState);
    
      const getSalaPorId =(idSala)=>{
       console.log('Sala:',db.models.Sala.findOne(idSala))
      }
    return (
       <SalasContext.Provider 
        value={{
            salas: state.salas,
            getSalaPorId
        }}
       >
           {props.children}
       </SalasContext.Provider>
    )
}
