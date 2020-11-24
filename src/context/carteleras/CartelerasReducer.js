export default (state, action) => {
    switch (action.type) {
        case 'OBTENER_CARTELERAS':
            return{
                ...state,
                carteleras: action.payload
            }
        default:
            return state
    }
}