import React, { useReducer } from "react";
import CartelerasContext from "./CartelerasContext";
import CartelerasReducer from "./VentasReducer";
import db from 'db'

export default function CartelerasState(props) {
    const initialState = {
        carteleras: [],
        carteleraSeleccionada: null,
      };

    const [state, dispatch] = useReducer(CartelerasReducer, initialState)

    return (
       <CartelerasContext.Provider>
           {props.children}
       </CartelerasContext.Provider>
    )
}
