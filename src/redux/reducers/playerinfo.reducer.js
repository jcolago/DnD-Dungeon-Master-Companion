const playersInfoReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_PLAYERS_INFO':
            return action.payload; 
        default:
            return state;
    }
}

export default playersInfoReducer;