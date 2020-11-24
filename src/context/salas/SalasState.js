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
       const sala = db.models.Sala.findOne(idSala)
       dispatch({
           type: "OBTENER_SALA",
           payload: sala,
       })
      }
    return (
       <SalasContext.Provider 
        value={{
            //state
            salas: state.salas,
            salaSeleccionada: state.salaSeleccionada,
            //Fn
            getSalaPorId
        }}
       >
           {props.children}
       </SalasContext.Provider>
    )
}
