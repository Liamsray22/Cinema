export default (state, action) => {
  switch (action.type) {
    case "LOGEAR_USUARIO":
      return{
        ...state,
        usuarioLogueado: action.payload,
        isAuth: true
      }
    case "OBTENER_USUARIOS":
      return {
        ...state,
        usuarios: action.payload
      };
    case "DESLOGUEAR_USUARIO":
      return {
        ...state,
        usuarioLogueado: null,
        isAuth: false
      }
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
