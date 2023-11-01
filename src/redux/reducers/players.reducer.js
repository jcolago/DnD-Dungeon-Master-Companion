
//Reducer used to set state of players list
const playersReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_PLAYERS':
            return action.payload; 
        default:
            return state;
    }
}
//Export reducer for use in root reducer
export default playersReducer;