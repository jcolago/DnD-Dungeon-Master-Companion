import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";

function* fetchPlayersSaga() {
    try {
        const players = yield axios.get('/api/players');
        console.log('GET all players', players.data);
        yield put ({ type: 'SET_PLAYERS', payload: players.data })
    } catch (error) {
        console.log('Error fetching players', error);
    }
}

function* deletePlayerSaga(action) {
    try {
        yield axios ({
            method: 'DELETE',
            url: `/api/players/${action.payload}`
        });
        yield put ({ type: 'FETCH_PLAYERS'});
    } catch (error) {
        console.log('Unable to delete player character', error)
    }
}




function* playersSaga() {
    yield takeEvery("FETCH_PLAYERS", fetchPlayersSaga)
    yield takeEvery("DELETE_CHARACTER", deletePlayerSaga)
}

export default playersSaga;