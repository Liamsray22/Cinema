export default (state, action) => {
  switch (action.type) {
    case "LOGEAR_USUARIO":
      return{
        ...state,
        isAuth: !state.isAuth
      }
    // case "REMOVER_FACTURA":
    //   return {
    //     ...state,
    //     facturas: state.facturas.filter(
    //       (factura) => factura[0] !== action.payload
    //       ),
    //     facturaSeleccionada: null,
    //   };
    default:
      return state;
    // case "EDITAR_FACTURA":
    //   return {
    //     ...state,
    //     facturas: state.facturas.map((factura) =>
    //       factura[0] === action.payload[0] ? action.payload : factura
    //     ),
    //   };
  }
};
