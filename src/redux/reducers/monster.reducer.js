
//Reducer used to set the state of the monster lister
const monsterReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_MONSTERS':
            return action.payload
        default:
            return state;
    }
}
//Export of the reducer for use in the root reducer
export default monsterReducer;