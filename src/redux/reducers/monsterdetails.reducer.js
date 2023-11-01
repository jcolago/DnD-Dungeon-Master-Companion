
//Reducer used to set state to a specific monster
const monsterDetailsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_MONSTER_DETAILS':
            return action.payload;
        default:
            return state;
    }
}
//Export of reducer for use in root reducer
export default monsterDetailsReducer;