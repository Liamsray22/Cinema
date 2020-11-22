import React, { useReducer } from "react";
import VentasContext from "./VentasContext";
import VentasReducer from "./VentasReducer";
import db from 'db'

const currentDate = new Date();
const VentasState = (props) => {
  const initialState = {
    // facturas:  [
    //   {id:1,nombre:"Jose",cartelera:3,ticket:4,asiento:10,fecha:`${currentDate.getDate()}/${currentDate.getMonth()+1}/${currentDate.getFullYear()}`,formaPago:"efectivo",monto:"2000"},
    //   {id:2,nombre:"Jose",cartelera:3,ticket:4,asiento:10,fecha:`${currentDate.getDate()}/${currentDate.getMonth()+1}/${currentDate.getFullYear()}`,formaPago:"efectivo",monto:"2000"},
    // ],
    facturas: [],
    facturaSeleccionada: null,
  };

  const [state, dispatch] = useReducer(VentasReducer, initialState);

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
        // editartFactura
      }}
    >
      {props.children}
    </VentasContext.Provider>
  );
};

export default VentasState;
