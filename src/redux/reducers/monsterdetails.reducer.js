const monsterDetailsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_MONSTER_DETAILS':
            return action.payload;
        default:
            return state;
    }
}

export default monsterDetailsReducer;