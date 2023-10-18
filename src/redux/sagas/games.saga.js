import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";

function* fetchGamesSaga() {
    try {
        const inventory = yield axios.get('/api/games');
        console.log('GET all games', inventory.data);
        yield put({ type: 'SET_GAMES', payload: inventory.data })
    } catch (error) {
        console.log('Error fetching games', error);
    }
}

function* addGameSaga(action) {
    try {
        yield axios({
            method: 'POST',
            url: '/api/games',
            data: action.payload
        })
        yield put({ type: 'FETCH_GAMES' })
    } catch (err) {
        console.log('Unable to add game', err)
    }
}



function* gamesSaga() {
    yield takeEvery("FETCH_GAMES", fetchGamesSaga);
    yield takeEvery("ADD_GAME", addGameSaga)
}

export default gamesSaga;