import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";

//Fetches conditions from server and sets the state for the full list
function* fetchConditionsSaga() {
    try {
        const conditions = yield axios.get('/api/conditions');
        console.log('GET all conditions', conditions.data);
        yield put({ type: 'SET_CONDITIONS', payload: conditions.data })
    } catch (error) {
        console.log('Error fetching inventory', error);
    }
}

//Saga for posting a new condition to a player, then dispatches to get the players list to rerender add condition
function* addConditionSaga(action) {
    try {
        yield axios({
            method: 'POST',
            url: `/api/conditions/${action.payload.player_id}`,
            data: action.payload
        })
        yield put({ type: 'FETCH_PLAYERS' })
    } catch (err) {
        console.log('Unable to add condition to player', err)
    }
}

//Saga that deletes a condition then fetches the players list to rerender the new data
function* deleteConditionSaga(action) {
    try {
        yield axios({
            method: 'DELETE',
            url: `/api/conditions/`,
            data: {id: action.payload}
        });
        yield put({ type: 'FETCH_PLAYERS' });
    } catch (err) {
        console.log('Unable to delete condition', err)
    }
}

//Saga used to update a condition lenght from the game view component, then fetches the player list to rerender the data
function* updateConditionSaga(action) {
    try {
        console.log(action.payload) 
        yield axios ({
            method: 'PUT',
            url: `/api/conditions/`,
            data: {id: action.payload.id, length: action.payload.length}
        });
        yield put ({ type: 'FETCH_PLAYERS' })
    } catch (err) {
        console.log('Unable to update condition length', err)
    }
}

//watcher saga for condition sagas
function* conditionsSaga() {
    yield takeEvery('FETCH_CONDITIONS', fetchConditionsSaga);
    yield takeEvery('ADD_CONDITION', addConditionSaga);
    yield takeEvery('DELETE_CONDITION', deleteConditionSaga);
    yield takeEvery('UPDATE_CONDITION', updateConditionSaga)
}
//exports condition sagas for use in root saga file
export default conditionsSaga;