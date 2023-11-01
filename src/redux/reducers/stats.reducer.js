
//Reducer used to set state in player form entry and cleared out when player is submitted
const statsReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_STATS':
            return action.payload; 
        case 'CLEAR_STATS':
            return {};
        default:
            return state;
    }
}
//Export of reducer for use in root reducer
export default statsReducer;