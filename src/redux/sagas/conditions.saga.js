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
            url: `/api/conditions/${action.payload.id}`,
            data: action.payload
        })
        yield put({ type: 'FETCH_PLAYERS' })
    } catch (err) {
        console.log('Unable to add condition to player', err)
    }
}

//Delete condition saga goes here


function* conditionsSaga() {
    yield takeEvery('FETCH_CONDITIONS', fetchConditionsSaga);
    yield takeEvery('ADD_CONDITION', addConditionSaga)
}

export default conditionsSaga;