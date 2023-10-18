const gamesReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_GAMES':
            return action.payload
        case 'ADD_GAME':
            return [...state, action.payload]
        default:
            return state;
    }
}

export default gamesReducer;