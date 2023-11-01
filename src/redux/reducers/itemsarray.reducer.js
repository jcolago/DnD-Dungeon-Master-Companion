
//Reducer used to set state for items added during the character entry form and to clear after player submission
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
//Export of reducer for use in the root reducer
export default itemsArrayReducer;