import React, { useReducer } from "react";
import VentasContext from "./VentasContext";
import VentasReducer from "./VentasReducer";

const currentDate = new Date();
const VentasState = (props) => {
  const initialState = {
    // facturas:  [
    //   {id:1,nombre:"Jose",cartelera:3,ticket:4,asiento:10,fecha:`${currentDate.getDate()}/${currentDate.getMonth()+1}/${currentDate.getFullYear()}`,formaPago:"efectivo",monto:"2000"},
    //   {id:2,nombre:"Jose",cartelera:3,ticket:4,asiento:10,fecha:`${currentDate.getDate()}/${currentDate.getMonth()+1}/${currentDate.getFullYear()}`,formaPago:"efectivo",monto:"2000"},
    // ],
    facturas: [
      [1,"Jose",2,2,"#5",`${currentDate.getDate()}/${currentDate.getMonth()+1}/${currentDate.getFullYear()}`,"Efectivo","$2500"],
      [2,"Jose",2,2,"#5",`${currentDate.getDate()}/${currentDate.getMonth()+1}/${currentDate.getFullYear()}`,"Efectivo","$2500"],
      [3,"Jose",2,2,"#5",`${currentDate.getDate()}/${currentDate.getMonth()+1}/${currentDate.getFullYear()}`,"Efectivo","$2500"],
      [4,"Jose",2,2,"#5",`${currentDate.getDate()}/${currentDate.getMonth()+1}/${currentDate.getFullYear()}`,"Efectivo","$2500"],
    ],
    facturaSeleccionada: null,
  };

  const [state, dispatch] = useReducer(VentasReducer, initialState);

  const obtenerFacturas = ()=>{
    dispatch({
      type:"OBTENER_FACTURA"
    })
  }

  const removerFactura = (id)=>{
    dispatch({
      type: "REMOVER_FACTURA",
      payload: id
    })
  }
  
  // const editartFactura = (nuevaFactura)=>{
  //   dispatch({
  //     type: "EDITAR_FACTURA",
  //     payload: nuevaFactura
  //   })
  // }

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
