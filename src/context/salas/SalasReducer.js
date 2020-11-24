export default (state, action) => {
    switch (action.type) {
        case 'OBTENER_SALA':
            return{
                ...state,
                salaSeleccionada: action.payload
            }
        default:
            return state
    }
}