
//Reducer used to set state for games based on the user id
const gamesReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_GAMES':
            return action.payload
        default:
            return state;
    }
}
//Export of the games reducer for use in the root reducer
export default gamesReducer;