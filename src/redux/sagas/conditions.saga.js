import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";

function* fetchConditionsSaga() {
    try {
        const conditions = yield axios.get('/api/conditions');
        console.log('GET all conditions', conditions.data);
        yield put({ type: 'SET_CONDITIONS', payload: conditions.data })
    } catch (error) {
        console.log('Error fetching inventory', error);
    }
}

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


function* conditionsSaga() {
    yield takeEvery('FETCH_CONDITIONS', fetchConditionsSaga);
    yield takeEvery('ADD_CONDITION', addConditionSaga);
    yield takeEvery('DELETE_CONDITION', deleteConditionSaga);
    yield takeEvery('UPDATE_CONDITION', updateConditionSaga)
}

export default conditionsSaga;