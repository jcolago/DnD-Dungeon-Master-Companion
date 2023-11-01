
//Reducer used to set state for the inventoru list and to dispatch new items to the inventory saga
const itemsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_INVENTORY':
            return action.payload;
        case "ADD_ITEM":
            return [...state, action.payload];
        default:
            return state;
    }
}
//Export of reducer for use in the root reducer
export default itemsReducer;