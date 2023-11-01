
//Reducer used to set state for conditions
const conditionsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_CONDITIONS':
            return action.payload;
        default:
            return state;
    }
}
//export of the conditions reducer to be used in root reducer
export default conditionsReducer;