const itemsArrayReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TO_ARRAY':
            return [...state, action.payload];
        case 'CLEAR_ITEMS':
            return [];
        default:
            return state
    }
}

export default itemsArrayReducer;