const playerDetailsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_PLAYER_DETAILS':
            return action.payload; 
        default:
            return state;
    }
}

export default playerDetailsReducer;