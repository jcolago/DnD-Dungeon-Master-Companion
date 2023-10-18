const conditionsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_CONDITIONS':
            return action.payload;
        case 'ADD_CONDITION':
            return [...state, action.payload]
        default:
            return state;
    }
}

export default conditionsReducer;