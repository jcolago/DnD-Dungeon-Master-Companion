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

export default playersInfoReducer;