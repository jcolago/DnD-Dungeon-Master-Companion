
//Reducer used to hold information entered in the player entry from and cleared out at player submission
const playersInfoReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_PLAYERS_INFO':
            return action.payload; 
        case 'CLEAR_INFO':
            return [];
        default:
            return state;
    }
}
//Export for reducer to be used in root reducer
export default playersInfoReducer;