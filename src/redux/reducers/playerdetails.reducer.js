
//Reducer used to set state to specific player
const playerDetailsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_PLAYER_DETAILS':
            return action.payload;
        default:
            return state;
    }
}
//Export of reducer for use in root reducer
export default playerDetailsReducer;