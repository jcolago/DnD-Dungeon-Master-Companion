const playersReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_PLAYERS':
            return action.payload;
        case 'ADD_PLAYER':
            return [...state, action.payload];
        default:
            return state;
    }
}

export default playersReducer;