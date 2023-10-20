import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";

function* fetchMonstersSaga() {
    try {
        const response = yield axios.get('/api/monsters');
        console.log('GET all monsters', response.data);
        yield put({ type: 'SET_MONSTERS', payload: response.data })
    } catch (error) {
        console.log('Error fetching monsters', error);
    }
}

function* fetchMonsterDetailsSaga(action) {
    try {
        console.log(action.payload);
        const response = yield axios.get(`api/monsters/${action.payload}`)
        console.log
        yield put({ type: 'SET_MONSTER_DETAILS', payload: response.data })
    } catch (err) {
        console.log('Unable to fecth details of monster with id:', err)
    }
}

function* addMonsterSaga(action) {
    try {
        yield axios({
            method: 'POST',
            url: '/api/monsters',
            data: action.payload
        })
        yield put({ type: 'FETCH_MONSTERS' })
    } catch (err) {
        console.log('Unable to add monster', err)
    }
}

function* deleteMonsterSaga(action) {
    try {
        yield axios({
            method: 'DELETE',
            url: `/api/monsters/${action.payload}`
        });
        yield put({ type: 'FETCH_MONSTERS' });
    } catch (err) {
        console.log('Unable to delete monster character', err)
    }
}

function* monstersSaga() {
    yield takeEvery("FETCH_MONSTERS", fetchMonstersSaga);
    yield takeEvery("FETCH_MONSTER_DETAILS", fetchMonsterDetailsSaga);
    yield takeEvery("ADD_MONSTER", addMonsterSaga);
    yield takeEvery("DELETE_MONSTER", deleteMonsterSaga)
}

export default monstersSaga;