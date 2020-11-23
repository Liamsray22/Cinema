import db from 'db'

export default (state, action) => {
  switch (action.type) {
    case "LOGUEAR_USUARIO":
      return{
        ...state,
        usuarioLogueado: action.payload.usuario,
        isAuth: true,
        isAdmin: false,
        error: false
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
        isAuth: false,
        isAdmin: false
      }
    case "ERROR":
      return {
        ...state,
        error: true
      }
    default:
      return state;
  }
};
