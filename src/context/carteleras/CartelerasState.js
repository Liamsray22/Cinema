import React, { useReducer } from "react";
import CartelerasContext from "./CartelerasContext";
import CartelerasReducer from "./CartelerasReducer";
import db from 'db'

export default function CartelerasState(props) {
    const initialState = {
        carteleras: [],
        carteleraSeleccionada: null,
      };

    const [state, dispatch] = useReducer(CartelerasReducer, initialState)

    const obtenerCarteleras = ()=>{
        const carteleras = db.models.Cartelera.findMany()
        console.log('carteleraState',carteleras);
        dispatch({
            type: "OBTENER_CARTELERAS",
            payload: carteleras
        })
    }

    return (
       <CartelerasContext.Provider
        value={{
            //state
            carteleras: state.carteleras,
            //fn
            obtenerCarteleras
        }}
       >
           {props.children}
       </CartelerasContext.Provider>
    )
}
