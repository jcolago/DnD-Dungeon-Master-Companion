const monsterReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_MONSTERS':
            return action.payload
        default:
            return state;
    }
}

export default monsterReducer;