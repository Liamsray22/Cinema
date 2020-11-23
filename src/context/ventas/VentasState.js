import React, { useReducer } from "react";
import VentasContext from "./VentasContext";
import VentasReducer from "./VentasReducer";
import db from 'db'

const currentDate = new Date();
const VentasState = (props) => {
  const initialState = {
    facturas: [],
    facturaSeleccionada: null,
  };

  const [state, dispatch] = useReducer(VentasReducer, initialState);

  const agregarFactura = (venta)=>{
    const factura = db.models.Venta.createVenta(venta)
  }

  const obtenerFacturas = ()=>{
    const facturas = db.models.Venta.getVentas()
    dispatch({
      type:"OBTENER_FACTURAS",
      payload: facturas
    })
  }

  const removerFactura = (id)=>{
    const removed = db.models.Venta.removeVenta(id)
    dispatch({
      type: "REMOVER_FACTURA",
      payload: removed[0]
    })
  }

  return (
    <VentasContext.Provider
      value={{
        //State
        facturas: state.facturas,
        //Fn
        removerFactura,
        obtenerFacturas,
        agregarFactura
      }}
    >
      {props.children}
    </VentasContext.Provider>
  );
};

export default VentasState;
