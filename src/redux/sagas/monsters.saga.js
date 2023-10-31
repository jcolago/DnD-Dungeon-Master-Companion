import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";

//Sends request to server to get data from monsters table and send the response to the reducer to set state
function* fetchMonstersSaga() {
    try {
        const response = yield axios.get('/api/monsters');
        console.log('GET all monsters', response.data);
        yield put({ type: 'SET_MONSTERS', payload: response.data })
    } catch (error) {
        console.log('Error fetching monsters', error);
    }
}

//Sends request to server to fetch a specific monster's data for use in the monster details component
function* fetchMonsterDetailsSaga(action) {
    try {
        console.log(action.payload);
        const response = yield axios.get(`api/monsters/${action.payload}`)
        yield put({ type: 'SET_MONSTER_DETAILS', payload: response.data })
    } catch (err) {
        console.log('Unable to fecth details of monster with id:', err)
    }
}

//Sends data from monster entry from to server to be added to the monsters table
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

//Sends request to sever to delete a monster from the monsters table
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
//Watcher saga for all monster sagas
function* monstersSaga() {
    yield takeEvery("FETCH_MONSTERS", fetchMonstersSaga);
    yield takeEvery("FETCH_MONSTER_DETAILS", fetchMonsterDetailsSaga);
    yield takeEvery("ADD_MONSTER", addMonsterSaga);
    yield takeEvery("DELETE_MONSTER", deleteMonsterSaga)
}
//Exports the watcher saga for use in root saga file
export default monstersSaga;